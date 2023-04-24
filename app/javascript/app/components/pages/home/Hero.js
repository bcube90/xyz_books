import React from "react";

import { ReactSVG } from "react-svg";
import { Image, Button } from "react-bootstrap";

const Hero = () => {
  return (
    <div className="hero-banner">
      <div className="container-lg">
        <div className="row align-items-center hero-1">
          <div className="col-12 col-md-5 py-5 order-2 order-md-1">
            <h1 className="fw-bold mb-4 text-center text-md-start">The Cheapest Textbooks</h1>
            <h4 className="mb-4 text-center text-md-start">Save Up To 90% On Millions Of Titles</h4>
            <p className="text-center text-md-start mb-4">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed diam nonumy eirmod tempor invidunt ut labore et
              dolore magna.
            </p>
            <div className="d-flex align-self-center flex-row">
              <Button variant="primary" className="px-5 m-auto m-md-0" size="lg">
                <span>Get Started</span>
                <ReactSVG  src="/media/svg/Path-329.svg" />
              </Button>
            </div>
          </div>

          <div className="col-12 col-md-7 ps-md-5 py-5 order-1 order-md-2">
            <ReactSVG className="hero-illustration" src="/media/svg/heroillustration.svg" />
          </div>
        </div>

        <div className="row text-white align-items-center hero-2">
          <div className="col-12 col-md-7 pt-5 pb-0 ps-md-5">
            <Image className="w-100" src="/media/images/Group13597.png" />
          </div>

          <div className="col-12 col-md-5 pt-0 pb-5 ps-md-5">
            <h2 className="fw-bold text-white mb-4 text-center text-md-start">Our Commitment</h2>
            <p className="text-white mb-4 text-center text-md-start">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed diam nonumy eirmod tempor invidunt ut labore et
              dolore magna aliquyam erat, sed diam voluptua. At
              vero eos et accusam et justo duo dolores et ea rebum
            </p>

            <div className="d-flex align-self-center flex-row">
              <Button variant="dark" className="px-5 m-auto m-md-0" size="lg">
                <span>Learn More</span>
                <ReactSVG  src="/media/svg/Path-9712_2.svg" />
              </Button>
            </div>
          </div>
        </div>

        <h2 className="text-center text-white fw-bold mb-4 clients-title">
          Trusted By Awesome
          <span> Clients </span>
        </h2>

        <div className="row text-white clients">
          <div className="mb-5 col-12 col-sm-6 col-md-4 col-lg-2">
            <div className="client d-flex align-items-center justify-content-center">
              <ReactSVG src="/media/svg/Binance.svg" />
              <h6 className="fw-bold fs-5 ms-3">Binance</h6>
            </div>
          </div>
          <div className="mb-5 col-12 col-sm-6 col-md-4 col-lg-2">
            <div className="client d-flex align-items-center justify-content-center">
              <ReactSVG src="/media/svg/Layer-x0020-1.svg" />
              <h6 className="fw-bold fs-5 ms-3">BitCoin</h6>
            </div>
          </div>
          <div className="mb-5 col-12 col-sm-6 col-md-4 col-lg-2">
            <div className="client d-flex align-items-center justify-content-center">
              <ReactSVG src="/media/svg/solana-sol-logo.svg" />
              <h6 className="fw-bold fs-5 ms-3">Solana</h6>
            </div>
          </div>
          <div className="mb-5 col-12 col-sm-6 col-md-4 col-lg-2">
            <div className="client d-flex align-items-center justify-content-center">
              <ReactSVG src="/media/svg/Ethereum.svg" />
              <h6 className="fw-bold fs-5 ms-3">Ethereum</h6>
            </div>
          </div>
          <div className="mb-5 col-12 col-sm-6 col-md-4 col-lg-2">
            <div className="client d-flex align-items-center justify-content-center">
              <ReactSVG src="/media/svg/tether-usdt-logo.svg" />
              <h6 className="fw-bold fs-5 ms-3">Tether</h6>
            </div>
          </div>
          <div className="mb-5 col-12 col-sm-6 col-md-4 col-lg-2">
            <div className="client d-flex align-items-center justify-content-center">
              <ReactSVG src="/media/svg/Layer-2.svg" />
              <h6 className="fw-bold fs-5 ms-3">XRP</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export {Hero}