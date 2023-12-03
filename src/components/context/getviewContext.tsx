import { createContext } from 'react';

type ViewContextProviderProps = {
  children: React.ReactNode
}

const config = {
  root: document,
  rootMargin: '-100px',
  threshold:  0
}

const observer = (callback :(entries:any) => void) => new IntersectionObserver(callback, config);

export const ViewContext = createContext(observer);

export const ViewContextProvider = ({ children } :ViewContextProviderProps) => (
  <ViewContext.Provider value={observer}>
    {children}
  </ViewContext.Provider>
);