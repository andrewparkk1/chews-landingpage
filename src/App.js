import React from "react";
import "./index.css";
// import video from "./assets";
import bgvideo from "./assets/bgvideofinal.mp4";
import logo from "./assets/logo-white.png";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import CustomForm from "./CustomForm";

const url = `https://app.us21.list-manage.com/subscribe?u=ed94b197614d7ec47191edec8&id=187bea0dc4`;

// const SimpleForm = () => <MailchimpSubscribe url={url} />;

function App() {
  return (
    <div id="doc" className="hidden">
      <div className="bg-[#45b6ed] w-screen h-screen z-[-1] fixed object-cover top-0 bottom-0 right-0 left-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-screen h-screen z-[-1] fixed object-cover top-0 bottom-0 right-0 left-0"
        >
          <source src={bgvideo} type="video/mp4" />
        </video>
        <div className="w-screen h-screen flex flex-col justify-center items-center pb-52">
          <img src={logo} alt="logo" className="pb-20" />
          <h1 className="font-bold text-6xl text-white pb-4">chews</h1>
          <div className="flex flex-col justify-center items-center text-gray-200 text-md">
            <h3>chews is currently in beta</h3>
            <h3>enter your email to request access to the platform</h3>
          </div>

          {/* <MailchimpSubscribe
            url={url}
            render={({ subscribe, status, message }) => (
              <div>
                <SimpleForm onSubmitted={(formData) => subscribe(formData)} />
                {status === "sending" && (
                  <div style={{ color: "blue" }}>sending...</div>
                )}
                {status === "error" && (
                  <div
                    style={{ color: "red" }}
                    dangerouslySetInnerHTML={{ __html: message }}
                  />
                )}
                {status === "success" && (
                  <div style={{ color: "green" }}>Subscribed !</div>
                )}
              </div>
            )}
          /> */}
          <MailchimpSubscribe
            url={url}
            render={({ subscribe, status, message }) => (
              <CustomForm
                status={status}
                message={message}
                onValidated={(formData) => subscribe(formData)}
              />
            )}
          />
          <div className="flex flex-col items-center justify-center text-gray-200 absolute bottom-10">
            <div className="flex flex-row gap-5">
              {/* <p className="text-gray-300">follow along on</p> */}
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
  );
}

export default App;
