import contin from "../../album/contin.png";
import nonfic from "../../album/nonfic.png";
import continAct from "../../album/continAct.png";
import nonficAct from "../../album/nonficAct.png";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Released Singles</h1>
      <p>Check out our latest release</p>

      <DestinationData
        className="first-des"
        heading="Pop-Rock release"
        text="Avaliable in Spotify/ YouTube/ Apple Music/ KKbox.setting the tone
        with powerful and energetic lyrics that capture the essence of
        rock music. We can include themes of rebellion, passion, and
        freedom. How about we begin with a catchy chorus that will grab
        the listener's attention? Let's brainstorm some ideas together!"
        img1={contin}
        img2={nonfic}
      />

      <DestinationData
        className="first-des-reverse"
        heading="Pop-Rock release"
        text="Avaliable in Spotify/ YouTube/ Apple Music/ KKbox.setting the tone
        with powerful and energetic lyrics that capture the essence of
        rock music. We can include themes of rebellion, passion, and
        freedom. How about we begin with a catchy chorus that will grab
        the listener's attention? Let's brainstorm some ideas together!"
        img1={continAct}
        img2={nonficAct}
      />
    </div>
  );
};

export default Destination;
