"use client";

import { createContext, useMemo, useContext, useState, ReactNode } from "react";

interface UIContextType {
  applyOverlay: boolean;
  setApplyOverlay: (value: boolean) => void;
  expandedCardIndex: number | null;
  setExpandedCardIndex: (index: number | null) => void;
}

// Create context with proper typing and undefined as initial value
const UIContext = createContext<UIContextType | undefined>(undefined);

interface UIProviderProps {
  children: ReactNode;
}

export const UIProvider: React.FC<UIProviderProps> = ({ children }) => {
  const [applyOverlay, setApplyOverlay] = useState<boolean>(false);
  const [expandedCardIndex, setExpandedCardIndex] = useState<number | null>(
    null
  );

  const memoedValue = useMemo(
    () => ({
      applyOverlay,
      setApplyOverlay,
      expandedCardIndex,
      setExpandedCardIndex,
    }),
    [applyOverlay, expandedCardIndex]
  );

  return (
    <UIContext.Provider value={memoedValue}>{children}</UIContext.Provider>
  );
};

export const useUI = (): UIContextType => {
  const context = useContext(UIContext);
  if (context === undefined) {
    throw new Error("useUI must be used within a UIProvider");
  }
  return context;
};
