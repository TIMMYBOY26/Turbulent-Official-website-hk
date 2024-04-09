import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/landblue.png";
import Footer from "../components/Footer";
import Show from "../components/Show";



function Shows() {
  return (
    <div>
      <Navbar />
      {/* <Hero cName="hero-mid" heroImg={AboutImg} title="Shows" btnClass="hide" /> */}
      <Show />
      <Footer />
    </div>
  );
}

export default Shows;
