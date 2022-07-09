export default function Navbar(){
  return(
<nav
  className="navbar navbar-dark navbar-expand-lg"
  style={{ backgroundColor: "#362e9c" }}>
  <div className="container-fluid">
    <h1 className="navbar-brand">Hina Misora / ヒナミソラ</h1>
    <button 
    className="navbar-toggler" 
    type="button" 
    data-bs-toggle="collapse" 
    data-bs-target="#navbarNavAltMarkup" 
    aria-controls="navbarNavAltMarkup" 
    aria-expanded="false" 
    aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link" href="https://twitter.com/Hina_Misora" target="_blank" rel='noreferrer'>Twitter</a>
        <a className="nav-link" href="https://www.youtube.com/channel/UC6tSB9TnO0f01OBeo9UEJZA" target="_blank" rel='noreferrer'>Youtube</a>
        <a className="nav-link" href="https://space.bilibili.com/1644927644" target="_blank" rel='noreferrer'>BiliBili</a>
        <a className="nav-link" href="https://streamlabs.com/-hinamisorawactor" target="_blank" rel='noreferrer'>Streamlabs</a>
      </div>
    </div>

  </div>
</nav>
)
}
