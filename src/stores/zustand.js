import create from "zustand";
import apiCall from '../hooks/apiCall'
const MisoClick = create((set,get)=>({
    localclick: parseInt(localStorage.getItem('Global-Click')),
    clicks:0,
    click:async()=>{
        try {
            set((state)=>({clicks:state.clicks+1}))
            set((state)=>({localclick:state.localclick+1}))
            set((state)=>({globalclick:state.globalclick+1}))
            localStorage.setItem('Global-Click', get().localclick);
            await apiCall({url: 'http://localhost:4000/api/v1/clicks',method:'POST'})
        } catch (error) {
            console.error(error);
        }
    },
    setlocalclick:async()=>{
        set((state)=>({localclick:state.localclick+1}))
    },
    globalclick: 0,
    setGlobalClick:async()=>{
        try {
            const global = await apiCall({url: 'http://localhost:4000/api/v1/clicks'});
            set({globalclick:global[0].counter});
        } catch (error) {
            console.error(error);
        }
    }
}))
export default MisoClick;