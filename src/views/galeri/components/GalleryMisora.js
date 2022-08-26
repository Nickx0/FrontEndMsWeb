import { useEffect ,useState} from 'react';
import Cuadro from './Cuadro';
import ExpandedImg from './ExpandedImg';
import GaleryZus from '../../../stores/galeryzus';
import shallow from 'zustand/shallow';
import Void from '../../components/Void'

export default function GalleryMisora(){
    const{ loading,error,urls, setUrls,imgExpanded } = GaleryZus(({ loading,error,urls, setUrls,imgExpanded }) =>({ loading,error,urls, setUrls,imgExpanded }), shallow);
    const [isChecked, setIsChecked] = useState(false);
    let urlrfilter = urls;
    useEffect(() => {
        setUrls().catch(null);
    }, []);
    const handleChecked=()=>{
        if(!isChecked){
            if(window.confirm("Quieres ver los R18?")){
                setIsChecked(!isChecked);
            }
            return;
        }
        setIsChecked(!isChecked);
    }
    console.log(isChecked)
    
    if(loading) return (<Void/>);
    if(error) return (<div>OCURRIO UN ERROR, VUELVA A CARGAR O ESPERE</div>)
    if(!isChecked) urlrfilter = urls.filter(data => data.r18===false);
    return (
        <>
        <div className="gallery-options">
            <h1 className="title-galerry">Galeria de FanArts</h1>
            <div>
                <p>R18:{isChecked?"ON":"OFF"} </p>
                <div>
                <label className="switch">
                <input type="checkbox" checked={isChecked} onChange={handleChecked} />
                <span className="slider round"></span>
                </label>
                </div>
            </div>
            
        </div>
        <div className='galery-misora'>
            { urlrfilter?.map((cuadro) => (<Cuadro key={cuadro._id} value={cuadro}/>)) }
            { imgExpanded && <ExpandedImg/> }
        </div>
        </>
    );
}