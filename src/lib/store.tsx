import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { menuItems as seedMenu, type MenuItem } from "@/data/menu";

const KEY = "savore.state.v1";
export const TAX_RATE = 0.08;

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  role: "customer" | "admin";
  memberSince: string;
}

export interface CartLine {
  id: string;
  name: string;
  price: number;
  image: string;
  qty: number;
}

export type ReservationStatus = "confirmed" | "cancelled" | "completed";

export interface Reservation {
  id: string;
  code: string;
  userEmail: string | null;
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  seating: "Indoor" | "Outdoor" | "Window";
  table: string | null;
  requests: string;
  status: ReservationStatus;
  createdAt: string;
}

export interface Order {
  id: string;
  code: string;
  userEmail: string | null;
  items: CartLine[];
  total: number;
  createdAt: string;
  status: "paid";
}

interface State {
  users: User[];
  currentEmail: string | null;
  cart: CartLine[];
  reservations: Reservation[];
  orders: Order[];
  favorites: string[];
  menu: MenuItem[];
}

const todayISO = () => new Date().toISOString().slice(0, 10);
const dayOffset = (n: number) =>
  new Date(Date.now() + n * 86400000).toISOString().slice(0, 10);

const demoUsers: User[] = [
  {
    id: "u1",
    name: "Demo Guest",
    email: "guest@savore.com",
    password: "demo1234",
    role: "customer",
    memberSince: "2023-04-11",
  },
  {
    id: "u2",
    name: "Restaurant Manager",
    email: "admin@savore.com",
    password: "admin1234",
    role: "admin",
    memberSince: "2021-01-05",
  },
];

const demoReservations: Reservation[] = [
  {
    id: "d1",
    code: "SVR-4821",
    userEmail: "guest@savore.com",
    name: "Demo Guest",
    email: "guest@savore.com",
    phone: "+33 1 42 60 30 30",
    date: dayOffset(3),
    time: "19:30",
    guests: 2,
    seating: "Window",
    table: "T4",
    requests: "Anniversary — a candle on the dessert if possible.",
    status: "confirmed",
    createdAt: dayOffset(-2),
  },
  {
    id: "d2",
    code: "SVR-3190",
    userEmail: "guest@savore.com",
    name: "Demo Guest",
    email: "guest@savore.com",
    phone: "+33 1 42 60 30 30",
    date: dayOffset(-21),
    time: "20:00",
    guests: 4,
    seating: "Indoor",
    table: "T7",
    requests: "",
    status: "completed",
    createdAt: dayOffset(-30),
  },
  {
    id: "d3",
    code: "SVR-5507",
    userEmail: null,
    name: "Isabella Moreau",
    email: "isabella@example.com",
    phone: "+33 6 21 44 90 12",
    date: todayISO(),
    time: "21:00",
    guests: 6,
    seating: "Outdoor",
    table: "T9",
    requests: "Two guests are vegetarian.",
    status: "confirmed",
    createdAt: dayOffset(-1),
  },
  {
    id: "d4",
    code: "SVR-6612",
    userEmail: null,
    name: "Marco Rinaldi",
    email: "marco@example.com",
    phone: "+39 340 118 2277",
    date: todayISO(),
    time: "18:30",
    guests: 2,
    seating: "Window",
    table: "T2",
    requests: "",
    status: "confirmed",
    createdAt: dayOffset(-4),
  },
  {
    id: "d5",
    code: "SVR-7003",
    userEmail: null,
    name: "Sofia Bergström",
    email: "sofia@example.com",
    phone: "+46 70 552 1180",
    date: dayOffset(1),
    time: "20:30",
    guests: 3,
    seating: "Indoor",
    table: "T6",
    requests: "Prefer a quiet corner.",
    status: "cancelled",
    createdAt: dayOffset(-6),
  },
];

