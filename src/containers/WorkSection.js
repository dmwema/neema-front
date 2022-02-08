import React from "react";
import { useSelector } from "react-redux";

/**
 * @author
 * @function WorkSection
 **/

const WorkSection = (props) => {
  const engineer = useSelector((state) => state.engineerInfo.engineer);
  return (
    <section className="dark works lis-bg-light">
      <div className="container">
        <div className="section-title">
          <h3>Réalisations</h3>
        </div>
        <div className="row">
          {engineer.works.map((work) => {
            return (
              <div className="col-md-4">
                <div className="audio-player">
                  <div className="cover-art">
                    <a
                      href="https://soundcloud.com/arimason"
                      target="_blank"
                    ></a>
                  </div>
                  <div className="info">
                    <h2 className="w">{work.name}</h2>
                    <h3 className="w">{work.description} </h3>
                    <p id="timeleft">{work.end}</p>
                    <div className="progressbar_slide">
                      <div className="progressbar_range"></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
