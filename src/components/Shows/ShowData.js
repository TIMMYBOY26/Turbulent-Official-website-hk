import "./ShowStyles.css";
import { Link } from 'react-router-dom';


function ShowData(props) {
  return (
    <div className="s-card">
      <Link to={props.redirectUrl} target="_blank">
        <div className="s-image">
          <img src={props.image} alt="image" />
        </div>
      </Link>
      <h4>{props.heading}</h4>
      <h6>Organizer: <br />{props.organizer}</h6>
      <h6>Date: <br />{props.date}</h6>
      <h6>Venue: <br /></h6>
      <iframe src={props.googlemap} width="70%"
        height="200"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"></iframe>
      <h4>{props.text}</h4>
    </div >
  );
}

export default ShowData;
