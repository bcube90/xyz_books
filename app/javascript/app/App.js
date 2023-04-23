import React, {Fragment} from "react";
import { Outlet } from "react-router-dom";

import HeaderLayout from "./components/layouts/header/HeaderLayout";
import FooterLayout from "./components/layouts/footer/FooterLayout";
import { HeaderBannerCTA } from "./components/layouts/header/HeaderBannerCTA";


const App = () => {
  return (
    <Fragment>
      <HeaderBannerCTA />
      <HeaderLayout />

      <section>
        <Outlet />
      </section>

      <FooterLayout />
    </Fragment>
  );
}

export {App}