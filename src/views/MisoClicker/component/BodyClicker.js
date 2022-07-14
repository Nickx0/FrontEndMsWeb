import GlobalClicker from "./Globalclick"
import MisoClick from '../../../stores/zustand.js';
import shallow from 'zustand/shallow';
import sounds from './sounds'
export default function BodyClicker(){
    const{localclick,click,clicks} = MisoClick(({localclick,click,clicks}) =>({localclick,click,clicks}),shallow);
    const play = () => {
        click();
        const audio = new Audio();
        audio.crossOrigin = 'anonymous';
        audio.src = `./sounds/${sounds[Math.floor(Math.random() * sounds.length)]}.ogg`;
        audio.play();
    };
    return(
        <div className='BodyClicker'>
            <img src="https://misora.moe/MisoraIdol.webp" className="img-bienvenida" alt="Hina-Misora"/>
            <GlobalClicker />
            <h5>{clicks} Easter Egg Clicker</h5>
            <h2>{localclick} Your Clicks</h2>
            <button onClick={play}> MisoClick</button>
            <span id='player'></span>
        </div>
    )
}
