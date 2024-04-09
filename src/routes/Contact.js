import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ContactImg from "../assets/landblue.png";
import Footer from "../components/Footer";
import ContactUs from "../components/ContactUs";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={ContactImg}
        title="Contact"
        btnClass="hide"
      />
      <ContactUs />
      <Footer />
    </>
  );
}

export default Contact;
