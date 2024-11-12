import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="./assets/main.png.jpg"
            alt="Card"
            height={500}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container text-center">
              <h5 className="card-title fw-lighter" style={{ fontSize: "4rem" }}>Shop the Latest Tech</h5>
              <p className="card-text fs-5 d-none d-sm-block ">
                Discover our extensive collection of the latest 
                laptops, designed to meet the needs of every user. 
                From powerful gaming machines to sleek ultrabooks, 
                find the perfect device for work, study, or play.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
