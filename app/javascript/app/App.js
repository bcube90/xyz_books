import React, {Fragment} from "react";
import { Outlet } from "react-router-dom";
import Badge from 'react-bootstrap/Badge';

import HeaderLayout from "./components/layouts/header/HeaderLayout";

const App = () => {
  return (
    <Fragment>
      <HeaderLayout />

      <section className="mx-3 mx-md-4 px-md-3 mx-lg-5 px-lg-5">
        <Outlet />
      </section>

      <footer className="mx-3 mx-md-4 px-md-3 mx-lg-5 px-lg-5">
        Example heading <Badge bg="secondary">Footer</Badge>
      </footer>
    </Fragment>
  );
}

export {App}