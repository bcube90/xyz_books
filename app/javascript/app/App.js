import React from "react";
import { Outlet } from "react-router-dom";

import HeaderLayout from "./components/layouts/header/HeaderLayout";
import FooterLayout from "./components/layouts/footer/FooterLayout";
import SupportChat from "./components/layouts/SupportChat";
import { HeaderBannerCTA } from "./components/layouts/header/HeaderBannerCTA";
import { ThemeModeProvider } from "./components/layouts/ThemeProvider";


const App = () => {
  return (
    <ThemeModeProvider>
      <HeaderBannerCTA />
      <HeaderLayout />

      <section id="main" className="main">
        <Outlet />
      </section>

      <FooterLayout />

      <SupportChat />
    </ThemeModeProvider>
  );
}

export {App}