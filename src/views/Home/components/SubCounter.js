import {Suspense,lazy} from 'react'
import useNearScreen from '../../../hooks/useNearScreen'
import Void from '../../components/Void'
const Subbody = lazy(() => import('./Subbody'));
export default function SubCounter(){
    const {show,elementRef} = useNearScreen();
    return(
        <div className="upsub" ref={elementRef}>
            <Suspense fallback={<Void/>}>
                {show ? <Subbody/>:null}
            </Suspense>
        </div>
    )
}