import { Link } from "react-router-dom";
export default function Navbar(){
  let val = window.location.pathname
  val = (val==="/")?1:(val==="/Galery")?2:(val==="/MisoClicker")?3:4
  return(
    <header>
      <nav className="navbar">
          <div className="navbar-name">
            <h2 className="navbar-brand"><a href="#contacts">Hina Misora / ヒナミソラ</a></h2>
          </div>
          <div className="navbar-links" id="navbarNavAltMarkup">
            <ul className="navbar-nav">
              <li><Link className={`nav-link ${val===1 ? "nav-link-use": ""} `} to="/">Home</Link></li>
              <li><Link className={`nav-link ${val===2 ? "nav-link-use": ""} `} to="/Galery">Galeria</Link></li>
              <li><Link className={`nav-link ${val===3 ? "nav-link-use": ""} `} to="/MisoClicker">Clicker</Link></li>
              <li><Link className={`nav-link ${val===4 ? "nav-link-use": ""} `} to="/NextProyect">Next</Link></li>
              </ul>
          </div>
      </nav>
    </header>
)
}
