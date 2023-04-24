import React, {createContext, useContext, useState, useEffect} from "react";

const defaultThemeState = {
  scrollPosition: 0,
  scrollClass: () => {},
  updateScrollPosition: () => {}
}

const ThemeContext = createContext(defaultThemeState);

const useThemeMode = () => useContext(ThemeContext);

const ThemeModeProvider = ({children}) => {
  const [scrollPosition, setScrollPosition] = useState(defaultThemeState.scrollPosition);
  

  const updateScrollPosition = (position) => {
    if(position == setScrollPosition) return
    setScrollPosition(position)
  };

  const scrollClass = () => scrollPosition > 0 ? "scrolled" : "";

  useEffect(() => {
    setScrollPosition(scrollPosition)
  }, []);

  return (
    <ThemeContext.Provider value={{scrollPosition, updateScrollPosition, scrollClass}} >
      {children}
    </ThemeContext.Provider>
  )
}

export {ThemeModeProvider, useThemeMode}