import React, {Fragment} from "react";
import { Outlet } from "react-router-dom";
import Badge from 'react-bootstrap/Badge';

const App = () => {
  return (
    <Fragment>
      <header>
        header
      </header>

      <section className="container-fluid px-0">
        <Outlet />
      </section>

      <footer>
        Example heading <Badge bg="secondary">Footer</Badge>
      </footer>
    </Fragment>
  );
}

export {App}