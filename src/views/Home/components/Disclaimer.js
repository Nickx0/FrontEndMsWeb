import {Suspense,lazy} from 'react'
import useNearScreen from '../../../hooks/useNearScreen'
import Void from './Void'
const Disclaimerbody = lazy(() => import('./Disclaimerbody'));
export default function Disclaimer(){
    const {show,elementRef} = useNearScreen();
    return(
        <div className="landing-containter Disclaimer-containter" ref={elementRef}>
             <Suspense fallback={<Void/>}>
                {show ? <Disclaimerbody/>:null}
            </Suspense>
        </div>
    )
}