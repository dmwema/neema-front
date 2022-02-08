import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { setEngineers } from "../redux/actions/engineerActions";
import Preloader from "./Preloader";

/**
 * @author
 * @function EngineerListing
 **/

const EngineerListing = (props) => {
  const engineers = useSelector((state) => state.allEngineers);

  const dispatch = useDispatch();

  const fetchEngineers = async () => {
    const response = await axios
      .get("https://studio.mjf.ujn.mybluehost.me/api/engineer")
      .catch((err) => {
        console.log("Error");
      });
    dispatch(setEngineers(response.data));
  };

  useEffect(() => {
    fetchEngineers();
  }, []);

  console.log(engineers.engineers.data);

  let default_image =
    "http://worldleaders-training.com/wp-content/uploads/2020/01/no-image-placeholder.gif";

  if (engineers.engineers.data == undefined) {
    return <Preloader></Preloader>;
  }
  return (
    <div
      className="container"
      style={{ margin: "50px", paddingTop: "40px", minHeight: "50vh" }}
    >
      <div className="row justify-content-center mb-4">
        <div className="col-md-7 text-center">
          <div className="section-title">Nos ingénieurs</div>
        </div>
      </div>
      {engineers.engineers.data !== undefined ? (
        engineers.engineers.data.length !== 0 ? (
          <div className="row">
            {engineers.engineers.data.map((ir) => {
              return (
                <div key={ir.id} className="col-lg-4 mb-4 team-card">
                  <div className="row">
                    <div className="col-md-12 img-container">
                      <img
                        src={
                          ir.img_url
                            ? "https://studio.mjf.ujn.mybluehost.me/" +
                              ir.img_url
                            : default_image
                        }
                        alt="image ingénieur"
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-md-12">
                      <div className="pt-2">
                        <NavLink
                          className="mt-4 font-weight-medium mb-0 ir-name"
                          to={"/ingenieur/" + ir.id}
                        >
                          {ir.name}
                        </NavLink>
                        <h6 className="subtitle">
                          {ir.email ? ir.email : "pas d'adresse email"}
                        </h6>
                        <p>
                          Années d'expérience : {ir.year_experience} an
                          {ir.year_experience > 1 ? "s" : ""}
                        </p>
                        <hr />
                        <p>
                          {ir.phone ? ir.phone : "pas de numéro de contact"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          ""
        )
      ) : (
        ""
      )}
    </div>
  );
};

export default EngineerListing;
