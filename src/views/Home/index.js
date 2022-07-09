import { Link } from "react-router-dom";
import {/*useEffect*/Fragment } from "react";
import Navbar from '../components/Navbar'
import GaleriMisora from './components/galeri/GaleriMisora'
import ClickerColumns from './components/ClickerColumns'
export default function Home(){
    return(
      <Fragment>
        <div className="sticky-top">
          <Navbar />
        </div>
        <div className="row m-2">
          <GaleriMisora />
          <ClickerColumns />
        </div>
        <div>
          <Link to="/MisoClicker">MisoClicker</Link>
        </div>
      </Fragment>
    )
  }//{isloading ? <Loading tittle="Cargando Pokemons"/>: iserror ? <Error message={errorMessage} />:<PokeList pokemons={pokemons} />}