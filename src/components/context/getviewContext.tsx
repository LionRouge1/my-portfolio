import { createContext } from 'react';

type ViewContextProviderProps = {
  children: React.ReactNode
}

const getView = (callback :() => void, element :any) => {
  const config = {
    root: document,
    rootMargin: '0px',
    threshold: 1.0
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting) callback();
    });
  }, config);

  observer.observe(element);
};

export const ViewContext = createContext(getView);

export const ViewContextProvider = ({ children } :ViewContextProviderProps) => {
  return (
    <ViewContext.Provider value={getView}>
      {children}
    </ViewContext.Provider>
  );
};