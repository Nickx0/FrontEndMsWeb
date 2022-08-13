import {Suspense,lazy} from 'react'
import useNearScreen from '../../../hooks/useNearScreen'
import Void from './Void'
const Motivationbody = lazy(() => import('./Motivationbody'));
export default function Motivation(){
    const {show,elementRef} = useNearScreen();
    return(
        <div className="landing-containter Moti-containter" ref={elementRef}>
            <Suspense fallback={<Void/>}>
                {show ? <Motivationbody/>:null}
            </Suspense>
        </div>
    )
}