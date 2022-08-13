import {Suspense,lazy} from 'react'
import useNearScreen from '../../../hooks/useNearScreen'
import Void from './Void'
const Memobody = lazy(() => import('./Memobody'));
export default function MemorableStreams(){
    const {show,elementRef} = useNearScreen();
    return(
        <div className="landing-containter memo-containter" ref={elementRef}>
            <Suspense fallback={<Void/>}>
                {show ? <Memobody/>:null}
            </Suspense>
        </div>
    )
}