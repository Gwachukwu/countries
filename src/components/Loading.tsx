import React from "react";
import LoadingGif from "../assets/loading.gif";

const Loading = () => {
  return (
    <div className="loading">
      <div>
        <img src={LoadingGif} alt="loading..." />
      </div>
    </div>
  );
};

export default Loading;
