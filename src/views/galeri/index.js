import { Link } from "react-router-dom";
import {useEffect} from "react";
import Navbar from '../components/Navbar'
import GaleriMisora from './components/galeri/GaleriMisora'
import shallow from 'zustand/shallow';
import MisoClick from '../../stores/zustand'
import GaleryZus from "../../stores/galeryzus";
import Footer from '../components/Footer'
export default function Galeria(){
  const {setUrls} = GaleryZus(({setUrls})=>({setUrls}),shallow);
  const{setGlobalClick} = MisoClick(({setGlobalClick}) =>({setGlobalClick}),shallow);
    useEffect(() => {
      setUrls().catch(null);
      setGlobalClick().catch(null);
    }, []);
    return(
      <>
        <Navbar />
        <GaleriMisora />
        <div>
          <Link to="/MisoClicker">MisoClicker</Link>
        </div>
        <Footer />
      </>
    )
  }//{isloading ? <Loading tittle="Cargando Pokemons"/>: iserror ? <Error message={errorMessage} />:<PokeList pokemons={pokemons} />}