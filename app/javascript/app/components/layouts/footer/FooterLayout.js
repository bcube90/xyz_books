import React from "react";
import { Link } from "react-router-dom";

import { ReactSVG } from "react-svg";

export default FooterLayout = () => {
  return (
    <footer className="container-lg">
      <div className="d-flex align-items-center justify-content-between">
        <h6 className="copyright fs-6 fw-bold"> © 2022 Brainly. </h6>

        <ul className="social-media">
          <li><Link to="/"><ReactSVG className="social-link" src="/media/svg/facebook_3.svg" /></Link></li>
          <li><Link to="/"><ReactSVG className="social-link" src="/media/svg/linkedin-1.svg" /></Link></li>
          <li><Link to="/"><ReactSVG className="social-link" src="/media/svg/twitter.svg" /></Link></li>
        </ul>
      </div>
    </footer>
  );
}