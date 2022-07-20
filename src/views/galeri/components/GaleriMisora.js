import Cuadro from "./Cuadro.js";
import GaleryZus from "../../../stores/galeryzus";
import shallow from 'zustand/shallow';
export default function GaleriMisora(){
    const{urls} = GaleryZus(({urls}) =>({urls}),shallow);
    return (
        <div className="galery">
            <Cuadro url={urls}/>
        </div>
    )}; 