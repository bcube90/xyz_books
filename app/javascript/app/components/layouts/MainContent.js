import React from "react";
import { Outlet } from "react-router-dom";

import { useThemeMode } from "../../utils/providers/ThemeModeProvider";

const MainContent = () => {
  const {scrollClass} = useThemeMode();

  return (
    <section id="main-content" className={`main-content ${scrollClass()}`}>
      <Outlet />
    </section>
  );
}

export {MainContent}