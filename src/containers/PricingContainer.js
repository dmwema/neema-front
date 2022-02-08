import React from "react";

/**
 * @author
 * @function PricingContainer
 **/

const PricingContainer = (props) => {
  return (
    <section className="dark pricing lis-bg-light">
      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <div
              className="card-deck row"
              style={{ alignItems: "center", justifyContent: "center" }}
            >
              {props.children}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingContainer;
