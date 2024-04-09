import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/IMG_2103.JPG";
import Footer from "../components/Footer";
import ContactUs from "../components/ContactUs";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Contact"
        btnClass="hide"
      />
      <ContactUs />
      <Footer />
    </>
  );
}

export default Contact;
