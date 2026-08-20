import { Heart, Leaf, Plus, Star } from "lucide-react";
import type { MenuItem } from "@/data/menu";
import { useStore } from "@/lib/store";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

interface MenuCardProps {
  item: MenuItem;
  className?: string;
}

export function MenuCard({ item, className }: MenuCardProps) {
  const { addToCart, toggleFavorite, favorites } = useStore();
  const isFavorite = favorites.includes(item.id);

  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border/60 bg-card/60 backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:border-primary/50",
        !item.available && "opacity-70",
        className,
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

        <div className="absolute left-3 top-3 flex flex-wrap gap-2">
          {item.signature && (
            <span className="rounded-full bg-primary/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-primary-foreground">
              Signature
            </span>
          )}
          {item.popular && (
            <span className="flex items-center gap-1 rounded-full bg-secondary/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-secondary-foreground">
              <Star className="h-3 w-3" /> Popular
            </span>
          )}
          {item.vegetarian && (
            <span className="flex items-center gap-1 rounded-full bg-background/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-foreground">
              <Leaf className="h-3 w-3" /> Veg
            </span>
          )}
        </div>

        <button
          type="button"
          aria-label={isFavorite ? "Remove from favourites" : "Add to favourites"}
          onClick={() => toggleFavorite(item.id)}
          className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-background/70 text-foreground backdrop-blur transition-colors hover:text-primary"
        >
          <Heart className={cn("h-4 w-4", isFavorite && "fill-primary text-primary")} />
        </button>
      </div>

      <div className="space-y-3 p-5">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-display text-xl leading-tight text-foreground">{item.name}</h3>
          <span className="font-display text-lg text-primary">${item.price}</span>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>

        <button
          type="button"
          disabled={!item.available}
          onClick={() => {
            addToCart(item);
            toast.success(`${item.name} added to your order`);
          }}
          className="flex w-full items-center justify-center gap-2 rounded-full border border-primary/40 bg-primary/10 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground disabled:cursor-not-allowed disabled:opacity-50"
        >
          <Plus className="h-4 w-4" />
          {item.available ? "Add to order" : "Unavailable"}
        </button>
      </div>
    </article>
  );
}

export default MenuCard;
