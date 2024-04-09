import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/Land.jpeg";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
import videoBg from "../assets/fire.mp4";

function About() {
  return (
    <div>
      <Navbar />
      <Hero
        cName="hero-small"
        // heroImg={AboutImg}
        heroVideo={videoBg}
        title="About us"
        btnClass="hide"
      />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default About;
