import React, {useState, useEffect, useRef} from "react";
import { ReactSVG } from "react-svg";
import { Button } from "react-bootstrap";

import { useThemeMode } from "./ThemeModeProvider";

export default SupportChat = () => {
  const [state, updateState] = useState({
    top: window.innerHeight - 92
  });

  const {themeState} = useThemeMode()

  const updatePosition = () => {
    const {endOfPage} = themeState.scroll
    let bottomSpacing = 284;

    if((endOfPage - (bottomSpacing/2)) >= (window.innerHeight))
      bottomSpacing = 100
    
    updateState({...state, top: window.innerHeight - bottomSpacing});
  }

  useEffect(() => updatePosition(), [themeState.scroll]);

  return (
    <Button id="support-chat" className="rounded-circle" style={{top: state.top}}>
      <ReactSVG className="support-chat-icon" src="/media/svg/Path-335.svg" />
    </Button>
  );
}
