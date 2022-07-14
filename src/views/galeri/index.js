import { Link } from "react-router-dom";
import {useEffect, Fragment } from "react";
import Navbar from '../components/Navbar'
import GaleriMisora from './components/galeri/GaleriMisora'
import ClickerColumns from './components/ClickerColumns'
import shallow from 'zustand/shallow';
import MisoClick from '../../stores/zustand'
import GaleryZus from "../../stores/galeryzus";
export default function Galeria(){
  const {setUrls} = GaleryZus(({setUrls})=>({setUrls}),shallow);
  const{setGlobalClick} = MisoClick(({setGlobalClick}) =>({setGlobalClick}),shallow);
    useEffect(() => {
      setUrls().catch(null);
      setGlobalClick().catch(null);
    }, []);
    return(
      <Fragment>
        <Navbar />
        <GaleriMisora />
        <ClickerColumns />
        <div>
          <Link to="/MisoClicker">MisoClicker</Link>
        </div>
      </Fragment>
    )
  }//{isloading ? <Loading tittle="Cargando Pokemons"/>: iserror ? <Error message={errorMessage} />:<PokeList pokemons={pokemons} />}