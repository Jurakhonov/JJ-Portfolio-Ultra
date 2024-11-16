import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact__box">
      <div className="contact__box-info">
        <h2 className="info__title">Schedule a meeting with me</h2>
        <p className="info__desc">
          Have a question? Or just want to discuss the project? Just fill out
          the form, and I’ll get back to you ASAP.
        </p>
      </div>
      <form
        action="https://formspree.io/f/mvoewdrw"
        method="POST"
        className="form"
      >
        <input
          type="text"
          name="first"
          placeholder="How can I call you?"
          autoComplete="off"
          className="form__item"
          required
        />
        <input
          type="tel"
          name="tel"
          placeholder="Phone number"
          autoComplete="off"
          className="form__item"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          autoComplete="off"
          className="form__item"
          required
        />
        <textarea
          rows="5"
          cols="60"
          name="message"
          placeholder="You can tell me anything you want."
          autoComplete="off"
          className="form__item message"
        ></textarea>
        <button type="submit" className="form__button">
          Let's chat
        </button>
      </form>
    </div>
  );
};

export default Contact;
