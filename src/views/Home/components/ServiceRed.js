import {Suspense,lazy} from 'react'
import useNearScreen from '../../../hooks/useNearScreen'
import Void from '../../components/Void'
const ServiceRedbody = lazy(() => import('./ServiceRedbody'));
export default function ServiceRed(){
    const {show,elementRef} = useNearScreen();
    return(
        <div className="landing-containter service-containter" ref={elementRef}>
            <Suspense fallback={<Void/>}>
                {show ? <ServiceRedbody/>:null}
            </Suspense>
        </div>
    )
}