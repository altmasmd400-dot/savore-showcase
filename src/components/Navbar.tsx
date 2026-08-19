import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, ShoppingBag, User as UserIcon, X } from "lucide-react";
import { toast } from "sonner";
import { useStore } from "@/lib/store";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const links = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/reservations", label: "Reservations" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { user, logout, cartCount, setCartOpen } = useStore();
  const navigate = useNavigate();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const handleLogout = () => {
    logout();
    toast.success("Signed out", { description: "See you again soon." });
    navigate({ to: "/", replace: true });
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "glass-panel border-x-0 border-t-0 py-2 shadow-[var(--shadow-lux)]"
          : "border-b border-transparent py-4",
      )}
    >
      <nav className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 lg:px-8">
        <div className="flex min-w-0 items-center gap-10">
          <Link to="/" className="min-w-0 shrink-0">
            <span className="font-display text-gold text-2xl tracking-[0.3em] sm:text-[1.7rem]">
              SAVORÉ
            </span>
          </Link>
          <ul className="hidden items-center gap-8 lg:flex">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  activeOptions={{ exact: l.to === "/" }}
                  className="text-muted-foreground hover:text-primary relative py-2 text-xs tracking-[0.22em] uppercase transition-colors data-[status=active]:text-primary"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <button
            type="button"
            aria-label="Open cart"
            onClick={() => setCartOpen(true)}
            className="border-border/70 hover:border-primary/60 hover:text-primary relative grid h-10 w-10 place-items-center rounded-full border transition-colors"
          >
            <ShoppingBag className="h-4 w-4" />
            {cartCount > 0 ? (
              <span className="bg-primary text-primary-foreground absolute -top-1 -right-1 grid h-5 min-w-5 place-items-center rounded-full px-1 text-[0.65rem] font-semibold">
                {cartCount}
              </span>
            ) : null}
          </button>

          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  type="button"
                  className="border-primary/40 hover:bg-primary/10 flex items-center gap-2 rounded-full border py-1.5 pr-3 pl-1.5 transition-colors"
                >
                  <span className="bg-primary text-primary-foreground grid h-7 w-7 place-items-center rounded-full text-xs font-semibold">
                    {user.name.charAt(0).toUpperCase()}
                  </span>
                  <span className="hidden max-w-24 truncate text-xs tracking-wider sm:block">
                    {user.name.split(" ")[0]}
                  </span>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel className="truncate">
                  {user.email}
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/profile">My dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/reservations">Book a table</Link>
                </DropdownMenuItem>
                {user.role === "admin" ? (
                  <DropdownMenuItem asChild>
                    <Link to="/admin">Admin panel</Link>
                  </DropdownMenuItem>
                ) : null}
                <DropdownMenuSeparator />
                <DropdownMenuItem onSelect={handleLogout}>
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button asChild size="sm" variant="outline" className="hidden sm:inline-flex">
              <Link to="/login">
                <UserIcon className="h-4 w-4" /> Login
              </Link>
            </Button>
          )}

          <Button asChild size="sm" className="hidden lg:inline-flex">
            <Link to="/reservations">Reserve a Table</Link>
          </Button>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="border-border/70 grid h-10 w-10 place-items-center rounded-full border lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      <div
        className={cn(
          "grid overflow-hidden transition-all duration-400 lg:hidden",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="min-h-0">
          <ul className="glass-panel mx-4 mt-3 space-y-1 rounded-lg p-3">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  activeOptions={{ exact: l.to === "/" }}
                  className="hover:bg-secondary/60 block rounded-md px-4 py-3 text-sm tracking-[0.18em] uppercase data-[status=active]:text-primary"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              {user ? (
                <Button asChild className="w-full">
                  <Link to="/profile">My dashboard</Link>
                </Button>
              ) : (
                <Button asChild className="w-full">
                  <Link to="/login">Login / Sign up</Link>
                </Button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}