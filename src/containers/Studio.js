import React, { useEffect } from "react";
import AnnimatedImage from "../images/african-american-man-listening-music-from-cloud-server-2948548-2447315.png";

import logo from "../images/logo.png";
import { useSelector, useDispatch } from "react-redux";
import Preloader from "./Preloader";
import axios from "axios";
import { setStudio } from "../redux/actions/studioActions";

/**
 * @author
 * @function StudioMain
 **/

const StudioMain = (props) => {
  const studio = useSelector((state) => state.studioInfo.studio);

  const dispatch = useDispatch();

  const fetchStudio = async () => {
    const response = await axios
      .get("https://studio.mjf.ujn.mybluehost.me/api/studio/1")
      .catch((err) => {
        console.log("Error");
      });
    dispatch(setStudio(response.data));
  };

  useEffect(() => {
    fetchStudio();
  }, []);

  if (studio.studio == undefined) {
    return <Preloader></Preloader>;
  }
  return (
    <>
      <div
        className="container"
        style={{ paddingTop: "50px", marginTop: "40px" }}
      >
        <div
          className="row"
          style={{ alignItems: "center", justifyContent: "center" }}
        >
          <div className="col-md-7 ir-content" style={{ textAlign: "center" }}>
            <img src={logo} style={{ width: "10%" }} />
            <h3 className="name">{studio.studio.name}</h3>
            <ul className="list-inline socials">
              <li className="list-inline-item">
                <a href="#" className="text-decoration-none d-block px-1">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="text-decoration-none d-block px-1">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="text-decoration-none d-block px-1">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="text-decoration-none d-block px-1">
                  <i className="fas fa-phone-alt"></i>
                </a>
              </li>
            </ul>
            <hr></hr>
            <p className="desc">{studio.studio.history}</p>
          </div>
          <div className="col-md-5 annimated-img">
            <img
              style={{ width: "100%" }}
              src={AnnimatedImage}
              alt="wrapkit"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default StudioMain;
