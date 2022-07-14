import { Link } from "react-router-dom";
export default function Navbar(){
  return(
<nav className="navbar">
    <div className="navbar-name">
      <h2 className="navbar-brand"><a href="#contacts">Hina Misora / ヒナミソラ</a></h2>
    </div>
    <div className="navbar-links" id="navbarNavAltMarkup">
      <ul className="navbar-nav">
        <li><Link className="nav-link" to="/">Home</Link></li>
        <li><Link className="nav-link" to="/Galeria">Galeria</Link></li>
        <li><Link className="nav-link" to="/MisoClicker">Clicker</Link></li>
        <li><Link className="nav-link" to="/NextProyect">Next</Link></li>
        </ul>
    </div>
</nav>
)
}
