"use client";

import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext<{ theme: string; toggle: any }>({
  theme: "light",
  toggle: null,
});

const getThemeFormLocalStorage = () => {
  if (typeof window !== "undefined") {
    const value = localStorage.getItem("theme");
    return value || "light";
  }
};

type Props = {
  children: JSX.Element;
};
export const ThemeContextProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<string>(() => {
    return getThemeFormLocalStorage() as string;
  });
  const toggle = () => {
    setTheme(theme == "light" ? "dark" : "light");
  };
  useEffect(() => {
    localStorage.setItem("theme", theme as string);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
