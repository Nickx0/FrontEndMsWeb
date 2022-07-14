import MisoClick from "../../../stores/zustand";
import shallow from 'zustand/shallow';
export default function Background(){
    const{clicks} = MisoClick(({clicks}) =>({clicks}),shallow);
    return (
        <div className="background" style={{backgroundImage: 'url(./291603408_10160286976659138_3555135222927700322_n.jpg)',opacity: 0.005*clicks}}>

        </div>
    )
}