import React, { Component } from 'react'
import { Link } from "react-router-dom";

import "./component.scss";

export class Nav extends Component {


  render() {
    return (
      <div>
        <nav className="Navbar">
          <h2>MUSIC STORE</h2>

          <ul className="nav-links">
            <Link className="Navlink" to="/addSong">
              <li>ADD SONG</li>
            </Link>
            <Link className="Navlink" to="/">
              <li>CREATE</li>
            </Link>
            <div className="search-container">


            </div>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Nav
