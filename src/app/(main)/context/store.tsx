'use client';

import { createContext, useContext, Dispatch, SetStateAction, useState } from 'react';

interface ContextProps {
  categories: string[];
  setCategories: Dispatch<SetStateAction<string[]>>;
}

const GlobalContext = createContext<ContextProps>({
  categories: [],
  setCategories: () => [], // También ajusté esto para que coincida con el tipo correcto
});

export const GlobalContextProvider = ({ children }: any) => {
  const [categories, setCategories] = useState<string[]>([]); // Especifica el tipo como string[]

  return (
    <GlobalContext.Provider value={{ categories, setCategories }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
