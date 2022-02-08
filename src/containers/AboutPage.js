import History from "./History";
import TimeTable from "./TimeTable";

import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import Preloader from "./Preloader";
import axios from "axios";
import { setStudio } from "../redux/actions/studioActions";

/**
 * @author
 * @function About
 **/

const About = (props) => {
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
      <History />
      <TimeTable />
    </>
  );
};

export default About;