const demoOrders: Order[] = [
  {
    id: "o1",
    code: "ORD-1042",
    userEmail: "guest@savore.com",
    items: [
      {
        id: "m5",
        name: "Truffle Wild Mushroom Risotto",
        price: 32,
        image: seedMenu[4]!.image,
        qty: 1,
      },
      {
        id: "m13",
        name: "Valrhona Fondant",
        price: 16,
        image: seedMenu[12]!.image,
        qty: 2,
      },
    ],
    total: 69.12,
    createdAt: dayOffset(-14),
    status: "paid",
  },
];

const initialState: State = {
  users: demoUsers,
  currentEmail: null,
  cart: [],
  reservations: demoReservations,
  orders: demoOrders,
  favorites: ["m4", "m13"],
  menu: seedMenu,
};

export const floorTables = [
  { id: "T1", seats: 2, zone: "Indoor" },
  { id: "T2", seats: 2, zone: "Window" },
  { id: "T3", seats: 4, zone: "Indoor" },
  { id: "T4", seats: 2, zone: "Window" },
  { id: "T5", seats: 6, zone: "Indoor" },
  { id: "T6", seats: 4, zone: "Indoor" },
  { id: "T7", seats: 4, zone: "Outdoor" },
  { id: "T8", seats: 2, zone: "Outdoor" },
  { id: "T9", seats: 8, zone: "Outdoor" },
  { id: "T10", seats: 4, zone: "Window" },
  { id: "T11", seats: 2, zone: "Indoor" },
  { id: "T12", seats: 6, zone: "Window" },
] as const;

interface Ctx extends State {
  user: User | null;
  ready: boolean;
  login: (email: string, password: string) => { ok: boolean; error?: string };
  signup: (
    name: string,
    email: string,
    password: string,
  ) => { ok: boolean; error?: string };
  logout: () => void;
  addToCart: (item: MenuItem, qty?: number) => void;
  setQty: (id: string, qty: number) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  checkout: () => Order;
  addReservation: (
    r: Omit<Reservation, "id" | "code" | "status" | "createdAt" | "userEmail">,
  ) => Reservation;
  setReservationStatus: (id: string, status: ReservationStatus) => void;
  toggleFavorite: (id: string) => void;
  saveMenuItem: (item: MenuItem) => void;
  deleteMenuItem: (id: string) => void;
  cartCount: number;
  subtotal: number;
  tax: number;
  total: number;
  cartOpen: boolean;
  setCartOpen: (open: boolean) => void;
}

const StoreContext = createContext<Ctx | null>(null);

function load(): State {
  if (typeof window === "undefined") return initialState;
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return initialState;
    const parsed = JSON.parse(raw) as Partial<State>;
    return { ...initialState, ...parsed };
  } catch {
    return initialState;
  }
}

const rand = (prefix: string) =>
  `${prefix}-${Math.floor(1000 + Math.random() * 9000)}`;

