import GlobalClicker from "./Globalclick"
import MisoClick from '../../../stores/zustand.js';
import shallow from 'zustand/shallow';
import {useEffect} from 'react'
import chingada from '../../../Sound/a_la_chingada_dice_la_suegra.mp3'
import baka from '../../../Sound/baka.mp3'
import calzon from '../../../Sound/calzon_negro.mp3'
import {Howl,Howler} from 'howler'
const audioclips=[chingada,baka,calzon]
export default function BodyClicker(){
    const{localclick,click,clicks,setGlobalClick} = MisoClick(({localclick,click,clicks,setGlobalClick}) =>({localclick,click,clicks,setGlobalClick}),shallow);
    useEffect(() => {
        setGlobalClick().catch(null)
    },[])
    const soundPlay =(src)=>{
        const sound = new Howl({src})
        sound.play()
    }
    const play = ()=>{
        click();
        soundPlay(audioclips[Math.floor(Math.random()*audioclips.length)])
    }
    Howler.volume(1.0)
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
