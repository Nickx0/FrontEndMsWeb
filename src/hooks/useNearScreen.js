import {useState,useEffect,useRef} from 'react'
const useNearScreen=()=>{
    const [show,setShow]=useState(false)
    const elementRef = useRef()
    useEffect(() => {
        const onChange=(entries,observer)=>{
            const el = entries[0]
            if(el.isIntersecting){
                setShow(true)
                observer.disconnect()
            }
        }
        const observer = new IntersectionObserver(onChange,{
            rootMargin:'-35%'
        })
        observer.observe(elementRef.current)
        return ()=>observer.disconnect;
    })
    return {show,elementRef};
}
export default useNearScreen;