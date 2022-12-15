import React from "react";
import Layout from "../components/Layout";

import "../styles/contact-me.css";

const ContactMe = () => {
  return (
    <Layout>
      <div className="contact_me__container">
        <h2>Want to connect? Send me a hi!</h2>
        <form
          acceptCharset="UTF-8"
          action="https://www.formbackend.com/f/11e46513d846c902"
          method="POST"
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <label for="name">Name</label>
          <input type="text" id="name" name="name" required />
          <label for="email">Email</label>
          <input type="email" id="email" name="email" required />
          <label for="message">Message</label>
          <textarea rows={5} id="message" name="message" required />
          <button type="submit">Submit</button>
        </form>
      </div>
    </Layout>
  );
};

export default ContactMe;
