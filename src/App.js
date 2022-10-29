import React, { useState } from "react";
import "./index.css";
import logo from "./assets/logo-white.png";
// import CustomForm from "./CustomForm";
// import MailchimpSubscribe from "./MailchimpSubscribe";
// import bgvideo from "./assets/shortbgvidnofade.mp4";
// import bgblue from "./assets/bgblue.png";
import validator from "validator";
// import steam from "./assets/steam.gif";
import { FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";

function App() {
  // const url = `https://app.us21.list-manage.com/subscribe?u=ed94b197614d7ec47191edec8&id=187bea0dc4`;
  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const [data, setData] = useState({ email: "" });
  const [update, setUpdate] = useState("");
  const [update2, setUpdate2] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (validator.isEmail(data.email)) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        // body:
        body: encode({ "form-name": "contact", ...data }),
      })
        .then(() => setUpdate("Thank you for chewsing wisely."))
        .then(() => setUpdate2("Stay tuned for the launch..."))
        .then(() => setData({ email: "" }))
        .catch((error) => alert(error));
    } else {
      setUpdate("Not a valid email");
    }
  }

  // var vid = document.getElementById("vid");
  // vid.oncanplaythrough = (event) => {
  //   console.log(
  //     "I think I can play through the entire " +
  //       "video without ever having to stop to buffer."
  //   );
  // };
  return (
    <div className="grad">
      {/* <img
        src={steam}
        alt="steam"
        className="w-screen h-screen z-[-1] fixed object-cover top-0 bottom-0 right-0 left-0"
      /> */}

      {/* <video
        autoPlay
        loop
        muted
        playsInline
        className="w-screen h-screen z-[-1] fixed object-cover top-0 bottom-0 right-0 left-0"
        poster={bgblue}
        id="vid"
      >
        <source src={bgvideo} type="video/mp4" />
      </video> */}

      <div className="fadein w-screen h-screen flex flex-col justify-center items-center">
        <div className="w-screen h-screen flex flex-col justify-center items-center flex-grow">
          <img src={logo} alt="logo" className="pb-16" />
          <h1 className="font-bold text-6xl text-white pb-2">chews</h1>
          <h2 className="font-bold text-3xl text-white pb-2 text-center px-10">
            simplifying the search for food
          </h2>

          <div className="flex flex-col justify-center items-center text-gray-200 text-md pt-16 font-semibold">
            <h3>Sign up for updates</h3>
          </div>

          <form
            onSubmit={handleSubmit}
            className="py-4 flex flex-row justify-center items-center"
          >
            <input
              type="email"
              name="email"
              value={data.email}
              placeholder="your@email.com"
              className="required email p-2 rounded-md border-2 border-white"
              onChange={(e) => setData({ [e.target.name]: e.target.value })}
            />
            <button
              className="button cursor-pointer text-white border-white border-2 py-2 px-6 bg-[rgb(69, 182, 237)] rounded-md font-semibold"
              type="submit"
            >
              send
            </button>
          </form>
          <div className="flex flex-col justify-center items-center">
            <p className="text-white font-semibold px-4 text-center">
              {update}
            </p>
            <p className="text-white font-semibold px-4 text-center">
              {update2}
            </p>
          </div>
        </div>
        <i class="fa-brands fa-instagram"></i>
        {/* <MailchimpSubscribe
              url={url}
              render={({ subscribe, status, message }) => (
                <CustomForm
                  status={status}
                  message={message}
                  onValidated={(formData) => subscribe(formData)}
                />
              )}
            /> */}
        {/* <div className="flex flex-col items-center justify-center text-gray-200">
              <div className="flex flex-row gap-5">
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.instagram.com/chewscorp/"
                  className="font-semibold"
                >
                  instagram
                </a>
                <p>|</p>
                <a
                  rel="noreferrer"
                  href="https://twitter.com/chews_chews"
                  target="_blank"
                  className="font-semibold"
                >
                  twitter
                </a>
                <p>|</p>
                <a
                  rel="noreferrer"
                  href="https://www.tiktok.com/@chews.wisely?_t=8WqUVGopPEU&_r=1"
                  target="_blank"
                  className="font-semibold"
                >
                  tiktok
                </a>
              </div>
            </div> */}
        <div class="mx-auto flex flex-col space-y-2 text-center text-gray-200 pb-3">
          <div className="flex flex-row gap-5 pb-2 items-center justify-between">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.instagram.com/chewscorp/"
              className="font-semibold"
            >
              <FaInstagram size={25}></FaInstagram>
            </a>
            <a
              rel="noreferrer"
              href="https://twitter.com/chews_chews"
              target="_blank"
              className="font-semibold"
            >
              <FaTwitter size={25}></FaTwitter>
            </a>
            <a
              rel="noreferrer"
              href="https://www.tiktok.com/@chews.wisely?_t=8WqUVGopPEU&_r=1"
              target="_blank"
              className="font-semibold"
            >
              <FaTiktok size={25}></FaTiktok>
            </a>
          </div>
          <p class="text-xs">© Chews, Inc. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
