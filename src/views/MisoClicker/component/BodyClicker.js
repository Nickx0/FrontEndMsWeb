import GlobalClicker from "./Globalclick"
import MisoClick from '../../../stores/zustand.js';
import shallow from 'zustand/shallow';
import sounds from './sounds'
export default function BodyClicker(){
    const{localclick,click} = MisoClick(({localclick,click}) =>({localclick,click}),shallow);
    const play = () => {
        click();
        const audio = new Audio();
        audio.crossOrigin = 'anonymous';
        audio.src = `./sounds/${sounds[Math.floor(Math.random() * sounds.length)]}.ogg`;
        audio.play();
    };
    return(
        <div className='BodyClicker'>
            <img src="./utilities/MisoraIdol.webp" className="MisoraClicker" alt="Hina-Misora" onClick={play} />
            <GlobalClicker />
            <h3>{localclick} MisoClick hechos por ti.</h3>
            <span id='player'></span>
        </div>
    )
}
