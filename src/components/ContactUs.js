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
    <section>
      <div className="container">
        <h4 className="--text-center">Contact Us</h4>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="--form-control --card --flex-center --dir-column "
        >
          <input
            type="text"
            placeholder="Fill Name"
            name="user_name"
            required
          />
          <input type="email" placeholder="Email" name="user_email" required />
          <input type="text" placeholder="Subject" name="subject" required />
          <textarea name="message" cols="30" rows="10"></textarea>
          <button type="submit" className="--btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
