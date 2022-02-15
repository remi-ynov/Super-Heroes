import React, {createContext, useReducer} from 'react';
import {heroesReducer, initialState} from "./heroReducer";

export const HeroesContext = createContext(null);

const HeroesProvider = ({children}) => {
  const [state, dispatch] = useReducer(heroesReducer, initialState);

  return (
    <HeroesContext.Provider value={[state, dispatch]}>
      {children}
    </HeroesContext.Provider>
  );
};

export default HeroesProvider;