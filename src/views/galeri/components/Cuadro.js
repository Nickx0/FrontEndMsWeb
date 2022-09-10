import ButtonAutor from './ButtonAutor';
import GaleryZus from '../../../stores/galeryzus';
import shallow from 'zustand/shallow';

function R18(){
    return(
        <div className="r18tag">R-18</div>
    )
}
export default function Cuadro({value}){
    const { setExpanded } = GaleryZus(({ setExpanded }) =>({ setExpanded }), shallow);
    const setView=()=>{
        setExpanded(value.src)
    }

    return(
        <div className='item-galery-misora'>
            {value.r18 && <R18/>}
            <img onClick={setView} className='img-cuadro-misora' src={`./thumbnail/${value.src}.webp`} alt='MisoraImage'/>
            <ButtonAutor redSocial={value.redSocial} autor={value.autor} />
        </div>
    )
};