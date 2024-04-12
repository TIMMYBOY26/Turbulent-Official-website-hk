import "./HeroStyles.css";
function Hero(props) {
  return (
    <>
      <div className={props.cName}>
        {/* <img src={props.heroImg} alt="HeroImg" /> */}
        <video src={props.heroVideo} alt="videoBg" autoPlay loop muted />

        <div className="hero-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <a href={props.url} className={props.btnClass} target="_blank">
            {props.buttonText}
          </a>
        </div>
      </div>
    </>
  );
}

export default Hero;
