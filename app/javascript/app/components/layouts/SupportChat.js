import React, {useState, useEffect, useRef} from "react";
import { ReactSVG } from "react-svg";
import { Button } from "react-bootstrap";

import { useThemeMode } from "./ThemeModeProvider";

export default SupportChat = () => {
  const [state, updateState] = useState({
    top: window.innerHeight - 92
  });

  const {updateScrollPosition} = useThemeMode()

  const debounce = (fn) => {
    let frame;
    return (...params) => {
      
      if (frame) { 
        cancelAnimationFrame(frame);
      }
      
      frame = requestAnimationFrame(() => {
        fn(...params);
      });
  
    } 
  };

  const docElement = useRef(document.documentElement);

  const updatePosition = () => {
    const {scrollTop, scrollHeight} = docElement.current;
    const endOfPage = scrollHeight - scrollTop;
    let bottomSpacing = 284;

    updateScrollPosition(scrollTop);

    if((endOfPage - (bottomSpacing/2)) >= (window.innerHeight))
      bottomSpacing = 100
    
    updateState({...state, top: window.innerHeight - bottomSpacing});
  }

  // TODO: move scroll listener to THemeModeProvider together with debounce

  useEffect(() => {
    updatePosition()
    window.addEventListener("scroll", debounce(updatePosition), {passive: true})

    return () => window.removeEventListener("scroll", updatePosition)
  }, []);

  return (
    <Button id="support-chat" className="rounded-circle" style={{top: state.top}}>
      <ReactSVG className="support-chat-icon" src="/media/svg/Path-335.svg" />
    </Button>
  );
}
