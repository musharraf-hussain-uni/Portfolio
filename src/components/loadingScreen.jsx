import React from "react";
import "../styles/loadingScreen.css";
import { BeatLoader, ScaleLoader } from "react-spinners";

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="spinner-container">
        <BeatLoader color="#0072ff" size={25} />
      </div>

      <div className="spinner-container">
        <ScaleLoader color="#00c6ff" height={40} width={4} />
      </div>
    </div>
  );
};

export default LoadingScreen;
