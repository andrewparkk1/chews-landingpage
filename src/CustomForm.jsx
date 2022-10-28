import React, { useState } from "react";

const CustomForm = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
      });
  };

  return (
    <form className="mc__form" onSubmit={(e) => handleSubmit(e)}>
      {status === "sending" && (
        <div className="mc__alert mc__alert--sending">sending...</div>
      )}
      {status === "error" && (
        <div
          className="mc__alert mc__alert--error"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          className="mc__alert mc__alert--success"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}

      <div className="mc__field-container flex flex-row pt-20">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="EMAIL"
          className="required email p-2 rounded-md border-2 border-white"
          id="mce-EMAIL"
          required
          placeholder="your@email.com"
        />

        <button
          className="button cursor-pointer text-white border-white border-2 py-2 px-6 bg-[rgb(69, 182, 237)] rounded-md font-semibold"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default CustomForm;
