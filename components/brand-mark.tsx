import Image from "next/image";
import { cn } from "@/lib/cn";

type Props = { size?: "sm" | "md" | "lg"; className?: string };

const SIZES = { sm: 32, md: 40, lg: 56 } as const;

export function BrandMark({ size = "md", className }: Props) {
  const px = SIZES[size];
  const text = size === "sm" ? "text-[14px]" : size === "lg" ? "text-xl" : "text-[15px]";

  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <Image
        src="/methodos-icon.png"
        alt="Methodos Basic"
        width={px}
        height={px}
        className="rounded-xl shadow-sm"
        priority
      />
      <span className={cn("font-semibold tracking-tight text-ink", text)}>
        method<span className="text-brand">os</span>
        <span className="ml-1 text-[11px] font-medium text-ink-3">Basic</span>
      </span>
    </span>
  );
}
