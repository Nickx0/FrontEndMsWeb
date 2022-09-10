import {useEffect,useState} from "react"
import apiCall from "../../../hooks/apiCall"
import { API_URL } from "../../../urls"
export default function Subbody(){
    const [subcounter,setsubcounter]=useState("200")
    useEffect(() => {
        const getsubcounter = async () =>{
            try {
                let counter = await apiCall({url: `${API_URL}subs`});
                counter = counter.slice(10,-15);
                setsubcounter(counter);
            } catch (error) {
                setsubcounter("200");
            }
        }
        getsubcounter();
    },[])
    return(
        <>
        <div className="sobre-sub"></div>
            <div className="landing-containter sub-containter">
                <h3 className="sub-title-h3 title">MISOPITAS LIVE COUNTER !!!</h3>
                <img src="./utilities/wale.webp" className="wale wale-1 right-wale-1" alt="Wale misopita"/>
                <img src="./utilities/wale.webp" className="wale wale-2 left-wale" alt="Wale misopita"/>
                <img src="./utilities/wale.webp" className="wale wale-3 right-wale-2" alt="Wale misopita"/>
                <span className="bg-counter-left counter-left-mini-1 left">
                </span>
                <span className="bg-counter-left left">
                    <h3 className="sub-h3">{subcounter},000</h3><img className="misopita-after" src="./utilities/Misopita_a.webp" alt="Misopita" style={{transform: "scaleX(-1)"}}/>
                </span>
                <span className="bg-counter-left counter-left-mini-2 left">
                </span>
            </div>
        </>
    )
}