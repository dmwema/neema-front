import React from "react";
import img1 from "../images/studio/studio1.jpg";
import img2 from "../images/studio/studio2.jpg";
import img3 from "../images/studio/studio3.jpg";

import { useSelector } from "react-redux";
/**
 * @author
 * @function History
 **/

const History = (props) => {
  const studio = useSelector((state) => state.studioInfo.studio);
  return (
    <section style={{ paddingTop: 0 }}>
      <div
        className="container"
        style={{
          width: "100%",
          height: "700px",
          maxHeight: "80vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          overflow: "hidden",
          backgroundImage: `url(${img1})`,
          backgroundPosition: "bottom",
          marginBottom: "40px",
        }}
      ></div>
      <h3 className="section-title">Apropos de nous</h3>

      <div
        className="container"
        style={{ textAlign: "left", marginTop: "50px" }}
      >
        <div style={{ opacity: 0.7 }}>
          <p>{studio.studio.history}</p>
          <hr />
          <p>{studio.studio.description}</p>
        </div>
        <div className="row" style={{ border: "5px solid #000" }}>
          <div
            className="col-md-6"
            style={{ height: "400px", backgroundImage: `url(${img2})` }}
          ></div>
          <div
            className="col-md-6"
            style={{ height: "400px", backgroundImage: `url(${img3})` }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default History;
