import { useRef } from "react";
import "./ContactUsStyles.css";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_95xbpzm", "template_wcc37f9", form.current, {
        publicKey: "Cium44gNYYE3ALZWt",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );

    e.target.reset();
  };

  return (
      <div className="form-container">
        <h3>Contact Us by Email, WhatsApp or instagram!</h3>
        <form
          ref={form}
          onSubmit={sendEmail}
        >
          <h5>Welcome to mail us:</h5>
          <input
            type="text"
            placeholder="Fill Name"
            name="user_name"
            required
          />
          <input type="email" placeholder="Email" name="user_email" required />
          <input type="text" placeholder="Subject" name="subject" required />
          <textarea placeholder="message" cols="30" rows="6"></textarea>
          <button type="submit">
            Send Message
          </button>
        </form>
      </div>
  );
};

export default ContactUs;
