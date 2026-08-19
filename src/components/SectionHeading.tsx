import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="font-display mt-4 text-4xl leading-tight font-light text-balance sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="text-muted-foreground mt-5 text-base leading-relaxed">
          {description}
        </p>
      ) : null}
      <div
        className={cn(
          "hairline mt-8 w-32",
          align === "center" && "mx-auto",
        )}
      />
    </Reveal>
  );
}