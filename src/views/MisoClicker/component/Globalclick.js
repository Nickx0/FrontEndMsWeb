import MisoClick from '../../../stores/zustand';
import { useEffect } from 'react';
import shallow from 'zustand/shallow';

export default function GlobalClciker(){
    const{globalclick,setGlobalClick} = MisoClick(({globalclick,setGlobalClick}) =>({globalclick,setGlobalClick}),shallow);
    useEffect(() => {
        const interval = setInterval(() => setGlobalClick().catch(null), 5000);
        return () => {
            clearInterval(interval);
          };
    },[])
    return(
        <div className="GlobalClcikera">
            <h2>{globalclick} MisoClicks.</h2>
        </div>
    )
}