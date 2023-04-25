import React from "react";

import { ReactSVG } from "react-svg";

const ReasonsToShop = () => {
  return (
    <div className="reasons-to-shop">
      <div className="container-lg">
        <div className="row reasons-container">
          <h6 className="mb-3 text-yellow">LOREM IPSUM</h6>
          <h1 className="title fw-bold mb-4 text-white">3 Reasons To Shop With Us</h1>
          <div className="col-12 col-md-4 mb-5">
            <div className="home-reason  text-white">
              <ReactSVG className="mb-4" wrapper="div" src="/media/svg/package-box.svg" />
              <h6 className="fw-bold fs-5 mb-3">
                All textbook rentals come with free return shipping.
              </h6>
              <p>
                Lorem ipsum dolor sit amet, consetetur
                sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore Stet clita kasd
                gubergren, no sea takimata.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-4 mb-5">
            <div className="home-reason text-white">
              <ReactSVG className="mb-4" wrapper="div" src="/media/svg/help.svg" />
              <h6 className="fw-bold fs-5 mb-3">
                Dedicated customer support and help portal.
              </h6>
              <p>
                Lorem ipsum dolor sit amet, consetetur
                sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore Stet clita kasd
                gubergren, no sea takimata.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-4 mb-5">
            <div className="home-reason text-white">
              <ReactSVG className="mb-4" wrapper="div" src="/media/svg/piggy-bank.svg" />
              <h6 className="fw-bold fs-5 mb-3">
                Buy or rent cheap textbooks & save up to $500 per year!
              </h6>
              <p>
                Lorem ipsum dolor sit amet, consetetur
                sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore Stet clita kasd
                gubergren, no sea takimata.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export {ReasonsToShop}