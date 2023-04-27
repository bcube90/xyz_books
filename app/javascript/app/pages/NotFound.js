import React  from "react";

export default NotFound = () => {
  return (
    <div className="not-found-holder container-fluid">
      <div className="container-lg">
        <div className="not-found row align-items-center justify-content-center">
          <div className="col-12 col-md-7 col-xl-8">
            <h1 className="fw-bold text-center">404 Not Found!</h1>
            <p className="fs-4 fw-bold text-center">The page you are looking is not available at the moment.</p>
          </div>
        </div>
      </div>
    </div>
  );
}