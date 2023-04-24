import React from "react";
import { ReactSVG } from "react-svg";

import { useThemeMode } from "../ThemeModeProvider";

const HeaderBannerCTA = () => {
  const {scrollClass} = useThemeMode()

  return (
    <section className={`header-cta d-flex w-100 align-items-center justify-content-center ${scrollClass()}`}>
      <ReactSVG className="cta-start" src="/media/svg/26.svg" />
      <span className="text-white mx-2" >Save up to $500 per year on millions of book titles!</span>
      <ReactSVG src="/media/svg/26.svg" />
    </section>
  );
}

export {HeaderBannerCTA}