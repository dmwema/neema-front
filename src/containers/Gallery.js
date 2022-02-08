import React from "react";
import img1 from "../images/studio/studio1.jpg";
import img2 from "../images/studio/studio2.jpg";
import img3 from "../images/studio/studio3.jpg";
import img4 from "../images/studio/studio4.jpg";
import img5 from "../images/studio/studio5.jpg";
import img6 from "../images/studio/studio6.jpg";
import img7 from "../images/studio/studio7.jpg";
import img8 from "../images/studio/studio8.jpg";
import img9 from "../images/studio/studio9.jpg";

/**
 * @author
 * @function Gallery
 **/

const Gallery = (props) => {
  return (
    <section className="interior">
      <div className="container">
        <div className="section-title">Notre studio</div>
        <div className="grid">
          <div
            className="item"
            style={{ backgroundImage: `url(${img2})` }}
          ></div>
          <div
            className="item"
            style={{ backgroundImage: `url(${img1})` }}
          ></div>
          <div
            className="item"
            style={{ backgroundImage: `url(${img3})` }}
          ></div>
          <div
            className="item"
            style={{ backgroundImage: `url(${img5})` }}
          ></div>
          <div
            className="item"
            style={{ backgroundImage: `url(${img6})` }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
