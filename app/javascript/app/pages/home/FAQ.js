import React from "react";
import { Accordion, Image } from "react-bootstrap";
import { ReactSVG } from "react-svg";

const FAQ = () => {
  return (
    <div className="home-faq">
      <div className="container-lg">
        <div className="row justify-content-center">
          <h1 className="col-sm-12 col-md-10 col-xl-7 fw-bold mb-4">Frequently Asked Question</h1>

          <Accordion className="col-sm-12 col-md-10 col-xl-7" defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <h5 className="fw-bold m-0 text-primary">Dedicated customer support and help portal.</h5>
              </Accordion.Header>
              <Accordion.Body>
                With our dedicated customer support team, you can rest easy knowing that we’re doing
                everything we can to save you time, money, and stress.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <h5 className="fw-bold m-0 text-primary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                </h5>
              </Accordion.Header>
              <Accordion.Body>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in cillum 
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <h5 className="fw-bold m-0 text-primary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                </h5>
              </Accordion.Header>
              <Accordion.Body>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in cillum 
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                <h5 className="fw-bold m-0 text-primary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                </h5>
              </Accordion.Header>
              <Accordion.Body>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in cillum 
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export {FAQ}