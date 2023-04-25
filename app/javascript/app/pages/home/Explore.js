import React from "react";
import { Image } from "react-bootstrap";
import { ReactSVG } from "react-svg";

const Explore = () => {
  return (
    <div className="explore">
      <div className="container-lg">
        <h1 className="title fw-bold text-center mb-4"> Explore Our Books </h1>

        <p className="text-center m-auto">
          With our dedicated customer support team, you can rest easy knowing that we’re doing everything
          we can to save you time, money, and stress.
        </p>

        <div className="books-holder row align-items-center home-books mx-5 mt-5 position-relative">
          <div className="explore-banner">
            <ReactSVG src="/media/svg/XMLID_2331_.svg" wrapper="span" />
            <p className="fs-5 text-right">
              Inquire us now to avail discounts
            </p>
          </div>

          <div className="col-12 col-md-4">
            <div className="book-card m-0 m-sm-5 m-md-2 m-lg-2 m-xxl-5 text-center text-md-start">
              <div className="image-wrapper">
                <Image src="/media/images/doughnuts-Doom.png" className="w-100 p-3s" />
              </div>
              <div className="card-body">
                <h4 className="mt-4 fw-bold text-white text-truncate">Doughnuts And Doom</h4>
                <a className="fs-6 fw-bold">
                  View Book Details
                  <ReactSVG src="/media/svg/Path-9712_2.svg" className="ms-2" wrapper="span"/>
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="book-card m-0 m-sm-5 m-md-2 m-lg-2 m-xxl-5 text-center text-md-start">
              <div className="image-wrapper">
                <Image src="/media/images/The-Bend-of-Luck.png" className="w-100 p-3s" />
              </div>
              <div className="card-body">
                <h4 className="mt-4 fw-bold text-white text-truncate">The Bend of Luck</h4>
                <a className="fs-6 fw-bold">
                  View Book Details
                  <ReactSVG src="/media/svg/Path-9712_2.svg" className="ms-2" wrapper="span"/>
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="book-card m-0 m-sm-5 m-md-2 m-lg-2 m-xxl-5 text-center text-md-start">
              <div className="image-wrapper">
                <Image src="/media/images/The-Underwater-Welder.png" className="w-100 p-3s" />
              </div>
              <div className="card-body">
                <h4 className="mt-4 fw-bold text-white text-truncate">The Underwater Welder</h4>
                <a className="fs-6 fw-bold">
                  View Book Details
                  <ReactSVG src="/media/svg/Path-9712_2.svg" className="ms-2" wrapper="span"/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export {Explore}