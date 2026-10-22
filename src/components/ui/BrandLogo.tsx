import Link from "next/link";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  variant?: "light" | "dark" | "auto";
  showTagline?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function BrandLogo({
  variant = "auto",
  showTagline = false,
  className,
  size = "md",
}: BrandLogoProps) {
  const isLight = variant === "light";
  const isDark = variant === "dark";

  const textColorClass = isLight
    ? "text-white"
    : isDark
    ? "text-[#202522]"
    : "text-content-primary";

  const taglineColorClass = isLight
    ? "text-white/80"
    : isDark
    ? "text-[#6F746F]"
    : "text-content-secondary";

  const iconColor = isLight ? "#FFFFFF" : isDark ? "#174F43" : "currentColor";

  const iconSizes = {
    sm: "w-5 h-5",
    md: "w-7 h-7",
    lg: "w-9 h-9",
  };

  const textSizes = {
    sm: "text-base tracking-widest",
    md: "text-xl tracking-[0.2em]",
    lg: "text-2xl tracking-[0.22em]",
  };

  return (
    <Link
      href="/"
      aria-label="ROAMLY Homepage"
      className={cn(
        "inline-flex items-center gap-2.5 transition-opacity hover:opacity-90 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg",
        className
      )}
    >
      {/* Geometric Mountain Icon Inspired by Reference */}
      <div className={cn("relative flex items-center justify-center shrink-0", iconSizes[size])}>
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full transform transition-transform group-hover:scale-105 duration-300"
        >
          {/* Main outer mountain peak */}
          <path
            d="M16 4L3 26H29L16 4Z"
            stroke={iconColor}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Inner offset mountain line */}
          <path
            d="M16 14L22 26"
            stroke={iconColor}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 26L16 14"
            stroke={iconColor}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Snowcap accent bar */}
          <path
            d="M12.5 19H19.5"
            stroke={iconColor}
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="flex flex-col">
        <span
          className={cn(
            "font-bold uppercase leading-none font-sans transition-colors",
            textSizes[size],
            textColorClass
          )}
        >
          ROAMLY
        </span>
        {showTagline && (
          <span
            className={cn(
              "text-[10px] tracking-wider font-medium uppercase mt-1 transition-colors",
              taglineColorClass
            )}
          >
            Go Somewhere New
          </span>
        )}
      </div>
    </Link>
  );
}
