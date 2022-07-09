import shallow from 'zustand/shallow';
import './styles.css';
import MisoClick from '../../stores/zustand.js';
import BodyClicker from './component/BodyClicker';
import {useEffect} from 'react'
import WelToClciker from './component/WelToClciker';
export default function MisoClicker(){
    const{setGlobalClick} = MisoClick(({setGlobalClick}) =>({setGlobalClick}),shallow);
    useEffect(() => {
        setGlobalClick().catch(null);
    },[])    
    return(
        <div className="MisoClicker">
            <BodyClicker />
            <WelToClciker />
        </div>
    )
}