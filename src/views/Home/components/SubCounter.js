
import {useEffect,useState} from "react"
import apiCall from "../../../hooks/apiCall"
import { API_URL } from "../../../urls"
export default function SubCounter(){
    const [subcounter,setsubcounter]=useState("0k")
    useEffect(() => {
        const getsubcounter = async () =>{
            let counter = await apiCall({url: `${API_URL}subs`});
            counter = counter.slice(10,-14);
            setsubcounter(counter)
        }
        getsubcounter();
    },[])
    return(
        <div className="landing-containter sub-containter">
            Aqui pondr algo xdd
            <img src="./utilities/wale.png" className="wale wale-1"></img>
            <img src="./utilities/wale.png" className="wale wale-2"></img>
            <img src="./utilities/wale.png" className="wale wale-3"></img>
            <span className="bg-counter-left">
                <h3>{subcounter}</h3>
            </span>
        </div>
    )
}