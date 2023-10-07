import iconFacebook from "../../assets/icon-facebook.svg";
import iconInstagram from "../../assets/icon-instagram.svg";
import iconPinterest from "../../assets/icon-pinterest.svg";
import iconTwitter from "../../assets/icon-twitter.svg";

const Footer = () => {
  return (
    <footer className="footer container__app py-[20px] min-[768px]:py-[40px]">
      <div className="footer__logo mb-[30px] min-[768px]:mb-[0]">
        <a href="#">Shortly</a>
      </div>
      <div className="footer__content">
        <ul className="footer__containitem text-center min-[768px]:text-left">
          <li className="footer__itemdesc">
            <a href="#">Features</a>
          </li>
          <li className="footer__itemdesc">
            <a href="#">Link Shortening</a>
          </li>
          <li className="footer__itemdesc">
            <a href="#">Branded Links</a>
          </li>
          <li className="footer__itemdesc">
            <a href="#">Analytics</a>
          </li>
        </ul>
        <ul className="footer__containitem text-center min-[768px]:text-left">
          <li className="footer__itemdesc">
            <a href="#">Resources</a>
          </li>
          <li className="footer__itemdesc">
            <a href="#">Blog</a>
          </li>
          <li className="footer__itemdesc">
            <a href="#">Developers</a>
          </li>
          <li className="footer__itemdesc">
            <a href="#">Support</a>
          </li>
        </ul>
        <ul className="footer__containitem text-center min-[768px]:text-left">
          <li className="footer__itemdesc">
            <a href="#">Company</a>
          </li>
          <li className="footer__itemdesc">
            <a href="#">About</a>
          </li>
          <li className="footer__itemdesc">
            <a href="#">Our Team</a>
          </li>
          <li className="footer__itemdesc">
            <a href="#">Career</a>
          </li>
          <li className="footer__itemdesc">
            <a href="#">Contact</a>
          </li>
        </ul>
        <ul className="footer__containitem text-center flex items-center">
          <li className="footer__itemicon mr-[20px]">
            <a href="#">
              <img alt="facebook" src={iconFacebook} />
            </a>
          </li>
          <li className="footer__itemicon mr-[20px]">
            <a href="#">
              <img alt="facebook" src={iconTwitter} />
            </a>
          </li>
          <li className="footer__itemicon mr-[20px]">
            <a href="#">
              <img alt="facebook" src={iconPinterest} />
            </a>
          </li>
          <li className="footer__itemicon">
            <a href="#">
              <img alt="facebook" src={iconInstagram} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
