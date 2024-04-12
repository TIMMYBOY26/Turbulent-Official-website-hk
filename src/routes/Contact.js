import Hero from "../components/Hero/Hero";
import Navbar from "../components/NavBar/Navbar";
// import ContactImg from "../assets/landblue.png";
import Footer from "../components/Footer/Footer";
import ContactUs from "../components/ContactUs/ContactUs";
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
