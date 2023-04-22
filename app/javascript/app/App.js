import React, {Fragment} from "react";
import { Outlet } from "react-router-dom";
import Badge from 'react-bootstrap/Badge';
import { ReactSVG } from "react-svg";

import HeaderLayout from "./components/layouts/header/HeaderLayout";

const App = () => {
  return (
    <Fragment>
      <section className="header-cta d-flex w-100 align-items-center justify-content-center">
        <ReactSVG className="cta-start" src="/media/svg/26.svg" />
        <span className="fs-6 text-white mx-2" >Save up to $500 per year on millions of book titles!</span>
        <ReactSVG src="/media/svg/26.svg" />
      </section>

      <div className="container-lg">
        <HeaderLayout />

        <section>
          <Outlet />
        </section>

        <footer>
          Example <Badge bg="secondary">Footer</Badge>
        </footer>
      </div>
    </Fragment>
  );
}

export {App}