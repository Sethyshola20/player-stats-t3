import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used

export default function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="home-logo">
            <Link className="main-link" to="/Player-stats">
              <FontAwesomeIcon
                icon={solid("futbol")}
                size="3x"
                className="logo-icon"
              />
            </Link>
          </div>
          <ul className="navbar-menu">
            <li>
              <Link className="league" to="/Player-stats/lewandowski">
                <div className="league-logo">
                  <img
                    alt="bundesliga logo"
                    src={
                      "../Images/League-logo/bundesliga/bundesliga-vector-logo.png"
                    }
                  />
                </div>
                <div className="league-name">BUNDESLIGA</div>
              </Link>
            </li>
            <li>
              <Link className="league" to="/Player-stats/mbappe">
                <div className="league-logo">
                  <img
                    alt="ligue 1 logo"
                    src={
                      "../Images/League-logo/ligue-1/ligue-1-vector-logo.png"
                    }
                  />
                </div>
                <div className="league-name">LIGUE 1</div>
              </Link>
            </li>
            <li>
              <Link className="league" to="/Player-stats/salah">
                <div className="league-logo">
                  <img
                    alt="premier league logo"
                    src={
                      "../Images/League-logo/premier-league/premier-league-logo-vector.png"
                    }
                  />
                </div>
                <div className="league-name">PREMIER LEAGUE</div>
              </Link>
            </li>
            <li>
              <Link className="league" to="/Player-stats/vlahovic">
                <div className="league-logo">
                  <img
                    alt="serie logo"
                    src={
                      "../Images/League-logo/lega-calcio-serie-a/lega-calcio-serie-a-tim--old---tim--vector-logo.png"
                    }
                  />
                </div>
                <div className="league-name">SERIE A</div>
              </Link>
            </li>
            <li>
              <Link className="league" to="/benzema">
                <div className="league-logo">
                  <img
                    alt="liga logo"
                    src={"../Images/League-logo/la-liga/la-liga-logo.png"}
                  />
                </div>
                <div className="league-name">LIGA</div>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
