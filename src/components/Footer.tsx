import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Twitter } from "lucide-react";

export const hours = [
  { days: "Monday – Thursday", time: "12:00 PM – 10:30 PM" },
  { days: "Friday – Saturday", time: "12:00 PM – 11:30 PM" },
  { days: "Sunday", time: "12:00 PM – 9:30 PM" },
];

export const contactInfo = {
  address: "18 Rue des Lumières, 75008 Paris, France",
  phone: "+33 1 42 60 30 30",
  email: "reservations@savore.com",
};

export function Footer() {
  return (
    <footer className="border-border/60 border-t">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <span className="font-display text-gold text-3xl tracking-[0.3em]">
            SAVORÉ
          </span>
          <p className="text-muted-foreground mt-5 max-w-sm text-sm leading-relaxed">
            Contemporary European dining in the heart of Paris. Seasonal produce,
            classical technique, and a room built for long evenings.
          </p>
          <div className="mt-6 flex gap-3">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="border-border/70 hover:border-primary hover:text-primary grid h-10 w-10 place-items-center rounded-full border transition-colors"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs tracking-[0.3em] uppercase">Explore</h3>
          <ul className="text-muted-foreground mt-5 space-y-3 text-sm">
            {[
              { to: "/menu", label: "Menu" },
              { to: "/about", label: "Our story" },
              { to: "/gallery", label: "Gallery" },
              { to: "/reservations", label: "Reservations" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-primary transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs tracking-[0.3em] uppercase">Opening hours</h3>
          <ul className="text-muted-foreground mt-5 space-y-3 text-sm">
            {hours.map((h) => (
              <li key={h.days}>
                <span className="text-foreground block">{h.days}</span>
                {h.time}
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground mt-5 text-sm">{contactInfo.phone}</p>
        </div>
      </div>
      <div className="border-border/60 text-muted-foreground border-t px-5 py-6 text-center text-xs tracking-wider lg:px-8">
        © {new Date().getFullYear()} Savoré Paris — Demo showcase website.
      </div>
    </footer>
  );
}