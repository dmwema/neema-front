import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router";

/**
 * @author
 * @function ScrollToTop
 **/

const ScrollToTop = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return <>{props.children}</>;
};

export default ScrollToTop;
