import ButtonAutor from './ButtonAutor';
import GaleryZus from '../../../stores/galeryzus';
import shallow from 'zustand/shallow';

export default function Curado({value}){
    const { setExpanded } = GaleryZus(({ setExpanded }) =>({ setExpanded }), shallow);
    const setView=()=>{
        setExpanded(value.src)
    }
    return(
        <div className='item-galery-misora'>
            <img onClick={setView} className='img-cuadro-misora' src={`./imgs/${value.src}.jpg`} alt='MisoraImage'/>
            <ButtonAutor redSocial={value.redSocial} autor={value.autor} />
        </div>
    )
};