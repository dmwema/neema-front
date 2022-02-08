import React, { useEffect } from "react";
import WorkSection from "./WorkSection";
import Preloader from "./Preloader";
import axios from "axios";
import ContentLoader from "./Preloader";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedEngineer } from "../redux/actions/engineerActions";

/**
 * @author
 * @function Ingenieur
 **/

const Ingenieur = (props) => {
  const engineer = useSelector((state) => state.engineerInfo.engineer);

  const { id } = useParams();
  const dispatch = useDispatch();

  const fetchEngineerDetail = async () => {
    const response = await axios
      .get(`https://studio.mjf.ujn.mybluehost.me/api/engineer/${id}`)
      .catch((err) => console.log("Erreur", err));

    dispatch(selectedEngineer(response.data));
  };
  useEffect(() => {
    if (id && id !== "") fetchEngineerDetail();
  });

  if (engineer == undefined || engineer.id != id) {
    return <Preloader></Preloader>;
  }

  return (
    <>
      <div className="container" style={{ padding: "70px 0" }}>
        <div className="row">
          <div className="col-md-5">
            <img
              style={{ width: "100%" }}
              src={engineer.img_url}
              alt="wrapkit"
              className="img-fluid"
            />
          </div>
          <div className="col-md-7 ir-content">
            <h3 className="name">{engineer.name}</h3>
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
            <p className="desc">{engineer.email}</p>
            <hr></hr>
            <div>
              <span style={{ fontWeight: 500 }}>Années s'expérience : </span>
              <span>
                {engineer.year_experience}
                {engineer.year_experience > 1 ? "ans" : "an"}
              </span>
            </div>
            <hr></hr>
            <div>
              <span style={{ fontWeight: 500 }}>Logiciels utilisés : </span>
              <span>
                {"-  "}
                {engineer.logiciels.map((logiciel) => {
                  return logiciel.name + "  -  ";
                })}
              </span>
            </div>
          </div>
        </div>
      </div>
      <WorkSection></WorkSection>
    </>
  );
  return <ContentLoader />;
};

export default Ingenieur;
