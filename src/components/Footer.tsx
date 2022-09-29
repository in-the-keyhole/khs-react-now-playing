import './Footer.css';
import keyholeLogo from '../images/keyhole-white.png';
import tmdbLogo from '../images/movie-db-logo.png'

function Footer() {

  return (
    <div className="footer">
      <div className="footbox">
        <p>Created by</p>
        <img src={keyholeLogo} alt="keyhole" />
      </div>
      <div className="footbox">
        <p>Powered by</p>
        <img src={tmdbLogo} alt="tmdb" />
      </div>
    </div>
  );
}
export default Footer;
