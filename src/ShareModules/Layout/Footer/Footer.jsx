import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

function Footer() {
return (
<>
  <div className="footer">
    <div className="footer__box">

      <div className="footer__top">
        <div className="footer__box--heading">
          <h2>Community</h2>
        </div>

        <div className="footer__box-social-icon">
          <ul>
            <li>
              <Link to="" className="social-link">
              <img className="social-link--normal" src="./images/icons/discord.svg" alt="" />
              <img className="social-link--grd" src="./images/icons/discord-grd.svg" alt="" />
              <p>Discord</p>
              </Link>
            </li>
            <li>
              <Link to="" className="social-link">
              <img className="social-link--normal" src="./images/icons/twitter.svg" alt="" />
              <img className="social-link--grd" src="./images/icons/twitter-grd.svg" alt="" />
              <p>Twitter</p>
              </Link>
            </li>
            <li>
              <Link to="" className="social-link">
              <img className="social-link--normal" src="./images/icons/medium.svg" alt="" />
              <img className="social-link--grd" src="./images/icons/medium-grd.svg" alt="" />
              <p>Medium</p>
              </Link>
            </li>
            <li>
              <Link to="" className="social-link">
              <img className="social-link--normal" src="./images/icons/telegram.svg" alt="" />
              <img className="social-link--grd" src="./images/icons/telegram-grd.svg" alt="" />
              <p>Telegram</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__bottom-info">
          <div className="footer__bottom-logo">
            <Link to="">
            <img src="./images/logo-footer.svg" alt="" />
            </Link>
          </div>

          <div className="footer__bottom-links">
            <ul>
              <li>
                <Link to="" className="footer-info-links">
                Contact
                </Link>
              </li>
              <li>
                <Link to="" className="footer-info-links">
                FAQ
                </Link>
              </li>
              <li>
                <Link to="" className="footer-info-links">
                Policies</Link> 
                <span  className="footer-info-links"> / </span>  
                <Link to="" className="footer-info-links">Terms  </Link>
                <span  className="footer-info-links"> / </span>  
                <Link to="" className="footer-info-links">Privacy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</>
);
}

export default Footer;