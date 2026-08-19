import scallops from "@/assets/dish-scallops.jpg";
import risotto from "@/assets/dish-risotto.jpg";
import steak from "@/assets/dish-steak.jpg";
import pizza from "@/assets/dish-pizza.jpg";
import dessert from "@/assets/dish-dessert.jpg";
import pasta from "@/assets/dish-pasta.jpg";
import drink from "@/assets/dish-drink.jpg";
import burrata from "@/assets/dish-burrata.jpg";

export const images = {
  scallops,
  risotto,
  steak,
  pizza,
  dessert,
  pasta,
  drink,
  burrata,
};

export type Category =
  | "Starters"
  | "Main Course"
  | "Pasta"
  | "Pizza"
  | "Desserts"
  | "Drinks";

export const categories: Category[] = [
  "Starters",
  "Main Course",
  "Pasta",
  "Pizza",
  "Desserts",
  "Drinks",
];

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  image: string;
  vegetarian: boolean;
  available: boolean;
  signature?: boolean;
  popular?: boolean;
}

export const menuItems: MenuItem[] = [
  {
    id: "m1",
    name: "Hokkaido Scallops",
    description:
      "Hand-dived scallops seared in brown butter, cauliflower velouté, apple and chive oil.",
    price: 24,
    category: "Starters",
    image: scallops,
    vegetarian: false,
    available: true,
    signature: true,
  },
  {
    id: "m2",
    name: "Burrata di Puglia",
    description:
      "Creamy burrata, heirloom tomatoes, aged balsamic pearls and Genovese basil oil.",
    price: 18,
    category: "Starters",
    image: burrata,
    vegetarian: true,
    available: true,
    popular: true,
  },
  {
    id: "m3",
    name: "Beef Tartare Royale",
    description:
      "Hand-cut Angus fillet, smoked egg yolk, capers, cornichons and toasted sourdough.",
    price: 21,
    category: "Starters",
    image: steak,
    vegetarian: false,
    available: true,
  },
  {
    id: "m4",
    name: "Wagyu Ribeye A5",
    description:
      "48-day dry-aged wagyu, bone marrow jus, glazed root vegetables and black garlic.",
    price: 68,
    category: "Main Course",
    image: steak,
    vegetarian: false,
    available: true,
    signature: true,
    popular: true,
  },
  {
    id: "m5",
    name: "Truffle Wild Mushroom Risotto",
    description:
      "Carnaroli rice, forest mushrooms, aged parmesan and freshly shaved black truffle.",
    price: 32,
    category: "Main Course",
    image: risotto,
    vegetarian: true,
    available: true,
    signature: true,
  },
  {
    id: "m6",
    name: "Butter-Poached Sea Bass",
    description:
      "Line-caught sea bass, saffron fennel, samphire and champagne beurre blanc.",
    price: 39,
    category: "Main Course",
    image: scallops,
    vegetarian: false,
    available: true,
    popular: true,
  },
  {
    id: "m7",
    name: "Tagliatelle al Ragù",
    description:
      "Handmade tagliatelle, eight-hour short rib ragù, Parmigiano Reggiano 36 months.",
    price: 27,
    category: "Pasta",
    image: pasta,
    vegetarian: false,
    available: true,
    popular: true,
  },
  {
    id: "m8",
    name: "Cacio e Pepe Tonnarelli",
    description:
      "Bronze-cut tonnarelli, Pecorino Romano, cracked Tellicherry pepper, lemon zest.",
    price: 23,
    category: "Pasta",
    image: pasta,
    vegetarian: true,
    available: true,
  },
  {
    id: "m9",
    name: "Lobster Linguine",
    description:
      "Half Atlantic lobster, San Marzano tomato, chilli, garlic and flat leaf parsley.",
    price: 44,
    category: "Pasta",
    image: pasta,
    vegetarian: false,
    available: true,
    signature: true,
  },
  {
    id: "m10",
    name: "Margherita Reale",
    description:
      "72-hour fermented dough, fior di latte, San Marzano tomato and fresh basil.",
    price: 19,
    category: "Pizza",
    image: pizza,
    vegetarian: true,
    available: true,
    popular: true,
  },
  {
    id: "m11",
    name: "Tartufo Bianco Pizza",
    description:
      "White truffle cream, taleggio, wild mushrooms, thyme and truffle honey drizzle.",
    price: 29,
    category: "Pizza",
    image: pizza,
    vegetarian: true,
    available: true,
  },
  {
    id: "m12",
    name: "Diavola Nera",
    description:
      "Spicy nduja, soppressata, smoked scamorza, calabrian chilli and hot honey.",
    price: 24,
    category: "Pizza",
    image: pizza,
    vegetarian: false,
    available: true,
  },
  {
    id: "m13",
    name: "Valrhona Fondant",
    description:
      "Warm 70% chocolate fondant, salted caramel core, raspberry coulis and gold leaf.",
    price: 16,
    category: "Desserts",
    image: dessert,
    vegetarian: true,
    available: true,
    signature: true,
    popular: true,
  },
  {
    id: "m14",
    name: "Vanilla Bourbon Crème Brûlée",
    description:
      "Madagascan vanilla custard, caramelised demerara crust, almond tuile.",
    price: 14,
    category: "Desserts",
    image: dessert,
    vegetarian: true,
    available: true,
  },
  {
    id: "m15",
    name: "Pistachio Tiramisù",
    description:
      "Sicilian pistachio mascarpone, espresso-soaked savoiardi, cocoa nib crumble.",
    price: 15,
    category: "Desserts",
    image: dessert,
    vegetarian: true,
    available: true,
  },
  {
    id: "m16",
    name: "Savoré Old Fashioned",
    description:
      "Barrel-aged bourbon, smoked demerara, orange bitters and a single clear ice cube.",
    price: 17,
    category: "Drinks",
    image: drink,
    vegetarian: true,
    available: true,
    popular: true,
  },
  {
    id: "m17",
    name: "Amalfi Spritz",
    description:
      "Sorrento lemon, elderflower, prosecco and a whisper of Mediterranean thyme.",
    price: 14,
    category: "Drinks",
    image: drink,
    vegetarian: true,
    available: true,
  },
  {
    id: "m18",
    name: "Barolo Riserva 2016",
    description:
      "Nebbiolo from Piedmont — rose, tar and dried cherry. Served by the glass.",
    price: 22,
    category: "Drinks",
    image: drink,
    vegetarian: true,
    available: false,
  },
];

