import React from 'react';
import { ReactSVG } from "react-svg";
import { Nav, Navbar, Button } from 'react-bootstrap';

import { useThemeMode } from '../../../utils/providers/ThemeModeProvider';
import { HeaderSearchForm } from './HeaderSearchForm';

export default HeaderLayout = () => {
  const {scrollClass} = useThemeMode();

  return (
    <header className={scrollClass()}>
      <div className="container-lg">
        <Navbar expand="lg">
          <Navbar.Brand className="m-0" href="/">
            <ReactSVG src="/media/svg/sample-logo.svg" />
          </Navbar.Brand>
          
          <div className="header-search-container">
          <HeaderSearchForm />
          </div>
          
          <Navbar.Toggle aria-controls="navbar-toggle" />
          <Navbar.Collapse id="navbar-container">
            <Nav>
              <Nav.Link href="/" color="primary">Home</Nav.Link>
              <Nav.Link href="/rent-textbooks">Rent Textbooks</Nav.Link>
              <Nav.Link href="/buy-textbooks">Buy Textbooks</Nav.Link>
              <Nav.Link href="/sell-textbooks">Sell Textbooks</Nav.Link>
            </Nav>

            <div className="vr my-3 ms-2 me-4 d-none d-lg-block"></div>

            <div className="header-actions d-flex">
              <div className="localization me-3 d-flex align-items-center">
                <ReactSVG src="/media/svg/Icon-feather-globe.svg" className="me-2" />
                <span>En</span>
              </div>

              <Button id="header-contact" variant="primary" size="md">
                <span>Contact</span>
              </Button>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </header>
  );
}