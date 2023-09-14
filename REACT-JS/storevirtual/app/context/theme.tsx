'use client';

import {  createContext, useContext, useState } from "react";

const ThemeContext = createContext({});

export const ThemeContextProvider = ({
    children,
  }: {
    children: React.ReactNode
  })=>{
    const [color, setColor] = useState("bg-yellow-200");

    return(
        <ThemeContext.Provider value={{color,setColor}}>
            {children}
        </ThemeContext.Provider>
    )
}
export const useThemeContext = () => useContext(ThemeContext);