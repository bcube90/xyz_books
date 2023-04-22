import React, {Fragment} from 'react';
import { ReactSVG } from "react-svg";
import { Nav, Navbar, Button, Form } from 'react-bootstrap';

export default HeaderLayout = () => {
  return (
    <Fragment>
      <header>
        <Navbar bg="white" expand="lg">
          <Navbar.Brand className="m-0" href="/">
            <ReactSVG src="/media/svg/sample-logo.svg" />
          </Navbar.Brand>
          
          <Form className="position-relative">
            <Form.Group controlId="search-input">
              <ReactSVG className="seach-icon" src="/media/svg/Icon-feather-search.svg" />
              <Form.Control className="rounded-pill" bsPrefix="border-primary form-control" variant="primary" type="email" placeholder="Search" />
            </Form.Group>
          </Form>
          
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
      </header>
    </Fragment>
  );
}