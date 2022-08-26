import ButtonAutor from './ButtonAutor';
import GaleryZus from '../../../stores/galeryzus';
import shallow from 'zustand/shallow';

export default function Cuadro({value}){
    const { setExpanded } = GaleryZus(({ setExpanded }) =>({ setExpanded }), shallow);
    const setView=()=>{
        setExpanded(value.src)
    }
    return(
        <div className='item-galery-misora' id='galery-box'>
            <img onClick={setView} id='galery-item' className='img-cuadro-misora' src={`./thumbnail/${value.src}.webp`} alt='MisoraImage'/>
            <ButtonAutor redSocial={value.redSocial} autor={value.autor} />
        </div>
    )
};