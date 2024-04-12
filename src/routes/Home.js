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
        url="https://www.youtube.com/watch?v=dUCy4ZxWTsY"
        btnClass="show"
      />
      <Destination />
      <Footer />

    </>
  );
}

export default Home;
