import React, { useState } from "react";
import { postSendEmail } from "../../api/common";
import ContactKorea from "./ContactKorea";
import ContactSingapore from "./ContactSingapore";

const Contact = () => {
  const [form, setForm] = useState({
    email: "",
    name: "",
    message: "",
  });

  const formBinding = (type, value) => {
    setForm((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  const emailInquiry = async () => {
    let payload = {
      ...form,
    };

    if (form.email === "") {
      alert("Please enter your email");
      return;
    }
    if (form.name === "") {
      alert("Please enter your name");
      return;
    }
    if (form.message === "") {
      alert("Please enter your message");
      return;
    }

    await postSendEmail(payload)
      .then(({ status, data }) => {
        if (data.success) {
          alert("Your inquiry has been completed.");
        } else {
          alert("An error has occurred. Please re-enter.");
        }
        setForm({
          email: "",
          name: "",
          message: "",
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <section className="tf-section contact">
      <ContactKorea />
      <ContactSingapore />
      <div className="col-md-6" style={{ margin: "0 auto" }}>
        <form className="contact__form">
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="Your name"
              required
              value={form.name}
              onChange={(e) => formBinding("name", e.target.value)}
            />
            <input
              type="email"
              className="form-control mr-0"
              id="exampleInputEmail1"
              placeholder="Your email"
              required
              value={form.email}
              onChange={(e) => formBinding("email", e.target.value)}
            />
          </div>
          <div className="form-group">
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Your message here"
              value={form.message}
              onChange={(e) => formBinding("message", e.target.value)}
            ></textarea>
          </div>
          <div className="center">
            <button
              type="button"
              className="btn-action style-2"
              onClick={() => emailInquiry()}
            >
              <span>Submit</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
