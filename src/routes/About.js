import Hero from "../components/Hero/Hero";
import Navbar from "../components/NavBar/Navbar";
import Footer from "../components/Footer/Footer";
import AboutUs from "../components/AboutUs/AboutUs";
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
