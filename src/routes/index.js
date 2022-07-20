import {Routes,Route} from "react-router-dom";
import Home from "../views/Home"
import Forzerofor from "../views/404.js";
import MisoClicker from "../views/MisoClicker";
import Galeri from "../views/galeri/"
export default function RouteDocument(){
    return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Galery" element={<Galeri />} />
          <Route path="/MisoClicker" element={<MisoClicker />} />
          <Route
          path="*"
          element={<Forzerofor />}/>
        </Routes>
        )
}