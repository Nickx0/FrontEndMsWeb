import { Routes, Route } from 'react-router-dom';
import Home from '../views/Home';
import Forzerofor from '../views/404.js';
import MisoClicker from '../views/MisoClicker';
import PageGallery from '../views/galeri';
import Wiki  from '../views/Wiki';

export default function RouteDocument(){
  return (
    <Routes>
      <Route path="home" redirect="/"/>
      <Route path="/" element={<Home />} />
      <Route path="/Gallery" element={<PageGallery />} />
      <Route path="/MisoClicker" element={<MisoClicker />} />
      <Route path='/Wiki' element={<Wiki />} />
      <Route
      path="*"
      element={<Forzerofor />}/>
    </Routes>
    )
}