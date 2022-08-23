import {Suspense,lazy} from 'react'
import useNearScreen from '../../../hooks/useNearScreen'
import Void from '../../components/Void'
const Firstreamsbody = lazy(() => import('./Firstreamsbody'));
export default function Firstreams(){
    const {show,elementRef} = useNearScreen();
    return(
        <div className="landing-containter firstream-containter" ref={elementRef}>
            <Suspense fallback={<Void/>}>
                {show ? <Firstreamsbody/>:null}
            </Suspense>
        </div>
    )
}