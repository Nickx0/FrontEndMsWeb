import { useEffect } from "react";
import Cuadro from "./Cuadro.js";
import GaleryZus from "../../../../stores/galeryzus";
import shallow from 'zustand/shallow';
export default function GaleriMisora(){
    const{urls,setUrls} = GaleryZus(({urls,setUrls}) =>({urls,setUrls}),shallow);
    useEffect(() => {
        setUrls().catch(null);
    }, []);
    return (
        <div className="col-9">
            <div className="row justify-content-evenly">
                <Cuadro url={urls}/>
            </div>
        </div>
    )}; 