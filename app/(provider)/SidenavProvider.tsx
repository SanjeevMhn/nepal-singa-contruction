"use client";

import { createContext, ReactNode, useContext, useState } from "react";

type SidenavContextType = {
  showSidenav: boolean;
  toggleSidenav: (state: boolean) => void;
};

const SidenavContext = createContext<SidenavContextType | undefined>(undefined);

export const useSidenav = () => {
  const context = useContext(SidenavContext);
  if (!context) {
    throw new Error("useSidenav must be used within a SidenavProvider");
  }
  return context;
};

export default function SidenavProvider({ children }: { children: ReactNode }) {
  const [showSidenav, setShowSidenav] = useState<boolean>(false);

  const toggleSidenav = (state: boolean) => {
    setShowSidenav(state);
  };

  return (
    <SidenavContext.Provider value={{ showSidenav, toggleSidenav }}>
      {children};
    </SidenavContext.Provider>
  );
}
