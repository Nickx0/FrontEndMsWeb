import {Suspense,lazy} from 'react'
import useNearScreen from '../../../hooks/useNearScreen'
import Void from '../../components/Void'
const CreditBody = lazy(() => import('./Creditbody'));
export default function Credit(){
    const {show,elementRef} = useNearScreen();
    return(
        <div className="landing-containter credit-containter" ref={elementRef}>
            <Suspense fallback={<Void/>}>
                {show ? <CreditBody/>:null}
            </Suspense>
        </div>
    )
}