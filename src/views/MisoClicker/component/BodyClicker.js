import GlobalClicker from "./Globalclick"
import MisoClick from '../../../stores/zustand.js';
import shallow from 'zustand/shallow';
export default function BodyClicker(){

    const{localclick,click,clicks} = MisoClick(({localclick,click,clicks}) =>({localclick,click,clicks}),shallow);
    return(
        <div className='BodyClicker'>
            <img src="https://misora.moe/MisoraIdol.webp" className="img-bienvenida" alt="Hina-Misora"/>
            <GlobalClicker />
            <h5>{clicks} Easter Egg Clicker</h5>
            <h2>{localclick} Your Clicks</h2>
            <button onClick={click}> MisoClick</button>
        </div>
    )
}

