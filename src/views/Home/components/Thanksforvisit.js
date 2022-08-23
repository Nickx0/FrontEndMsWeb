import {Suspense,lazy} from 'react'
import useNearScreen from '../../../hooks/useNearScreen'
import Void from '../../components/Void'
const Thanksbody = lazy(() => import('./Thanksbody'));
export default function Thanksforvisit(){
    const {show,elementRef} = useNearScreen();
    return(
        <div className="landing-containter ty-containter" ref={elementRef}>
            <Suspense fallback={<Void/>}>
                {show ? <Thanksbody/>:null}
            </Suspense>
        </div>
    )
}