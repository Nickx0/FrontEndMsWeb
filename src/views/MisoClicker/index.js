import shallow from 'zustand/shallow';
import MisoClick from '../../stores/zustand.js';
import BodyClicker from './component/BodyClicker';
import Navbar from '../components/Navbar'
import {useEffect} from 'react'
import WelToClciker from './component/WelToClciker';
import Background from './component/background'
export default function MisoClicker(){
    const{setGlobalClick} = MisoClick(({setGlobalClick}) =>({setGlobalClick}),shallow);
    useEffect(() => {
        setGlobalClick().catch(null);
    },[])    
    return(
        <>
        <Navbar />
        <div className="MisoClicker">
            <BodyClicker />
            <WelToClciker />
            <Background />
        </div>
        </>
    )
}