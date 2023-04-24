import React from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

import { ReactSVG } from "react-svg";

export default FooterLayout = () => {
  return (
    <footer>
      <div className="container-lg">
        <div className="row mb-2">
          <div id="branding" className="col-lg-3 col-sm-6 mb-5">
            <ReactSVG className="brand mb-5" src="/media/svg/sample-logo.svg" />
            
            <p className="mb-5">
              Lorem ipsum dolor sit amet, consetetur
              sadipscing elitr, sed diam nonumy
              eirmod
            </p>

            <Form>
              <Form.Group className="position-relative w-75">
                <Form.Control className="rounded-pill" bsPrefix="border-primary form-control" variant="primary" type="email" placeholder="Email Address" />
                <ReactSVG className="email-icon" src="/media/svg/Path-9712.svg" />
              </Form.Group>
            </Form>
          </div>
          <div className="col-lg-3 col-sm-6 mt-0 mt-md-4 mb-3 mb-md-5 justify-content-sm-center">
            <div className="footer-links ms-0 ps-0 ms-lg-5 ps-lg-4">
              <h5 className="fw-bold">Menu</h5>
              <ul>
                <li><Link className="text-dark" to="/">Shop All</Link></li>
                <li><Link className="text-dark" to="/">About Us</Link></li>
                <li><Link className="text-dark" to="/">Community</Link></li>
                <li><Link className="text-dark" to="/">FAQs</Link></li>
              </ul>
            </div>
          </div>
          <div className="footer-links col-lg-3 col-sm-6 mt-0 mt-md-4 mb-3 mb-md-5">
            <h5 className="fw-bold">Support</h5>
            <ul>
              <li><Link className="text-dark" to="/">Shipping & Returns</Link></li>
              <li><Link className="text-dark" to="/">Help & FAQ </Link></li>
              <li><Link className="text-dark" to="/">Terms & Conditions</Link></li>
              <li><Link className="text-dark" to="/">Privacy Policy</Link></li>
              <li><Link className="text-dark" to="/">Contact</Link></li>
              <li><Link className="text-dark" to="/">Login</Link></li>
            </ul>
          </div>
          <div className="footer-links col-lg-3 col-sm-6 mt-0 mt-md-4 mb-3 mb-md-5">
            <h5 className="fw-bold">Resources</h5>
            <ul>
              <li><Link className="text-dark" to="/">Shipping & Returns</Link></li>
              <li><Link className="text-dark" to="/">Help & FAQ </Link></li>
              <li><Link className="text-dark" to="/">Terms & Conditions</Link></li>
              <li><Link className="text-dark" to="/">Privacy Policy</Link></li>
              <li><Link className="text-dark" to="/">Contact</Link></li>
              <li><Link className="text-dark" to="/">Login</Link></li>
            </ul>
          </div>
        </div>

        <div className="d-flex align-items-center justify-content-between mt-3">
          <h6 className="copyright fs-6 fw-bold"> © 2022 Brainly. </h6>
          <ul className="social-media">
            <li><Link to="/"><ReactSVG className="social-link" src="/media/svg/facebook_3.svg" /></Link></li>
            <li><Link to="/"><ReactSVG className="social-link" src="/media/svg/linkedin-1.svg" /></Link></li>
            <li><Link to="/"><ReactSVG className="social-link" src="/media/svg/twitter.svg" /></Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}