import React, {useState, useEffect, useRef} from "react";
import { ReactSVG } from "react-svg";
import { Button } from "react-bootstrap";

import { useThemeMode } from "../../utils/providers/ThemeModeProvider";

export default SupportChat = () => {
  const [state, updateState] = useState({
    top: 868
  });

  const {themeState} = useThemeMode()

  const updatePosition = () => {
    if(themeState.scroll.position < 5) return

    const {endOfPage} = themeState.scroll
    let bottomSpacing = 100;

    if((endOfPage) - (bottomSpacing/2) - 50 <= (window.innerHeight))
      bottomSpacing = 284
    
    updateState({...state, top: window.innerHeight - bottomSpacing});
  }

  useEffect(() => updatePosition(), [themeState.scroll]);

  return (
    <Button id="support-chat" className="rounded-circle ${}" style={{top: state.top}}>
      <ReactSVG className="support-chat-icon" src="/media/svg/Path-335.svg" />
    </Button>
  );
}
