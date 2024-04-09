import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
// import ContactImg from "../assets/landblue.png";
import Footer from "../components/Footer";
import ContactUs from "../components/ContactUs";
import videoBg from '../assets/herovideo.mp4'


function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-small"
        // heroImg={ContactImg}
        heroVideo={videoBg}
        title="Contact"
        btnClass="hide"
      />
      <ContactUs />
      <Footer />
    </>
  );
}

export default Contact;
