import React from "react";
import imgLoader from "../images/loader1.gif";

/**
 * @author
 * @function ContentLoader
 **/

const ContentLoader = (props) => {
  return (
    <div className="content-loader2">
      <img src={imgLoader} alt="loader" />
    </div>
  );
};

export default ContentLoader;
