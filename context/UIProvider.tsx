import { createContext, useMemo, useContext, useState } from "react";

// these are default values for context just to satisfy typescript, they are not used
// docs: "The defaultValue argument is only used when a component does not have a matching Provider above it in the tree."
const UIContext = createContext({
  applyOverlay: false,
  setApplyOverlay: null,
  expandedCardIndex: null,
  setExpandedCardIndex: null,
});

export const UIProvider = ({ children }) => {
  const [applyOverlay, setApplyOverlay] = useState(false);
  const [expandedCardIndex, setExpandedCardIndex] = useState(null);

  const memoedValue = useMemo(
    () => ({
      applyOverlay,
      setApplyOverlay,
      expandedCardIndex,
      setExpandedCardIndex,
    }),
    [applyOverlay, setApplyOverlay, expandedCardIndex, setExpandedCardIndex]
  );

  return (
    <UIContext.Provider value={memoedValue}>{children}</UIContext.Provider>
  );
};

export const useUI = () => useContext(UIContext);
