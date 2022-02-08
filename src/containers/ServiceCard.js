import React from "react";

/**
 * @author
 * @function ServiceCard
 **/

const ServiceCard = (props) => {
  return (
    <div className="col-sm-4 service-card">
      <div className="card-section">{props.children}</div>
    </div>
  );
};

export default ServiceCard;
