import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>turbulent_hk</h1>
          <p>Keep crafting and gigging with us.</p>
        </div>
        <div>
          <a href="https://www.instagram.com/turbulent_hk?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
          <a href="https://open.spotify.com/artist/4NUrtCsICKhqsqJxNKGaCK?si=FAppHNwvR0GG6ry-vV3VBQ">
            <i className="fa-brands fa-spotify"></i>
          </a>
          <a href="https://youtube.com/@turbulent_hk?si=Ssbj3spPkMbiVqSu">
            <i className="fa-brands fa-youtube"></i>
          </a>
          <a href="https://linktr.ee/turbulent_hk">
            <i className="fa-solid fa-tree"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