export interface Review {
  id: string;
  name: string;
  initials: string;
  rating: number;
  text: string;
  role: string;
}

export const reviews: Review[] = [
  {
    id: "r1",
    name: "Isabella Moreau",
    initials: "IM",
    rating: 5,
    role: "Food critic, La Table",
    text: "The wagyu ribeye is the finest I have had outside of Kyoto. Service was flawless, the room glows, and every course arrived with intent.",
  },
  {
    id: "r2",
    name: "Daniel Okafor",
    initials: "DO",
    rating: 5,
    role: "Regular guest",
    text: "We celebrated our anniversary here for the third year running. The team remembered our table and our wine. That is rare hospitality.",
  },
  {
    id: "r3",
    name: "Sofia Bergström",
    initials: "SB",
    rating: 4,
    role: "Travel writer",
    text: "The truffle risotto alone justifies the trip. Slightly slow between courses on a busy Saturday, but the kitchen clearly cares deeply.",
  },
  {
    id: "r4",
    name: "Marco Rinaldi",
    initials: "MR",
    rating: 5,
    role: "Sommelier",
    text: "A wine list with genuine point of view — Piedmont and Burgundy handled with restraint. The Barolo pairing with the short rib ragù was perfect.",
  },
  {
    id: "r5",
    name: "Amelia Hart",
    initials: "AH",
    rating: 5,
    role: "Guest since 2019",
    text: "The window tables at dusk are the best seats in the city. Booking took thirty seconds and the confirmation was in my inbox instantly.",
  },
  {
    id: "r6",
    name: "Rahul Mehta",
    initials: "RM",
    rating: 5,
    role: "Business diner",
    text: "I host clients here monthly. Quiet enough to talk, impressive enough to remember. The vegetarian tasting selection is genuinely excellent.",
  },
  {
    id: "r7",
    name: "Clara Ndiaye",
    initials: "CN",
    rating: 4,
    role: "Pastry chef",
    text: "That Valrhona fondant has a caramel core that behaves exactly as it should. Professional respect to the pastry section.",
  },
  {
    id: "r8",
    name: "Thomas Weber",
    initials: "TW",
    rating: 5,
    role: "Guest",
    text: "From the doorman to the cheese trolley, everything felt considered. Worth every euro and then some.",
  },
];