import { Link } from "react-router-dom";
export default function Navbar(){
  let val = window.location.pathname
  let pageRoute = {
    "/": 1,
    "/galeria": 2,
    "/misoclicker": 3,
    "/wiki": 4,
    "/NextProyect": 5,
  }
  val = pageRoute[val || 5]
  return(
    <header>
      <nav className="navbar">
          <div className="navbar-name">
            <h2 className="navbar-brand">Hina Misora</h2>
          </div>
          <input type="checkbox" id="check"/>
          <label htmlFor="check" className="checkbtn">
            <i className="fas fa-bars"></i>
          </label>
          <div className="navbar-links" id="navbarNavAltMarkup">
            <ul className="navbar-nav">
              <li><Link className={`nav-link ${val===1 ? "nav-link-use": ""} `} to="/">Home</Link></li>
              <li><Link className={`nav-link ${val===2 ? "nav-link-use": ""} `} to="/galeria">Galeria</Link></li>
              <li><Link className={`nav-link ${val===3 ? "nav-link-use": ""} `} to="/misoclicker">Clicker</Link></li>
              <li><Link className={`nav-link ${val===4 ? "nav-link-use": ""} `} to="/wiki">Wiki</Link></li>
              <li><Link className={`nav-link ${val===5 ? "nav-link-use": ""} `} to="/nextproyect">Next</Link></li>
              </ul>
          </div>
      </nav>
    </header>
)
}
