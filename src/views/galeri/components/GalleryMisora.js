import { useEffect } from 'react';
import Cuadro from './Cuadro';
import ExpandedImg from './ExpandedImg';
import GaleryZus from '../../../stores/galeryzus';
import shallow from 'zustand/shallow';

export default function GalleryMisora(){
    const{ urls, setUrls,imgExpanded } = GaleryZus(({ urls, setUrls,imgExpanded }) =>({ urls, setUrls,imgExpanded }), shallow);
    useEffect(() => {
        setUrls().catch(null);
    }, []);
    return (
        <div className='galery-misora'>
            { urls?.map((cuadro) => (<Cuadro key={cuadro._id} value={cuadro}/>)) }
            { imgExpanded && <ExpandedImg/> }
        </div>
    );
}