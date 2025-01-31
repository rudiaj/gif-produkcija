"use client";

import { useUI } from "@/context/UIProvider";
import clsx from "clsx";

export function Body({ children }: { children: React.ReactNode }) {
  const { expandedCardIndex } = useUI();

  return (
    <body
      className={clsx(
        "scroll-smooth bg-black",
        expandedCardIndex !== null ? "overflow-hidden" : "overflow-visible"
      )}
    >
      {children}
    </body>
  );
}
