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
          <h3>Chews is currently in beta.</h3>
          <h3>Enter your email to request access to the platform.</h3>
        </div>
        {/* <input type="text" className="w-1/6 h-7" /> */}
        {/* <input type="text" className="w-1/6 h-7" /> */}
        <script
          async
          data-uid="9b877d04cd"
          src="https://dedicated-thinker-5282.ck.page/9b877d04cd/index.js"
        ></script>

        <div className="flex flex-col items-center justify-center text-gray-400 absolute bottom-0 pb-[4rem]">
          <div className="flex flex-row gap-2">
            {/* <p className="text-gray-300">follow along on</p> */}
            <a href="" className="font-bold">
              instagram
            </a>
            <a href="" className="font-bold">
              twitter
            </a>
            <a href="" className="font-bold">
              tiktok
            </a>
          </div>
        </div>

        {/* <div className="flex flex-row gap-4">
          <a href="" className="text-white hover:text-blue-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-activity"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>
            </svg>
          </a>

          <a href="" className="text-white hover:text-blue-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-activity"
            >
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
            </svg>
          </a>

          <a href="" className="text-white hover:text-blue-500">
            <svg
              width="24px"
              height="24px"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="#000000"
              className="text-white hover:text-blue-500"
            >
              <path
                d="M10 12a3 3 0 103 3V6c.333 1 1.6 3 4 3"
                stroke="#000000"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </a>
        </div> */}

        {/* <div className="form-control pt-16">
          <div className="input-group ">
            <input
              type="text"
              placeholder="your email"
              className="input input-bordered"
            />
            <button className="btn btn-square lowercase w-20 bg-slate-200 border-0">
              send
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default App;
