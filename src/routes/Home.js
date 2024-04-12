import Hero from "../components/Hero/Hero";
import Navbar from "../components/NavBar/Navbar";
import videoBg from '../assets/herovideo.mp4'
import Destination from "../components/UpdateDestinstions/Destination";
import Footer from "../components/Footer/Footer";

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
