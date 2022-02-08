import React from "react";
import { useSelector } from "react-redux";

/**
 * @author
 * @function Maps
 **/

const Maps = (props) => {
  const studio = useSelector((state) => state.studioInfo.studio);
  return (
    <div className="maps">
      <iframe
        width="100%"
        height="450"
        style={{ border: 0 }}
        loading="lazy"
        allowfullscreen
        src={studio.studio.url_maps}
      ></iframe>
    </div>
  );
};

export default Maps;
