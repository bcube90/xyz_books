import React, {createContext, useContext, useState, useEffect, useRef} from "react";

const defaultThemeState = {
  themeState: {
    scroll: {
      position: 0,
      endOfPage: 0
    }
  },
  scrollClass: () => {}
}

const ThemeContext = createContext(defaultThemeState);

const useThemeMode = () => useContext(ThemeContext);

const ThemeModeProvider = ({children}) => {
  const [themeState, setThemeState] = useState(defaultThemeState.themeState);
  
  const docElement = useRef(document.documentElement);

  const scrollClass = () => themeState.scroll.position > 5 ? "scrolled" : ""

  const scrollDetection = () => {
    const {scrollTop, scrollHeight} = docElement.current;
    const endOfPage = scrollHeight - scrollTop;
    const scroll = {position: scrollTop, endOfPage}

    setThemeState({...themeState, ...{scroll: scroll}});
  }

  const debounce = (fn) => {
    let frame;
    return (...params) => {
      if (frame) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => fn(...params));
    } 
  };

  useEffect(() => {
    scrollDetection()

    window.addEventListener("scroll", debounce(scrollDetection), {passive: true})
    return () => window.removeEventListener("scroll", scrollDetection)
  }, []);

  return (
    <ThemeContext.Provider value={{themeState, setThemeState, scrollClass}} >
      {children}
    </ThemeContext.Provider>
  )
}

export {ThemeModeProvider, useThemeMode}