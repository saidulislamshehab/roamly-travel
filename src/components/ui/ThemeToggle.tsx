"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
  isTransparent?: boolean;
}

export function ThemeToggle({ className, isTransparent }: ThemeToggleProps) {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("roamly-theme") as "light" | "dark" | null;
    if (stored) {
      setTheme(stored);
      document.documentElement.classList.toggle("dark", stored === "dark");
    } else {
      // Default to light mode as specified by design system
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    localStorage.setItem("roamly-theme", next);
    document.documentElement.classList.toggle("dark", next === "dark");
  };

  if (!mounted) {
    return (
      <div className={cn("w-9 h-9 rounded-full", className)} />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      className={cn(
        "p-2 rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
        isTransparent
          ? "text-white/80 hover:text-white hover:bg-white/10"
          : "text-content-secondary hover:text-content-primary hover:bg-surface-secondary",
        className
      )}
    >
      {theme === "light" ? (
        <Moon className="w-4 h-4 transition-transform hover:-rotate-12" />
      ) : (
        <Sun className="w-4 h-4 transition-transform hover:rotate-45" />
      )}
    </button>
  );
}
