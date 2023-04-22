import React from 'react';

import { Col, Image } from 'react-bootstrap';
import { ReactSVG } from "react-svg";

export default HeaderLayout = () => {
  return (
    <header className="row p-0 m-0">
      <Col xs={12} className="header-cta">
        <div className="d-flex w-100 align-items-center justify-content-center">
          <ReactSVG className="cta-start" src="/media/svg/26.svg" />
          <span className="fs-6 text-white mx-2" >Save up to $500 per year on millions of book titles!</span>
          <ReactSVG src="/media/svg/26.svg" />
        </div>
      </Col>
    </header>
  );
}