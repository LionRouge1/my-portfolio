import { createContext } from 'react';

type ViewContextProviderProps = {
  children: React.ReactNode
}

const config = {
  root: document,
  rootMargin: '-100px',
  threshold:  0
}

const observer = (callback :() => void) => new IntersectionObserver(callback, config);

// const getView = (callback :() => void, element :any) => {
//   const config = {
//     root: document,
//     rootMargin: '0px',
//     threshold: 1.0
//   }

//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//       if(entry.isIntersecting) callback();
//     });
//   }, config);

//   observer.observe(element);
// };

export const ViewContext = createContext(observer);

export const ViewContextProvider = ({ children } :ViewContextProviderProps) => (
  <ViewContext.Provider value={observer}>
    {children}
  </ViewContext.Provider>
);