import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube,faFacebook,faTwitter,faInstagram, faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (

    <div className="social-container">
      
      <h3>Connect with me!</h3>
      <div><a href="https://www.youtube.com/c/jamesqquick"
        className="youtube social">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      <a href="https://www.facebook.com/learnbuildteach/"
        className="facebook social">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a href="https://www.twitter.com/jamesqquick" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="https://www.instagram.com/learnbuildteach"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a></div>
    </div>
  )
}

export default Footer
