import { Link } from "react-router-dom";
export default function Navbar(){
  let val = window.location.pathname
  let pageRoute = {
    "/": 1,
    "/Gallery": 2,
    "/MisoClicker": 3,
    "/Wiki": 4,
    "/NextProyect": 5,
  }
  val = pageRoute[val || 5]
  return(
    <header>
      <nav className="navbar">
          <div className="navbar-name">
            <h2 className="navbar-brand">Hina Misora</h2>
          </div>
          <div className="navbar-links" id="navbarNavAltMarkup">
            <ul className="navbar-nav">
              <li><Link className={`nav-link ${val===1 ? "nav-link-use": ""} `} to="/">Home</Link></li>
              <li><Link className={`nav-link ${val===2 ? "nav-link-use": ""} `} to="/Gallery">Galeria</Link></li>
              <li><Link className={`nav-link ${val===3 ? "nav-link-use": ""} `} to="/MisoClicker">Clicker</Link></li>
              <li><Link className={`nav-link ${val===4 ? "nav-link-use": ""} `} to="/Wiki">Wiki</Link></li>
              <li><Link className={`nav-link ${val===5 ? "nav-link-use": ""} `} to="/NextProyect">Next</Link></li>
              </ul>
          </div>
      </nav>
    </header>
)
}
