"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import LocomotiveScroll from "locomotive-scroll";

export type LocomotiveProviderProps = { children: ReactNode };
export type LocomotiveProps = {
  scroll: LocomotiveScroll | null;
};

const LocomotiveContext = createContext<LocomotiveProps>({
  scroll: null,
});

export const LocomotiveProvider = ({ children }: LocomotiveProviderProps) => {
  const [scroll, setScroll] = useState<LocomotiveScroll | null>(null);

  useEffect(() => {
    const currentScroll = new LocomotiveScroll({
      lenisOptions: { smoothWheel: true },
    });

    setScroll(currentScroll);

    return () => currentScroll.destroy();
  }, []);

  const value = useMemo(() => ({ scroll }), [scroll]);

  return (
    <LocomotiveContext.Provider value={value}>
      <div data-scroll-container>{children}</div>
    </LocomotiveContext.Provider>
  );
};

export const useLocomotive = () => useContext(LocomotiveContext);
