import Maps from "./Maps";
import ContactForm from "./ContactForm";
import AddressCard from "./AddressCard";

import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import Preloader from "./Preloader";
import axios from "axios";
import { setStudio } from "../redux/actions/studioActions";
/**
 * @author
 * @function Contact
 **/

const Contact = (props) => {
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
      <section className="fit">
        <div className="container">
          <h3 className="section-title">Nous contacter</h3>
          <Maps />
        </div>
      </section>
      <section className="dark">
        <div className="container" style={{ textAlign: "left" }}>
          <div className="row mt-5">
            <div className="col-sm-6 col-md-6">
              <ContactForm />
            </div>
            <div className="col-sm-6 col-md-6">
              <AddressCard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
