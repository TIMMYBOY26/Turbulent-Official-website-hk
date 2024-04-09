import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/land_blue.jpeg";
import Footer from "../components/Footer";
import Show from "../components/Show";

function Service() {
  return (
    <div>
      <Navbar />
      <Hero cName="hero-mid" heroImg={AboutImg} title="Shows" btnClass="hide" />
      <Show />
      <Footer />
    </div>
  );
}

export default Service;
