import React, { useEffect } from "react";
import MainContainer from "./MainContainer";
import ServicesContainer from "./ServicesContainer";
import About from "./About";
import Preloader from "./Preloader";
import Gallery from "./Gallery";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { setStudio } from "../redux/actions/studioActions";

/**
 * @author
 * @function Home
 **/

const Home = (props) => {
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
      <MainContainer></MainContainer>
      <About></About>
      <ServicesContainer></ServicesContainer>
      <Gallery></Gallery>
    </>
  );
};

export default Home;
