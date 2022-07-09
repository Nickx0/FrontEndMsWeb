import create from 'zustand'
import apiCall from '../hooks/apiCall'
const GaleryZus = create((set,get)=>({
    urls:[],
    setUrls:async()=>{
        try {
            const urlsF = await apiCall({url: 'http://localhost:4000/api/v1/files'})
            set({urls:urlsF})
        } catch (error) {
            console.error(error);
        }
    },
}))
export default GaleryZus;