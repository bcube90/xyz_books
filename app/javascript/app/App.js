import React from "react";

import HeaderLayout from "./components/layouts/header/HeaderLayout";
import FooterLayout from "./components/layouts/footer/FooterLayout";
import SupportChat from "./components/layouts/SupportChat";

import { HeaderBannerCTA } from "./components/layouts/header/HeaderBannerCTA";
import { ThemeModeProvider } from "./utils/providers/ThemeModeProvider";
import { MainContent } from "./components/layouts/MainContent";
import { AppToast } from "./components/layouts/AppToast";


const App = () => {
  return (
    <ThemeModeProvider>
      <HeaderBannerCTA />
      <HeaderLayout />

      <MainContent />

      <FooterLayout />

      <SupportChat />

      <AppToast />
    </ThemeModeProvider>
  );
}

export {App}