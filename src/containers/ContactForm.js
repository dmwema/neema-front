import React from "react";
import { useSelector } from "react-redux";

/**
 * @author
 * @function ContactForm
 **/

const ContactForm = (props) => {
  const studio = useSelector((state) => state.studioInfo.studio);
  return (
    <div className="contact-bg">
      <h4>Laissez-noud un message</h4>
      <form action="">
        <label htmlFor="name">Nom</label>
        <input id="name" type="text" className="form-control" />
        <label htmlFor="email">Email</label>
        <input id="email" type="text" className="form-control" />
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          cols="30"
          rows="5"
          className="form-control"
        ></textarea>
        <button className="mt-2 btn btn-primary">Envoyer le Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
