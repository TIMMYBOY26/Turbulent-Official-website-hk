import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ShowsImg from "../assets/landblue.png";
import Footer from "../components/Footer";
import Show from "../components/Show";
import videoBg from "../assets/sea.mp4";
import BackToTopButton from "../components/BackToTopButton";


function Shows() {
  return (
    <div>
      <Navbar />
      <Hero
        cName="hero-small"
        heroVideo={videoBg}
        title="Shows"
        btnClass="hide"
      />
      <Show />
      <Footer />
    </div>
  );
}

export default Shows;
