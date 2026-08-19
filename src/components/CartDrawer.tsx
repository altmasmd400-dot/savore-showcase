import { Link, useNavigate } from "@tanstack/react-router";
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { money, useStore } from "@/lib/store";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

export function CartDrawer() {
  const {
    cart,
    cartOpen,
    setCartOpen,
    setQty,
    removeFromCart,
    clearCart,
    subtotal,
    tax,
    total,
  } = useStore();
  const navigate = useNavigate();

  return (
    <Sheet open={cartOpen} onOpenChange={setCartOpen}>
      <SheetContent className="flex w-full flex-col sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="font-display text-2xl font-light">
            Your order
          </SheetTitle>
          <SheetDescription>
            {cart.length
              ? "Review your selection before checkout."
              : "Your basket is currently empty."}
          </SheetDescription>
        </SheetHeader>

        <div className="flex-1 space-y-4 overflow-y-auto px-4">
          {cart.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-4 py-16 text-center">
              <ShoppingBag className="text-muted-foreground h-10 w-10" />
              <p className="text-muted-foreground text-sm">
                Nothing here yet — explore the menu and add something delicious.
              </p>
              <Button asChild variant="outline" onClick={() => setCartOpen(false)}>
                <Link to="/menu">Explore menu</Link>
              </Button>
            </div>
          ) : (
            cart.map((line) => (
              <div
                key={line.id}
                className="border-border/60 bg-card/50 flex gap-4 rounded-lg border p-3"
              >
                <img
                  src={line.image}
                  alt={line.name}
                  loading="lazy"
                  className="h-20 w-20 shrink-0 rounded-md object-cover"
                />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium">{line.name}</p>
                  <p className="text-primary mt-1 text-sm">{money(line.price)}</p>
                  <div className="mt-3 flex items-center gap-2">
                    <button
                      aria-label="Decrease quantity"
                      onClick={() => setQty(line.id, line.qty - 1)}
                      className="border-border hover:border-primary grid h-7 w-7 place-items-center rounded-full border"
                    >
                      <Minus className="h-3 w-3" />
                    </button>
                    <span className="w-6 text-center text-sm">{line.qty}</span>
                    <button
                      aria-label="Increase quantity"
                      onClick={() => setQty(line.id, line.qty + 1)}
                      className="border-border hover:border-primary grid h-7 w-7 place-items-center rounded-full border"
                    >
                      <Plus className="h-3 w-3" />
                    </button>
                    <button
                      aria-label="Remove item"
                      onClick={() => {
                        removeFromCart(line.id);
                        toast("Removed from cart", { description: line.name });
                      }}
                      className="text-muted-foreground hover:text-destructive ml-auto"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 ? (
          <SheetFooter className="gap-3">
            <div className="space-y-2 text-sm">
              <div className="text-muted-foreground flex justify-between">
                <span>Subtotal</span>
                <span>{money(subtotal)}</span>
              </div>
              <div className="text-muted-foreground flex justify-between">
                <span>Taxes (8%)</span>
                <span>{money(tax)}</span>
              </div>
              <div className="border-border/60 flex justify-between border-t pt-2 text-base">
                <span>Total</span>
                <span className="text-primary">{money(total)}</span>
              </div>
            </div>
            <Button
              onClick={() => {
                setCartOpen(false);
                navigate({ to: "/checkout" });
              }}
            >
              Proceed to Checkout
            </Button>
            <Button
              variant="ghost"
              onClick={() => {
                clearCart();
                toast("Cart cleared");
              }}
            >
              Clear cart
            </Button>
          </SheetFooter>
        ) : null}
      </SheetContent>
    </Sheet>
  );
}