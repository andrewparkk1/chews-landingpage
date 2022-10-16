import React, { Component } from "react";
import "./index.css";
// import video from "./assets";
import video from "./assets/bgvideo.mp4";
import logo from "./assets/logo-white.png";

function App() {
  return (
    <div>
      <video autoPlay muted loop id="myVideo">
        <source src={video} type="video/mp4" />
      </video>
      <div className="w-screen h-screen flex flex-col justify-center items-center pb-52">
        <img src={logo} alt="logo" className="pb-20" />
        <h1 className="font-bold text-4xl text-white pb-4">chews</h1>
        <div className="flex flex-col justify-center items-center text-gray-300 text-md">
          <h3>chews is currently in beta.</h3>
          <h3>enter your email to request access to the platform</h3>
        </div>
        {/* <input type="text" className="w-1/6 h-7" /> */}
        <input type="text" className="w-1/6 h-7" />
      </div>
    </div>
  );
}

export default App;
