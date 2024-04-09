import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import videoBg from '../assets/herovideo.mp4'
import Destination from "../components/Destination";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        // heroImg={HomeImg}
        heroVideo={videoBg}
        title=""
        text=""
        buttonText="Listen"
        url="https://l.instagram.com/?u=https%3A%2F%2Flinktr.ee%2Fturbulent_hk&e=AT2HOmmvXkiimRZT82WQMqFgwlASA1OHHwgVR5TjH_gfJgtMx-Sn2FR6Y1oZczz6XxhGbVNrEWBU-Yxfa5A4mydtTugNuE3DskTNKw"
        btnClass="show"
      />
      <Destination />
      <Footer />
    </>
  );
}

export default Home;