export function StoreProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<State>(initialState);
  const [ready, setReady] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    setState(load());
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    window.localStorage.setItem(KEY, JSON.stringify(state));
  }, [state, ready]);

  const user = useMemo(
    () => state.users.find((u) => u.email === state.currentEmail) ?? null,
    [state.users, state.currentEmail],
  );

  const login = useCallback(
    (email: string, password: string) => {
      const found = state.users.find(
        (u) => u.email.toLowerCase() === email.trim().toLowerCase(),
      );
      if (!found) return { ok: false, error: "No account found for that email." };
      if (found.password !== password)
        return { ok: false, error: "Incorrect password. Please try again." };
      setState((s) => ({ ...s, currentEmail: found.email }));
      return { ok: true };
    },
    [state.users],
  );

  const signup = useCallback(
    (name: string, email: string, password: string) => {
      const clean = email.trim().toLowerCase();
      if (state.users.some((u) => u.email.toLowerCase() === clean))
        return { ok: false, error: "An account with this email already exists." };
      const newUser: User = {
        id: rand("u"),
        name: name.trim(),
        email: clean,
        password,
        role: "customer",
        memberSince: todayISO(),
      };
      setState((s) => ({
        ...s,
        users: [...s.users, newUser],
        currentEmail: newUser.email,
      }));
      return { ok: true };
    },
    [state.users],
  );

  const logout = useCallback(
    () => setState((s) => ({ ...s, currentEmail: null })),
    [],
  );

  const addToCart = useCallback((item: MenuItem, qty = 1) => {
    setState((s) => {
      const existing = s.cart.find((l) => l.id === item.id);
      const cart = existing
        ? s.cart.map((l) => (l.id === item.id ? { ...l, qty: l.qty + qty } : l))
        : [
            ...s.cart,
            {
              id: item.id,
              name: item.name,
              price: item.price,
              image: item.image,
              qty,
            },
          ];
      return { ...s, cart };
    });
  }, []);

  const setQty = useCallback((id: string, qty: number) => {
    setState((s) => ({
      ...s,
      cart:
        qty <= 0
          ? s.cart.filter((l) => l.id !== id)
          : s.cart.map((l) => (l.id === id ? { ...l, qty } : l)),
    }));
  }, []);

  const removeFromCart = useCallback(
    (id: string) =>
      setState((s) => ({ ...s, cart: s.cart.filter((l) => l.id !== id) })),
    [],
  );

  const clearCart = useCallback(() => setState((s) => ({ ...s, cart: [] })), []);

  const subtotal = state.cart.reduce((sum, l) => sum + l.price * l.qty, 0);
  const tax = Math.round(subtotal * TAX_RATE * 100) / 100;
  const total = Math.round((subtotal + tax) * 100) / 100;
  const cartCount = state.cart.reduce((n, l) => n + l.qty, 0);

  const checkout = useCallback(() => {
    const order: Order = {
      id: rand("o"),
      code: rand("ORD"),
      userEmail: state.currentEmail,
      items: state.cart,
      total,
      createdAt: todayISO(),
      status: "paid",
    };
    setState((s) => ({ ...s, orders: [order, ...s.orders], cart: [] }));
    return order;
  }, [state.cart, state.currentEmail, total]);

  const addReservation = useCallback<Ctx["addReservation"]>(
    (r) => {
      const reservation: Reservation = {
        ...r,
        id: rand("res"),
        code: rand("SVR"),
        userEmail: state.currentEmail,
        status: "confirmed",
        createdAt: todayISO(),
      };
      setState((s) => ({
        ...s,
        reservations: [reservation, ...s.reservations],
      }));
      return reservation;
    },
    [state.currentEmail],
  );

  const setReservationStatus = useCallback(
    (id: string, status: ReservationStatus) =>
      setState((s) => ({
        ...s,
        reservations: s.reservations.map((r) =>
          r.id === id ? { ...r, status } : r,
        ),
      })),
    [],
  );

  const toggleFavorite = useCallback(
    (id: string) =>
      setState((s) => ({
        ...s,
        favorites: s.favorites.includes(id)
          ? s.favorites.filter((f) => f !== id)
          : [...s.favorites, id],
      })),
    [],
  );

  const saveMenuItem = useCallback(
    (item: MenuItem) =>
      setState((s) => ({
        ...s,
        menu: s.menu.some((m) => m.id === item.id)
          ? s.menu.map((m) => (m.id === item.id ? item : m))
          : [item, ...s.menu],
      })),
    [],
  );

  const deleteMenuItem = useCallback(
    (id: string) =>
      setState((s) => ({ ...s, menu: s.menu.filter((m) => m.id !== id) })),
    [],
  );

  const value: Ctx = {
    ...state,
    user,
    ready,
    login,
    signup,
    logout,
    addToCart,
    setQty,
    removeFromCart,
    clearCart,
    checkout,
    addReservation,
    setReservationStatus,
    toggleFavorite,
    saveMenuItem,
    deleteMenuItem,
    cartCount,
    subtotal,
    tax,
    total,
    cartOpen,
    setCartOpen,
  };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be used inside StoreProvider");
  return ctx;
}

export const money = (n: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "EUR" }).format(n);