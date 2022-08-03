import MisoClick from "../../../stores/zustand";
import shallow from 'zustand/shallow';
export default function Background(){
    const{clicks} = MisoClick(({clicks}) =>({clicks}),shallow);
    return (
        <div className="background" style={{backgroundImage: 'url(./utilities/backgroundClicker.jpg)',opacity: 0.005*clicks}}>

        </div>
    )
}