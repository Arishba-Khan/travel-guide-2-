import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div id="contact">
      <section className="container">
        <div className="flex flex-col text-center mb-12">
          <h1 className="title-font">Contact Us</h1>
          <p className="leading-relaxed">
            Plan your perfect adventure with Journey Journal.
          </p>
        </div>
        <div className="mx-auto" style={{ maxWidth: "50%" }}>
          <div className="flex">
            <div className="p-2" style={{ width: "50%" }}>
              <div>
                <label htmlFor="name" className="leading-7">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="input-field"
                />
              </div>
            </div>
            <div className="p-2" style={{ width: "50%" }}>
              <div>
                <label htmlFor="email" className="leading-7">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="input-field"
                />
              </div>
            </div>
          </div>
          <div className="p-2">
            <div>
              <label htmlFor="message" className="leading-7">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="textarea-field"
                style={{ height: "8rem" }}
              ></textarea>
            </div>
          </div>
          <div className="p-2">
            <button className="btn">Send Message</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
