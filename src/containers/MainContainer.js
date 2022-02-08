import React, { useEffect } from "react";
import Jumbotron from "./Jumbotron";
import { useSelector } from "react-redux";

/**
 * @author
 * @function MainContainer
 **/

const MainContainer = (props) => {
  const studio = useSelector((state) => state.studioInfo.studio);
  let tagClass =
    props.type != "s" ? "main-container" : "main-container services";

  return (
    <div className={tagClass}>
      <Jumbotron type={props.type} studio={studio} />
    </div>
  );
};

export default MainContainer;
