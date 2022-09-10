import { Routes, Route,Navigate } from 'react-router-dom';
import Home from '../views/Home';
import Forzerofor from '../views/404.js';
import MisoClicker from '../views/MisoClicker';
import PageGallery from '../views/galeri';
import Wiki  from '../views/Wiki';


export default function RouteDocument(){
  
  return (
    <Routes>
      <Route path="/home" element={<Navigate to="/"/>} />
      <Route path="/" element={<Home />} />
      <Route path="/galeria" element={<PageGallery />} />
      <Route path="/misoclicker" element={<MisoClicker />} />
      <Route path='/wiki' element={<Wiki />} />
      <Route
      path="*"
      element={<Forzerofor />}/>
    </Routes>
    )
}