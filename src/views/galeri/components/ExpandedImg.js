import GaleryZus from '../../../stores/galeryzus';
import shallow from 'zustand/shallow';
export default function ExpandedImg(){
    const{ srcImg , setExpanded } = GaleryZus(({ srcImg , setExpanded }) =>({ srcImg , setExpanded }), shallow);
    return (
        <div className='expanded-gallery' onClick={setExpanded}>
            <img className='expanded-gallery-img' src={`./imgs/${srcImg}.jpg`} alt="no se ha cargado la imagen" />
        </div>
    );
}