import React from "react"
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="info_list">
        <div className="info_items">
          <i class="fas fa-street-view"></i>
          <p>123 Sesame St
            Charlote, NC 28215</p>
        </div>
        <div className="info_items">
          <i class="fas fa-id-badge"></i>
          <p>(704)-232-8701</p>
        </div>
        <div className="info_items">
          <i class="fas fa-envelope-open-text"></i>
          <p>Luis.galeasjr@gmail.com</p>
        </div>
      </div>
      <div className="bio">
        <h3>About Horizon</h3>
        <p>Horizon is all about music. We belive That you need to listen to the music
          you enjoy whenever ou want. Enjoy from our unlimited selection with genres like Rap, EDM, Rock, and Unknown</p>
        <div className="social">
          <a href="https://www.linkedin.com/in/luis-galeas-494b87185/"><i class="fab fa-linkedin"></i></a>
          <a href="https://www.facebook.com/luis.galeas.393?ref=bookmarks"><i class="fab fa-facebook-square"></i></a>
          <a href="https://www.instagram.com/luisi.g__/"><i class="fab fa-instagram"></i></a>
          <a href="https://github.com/luisgaleas-clockwork"><i class="fab fa-github-square"></i></a>
        </div>
        <p>&copy; Horizon.io last updated Oct 3, 2019</p>
      </div>
    </footer>
  )
}

export default Footer