import React from "react";
import { ReactSVG } from "react-svg";
import { Image } from "react-bootstrap";

const Statement = () => {
  return (
    <div className="home-statement">
      <div className="container-lg">
        <div className="row justify-content-center">
          <h5 className="mb-1 fw-bold text-center">Andrew Santellan</h5>
          <h6 className="user-position text-center fw-bold text-light-blue">Product Manager, Binance</h6>
        
          <div className="company mt-3 d-flex align-items-center justify-content-center">
            <ReactSVG src="/media/svg/Binance.svg" />
            <h5 className="fw-bold fs-5 ms-3 mb-0">Binance</h5>
          </div>

          <div className="col-md-8">
            <div className="user-statement-card">
              <Image src="/media/images/user.png" />
              <div className="backdrop mx-3"></div>
              <div className="statement-container">
                <p className="text-center text-white">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                  erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et
                  ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                  Lorem ipsum dolor sit amet.
                  <br /> <br />
                  <ReactSVG src="media/svg/star.svg" wrapper="span" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export {Statement}