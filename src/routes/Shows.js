import Hero from "../components/Hero/Hero";
import Navbar from "../components/NavBar/Navbar";
import Footer from "../components/Footer/Footer";
import Show from "../components/Shows/Show";
import videoBg from "../assets/sea.mp4";


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
