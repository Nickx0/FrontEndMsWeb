import CuadroListItem from './CuadroListItem.js'
export default function Cuadro({url}){
    return (
        <>
            {url?.map((vl,i)=>(<CuadroListItem key={i} value={vl}/>))}
        </>
    )
}