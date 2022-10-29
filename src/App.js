import React, { useState } from "react";
import "./index.css";
import bgvideo from "./assets/bgvideofinal.mp4";
import logo from "./assets/logo-white.png";
// import CustomForm from "./CustomForm";
// import MailchimpSubscribe from "./MailchimpSubscribe";

function App() {
  // const url = `https://app.us21.list-manage.com/subscribe?u=ed94b197614d7ec47191edec8&id=187bea0dc4`;
  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state }),
    })
      .then(() => alert("Success!"))
      .catch((error) => alert(error));
    e.preventDefault();
  }

  return (
    <div>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-screen h-screen z-[-1] fixed object-cover top-0 bottom-0 right-0 left-0"
      >
        <source src={bgvideo} type="video/mp4" />
      </video>
      <div id="doc" className="hidden">
        <div className=" w-screen h-screen z-[-1] fixed object-cover top-0 bottom-0 right-0 left-0">
          <div className="w-screen h-screen flex flex-col justify-center items-center pb-52">
            <img src={logo} alt="logo" className="pb-20" />
            <h1 className="font-bold text-6xl text-white pb-4">chews</h1>
            <div className="flex flex-col justify-center items-center text-gray-200 text-md">
              <h3>chews is currently in beta</h3>
              <h3>enter your email to request access to the platform</h3>
            </div>

            <form
              name="contact"
              netlify="true"
              netlify-honeypot="bot-field"
              hidden
            >
              <input type="email" name="email" />
            </form>

            <form onSubmit={handleSubmit}>
              <p>
                <label>
                  Your Email:{" "}
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>
              </p>
              <p>
                <button type="submit">Send</button>
              </p>
            </form>
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

            <div className="flex flex-col items-center justify-center text-gray-200 absolute bottom-10">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
