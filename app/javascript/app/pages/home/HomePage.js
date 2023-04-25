import React, {Fragment} from "react";

import { Hero } from "./Hero";
import { Explore } from "./Explore";
import { ReasonsToShop } from "./ReasonsToShop";
import { Statement } from "./Statement";
import { FAQ } from "./FAQ";

const HomePage = () => {
  return (
    <Fragment>
      <Hero />
      <Explore />
      <ReasonsToShop />
      <Statement />
      <FAQ />
    </Fragment>
  );
}

export default HomePage;