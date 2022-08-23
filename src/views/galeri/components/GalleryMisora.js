import { useEffect } from 'react';
import Cuadro from './Cuadro';
import ExpandedImg from './ExpandedImg';
import GaleryZus from '../../../stores/galeryzus';
import shallow from 'zustand/shallow';
import Void from '../../components/Void'

export default function GalleryMisora(){
    const{ loading,error,urls, setUrls,imgExpanded } = GaleryZus(({ loading,error,urls, setUrls,imgExpanded }) =>({ loading,error,urls, setUrls,imgExpanded }), shallow);
    useEffect(() => {
        setUrls().catch(null);
    }, []);
    if(loading) return (<Void/>);
    if(error) return (<div>OCURRIO UN ERROR, VUELVA A CARGAR O ESPERE</div>)
    return (
        <div className='galery-misora'>
            { urls?.map((cuadro) => (<Cuadro key={cuadro._id} value={cuadro}/>)) }
            { imgExpanded && <ExpandedImg/> }
        </div>
    );
}