import React from "react";
import { useSelector } from "react-redux";

/**
 * @author
 * @function AddressCard
 **/

const AddressCard = (props) => {
  const studio = useSelector((state) => state.studioInfo.studio);
  return (
    <div className="contact-bg">
      <h4>Joignez-nous</h4>
      <div className="quick-contact-widget">
        {studio.studio.phones.map((phone) => {
          return (
            <span>
              <i className="fa fa-phone" aria-hidden="true"></i> {phone.number}
            </span>
          );
        })}

        <span>
          <i className="fa fa-envelope" aria-hidden="true"></i>
          contact@neemamajabu.com
        </span>
        <span>
          <i className="fa fa-map-marker"></i>
          {studio.studio.adresse}
        </span>
      </div>
    </div>
  );
};

export default AddressCard;
