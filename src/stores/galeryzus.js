import create from 'zustand'
import apiCall from '../hooks/apiCall'
import {API_URL} from '../urls'
const GaleryZus = create((set,get)=>({
    urls:[],
    setUrls:async()=>{
        try {
            const urlsF = await apiCall({url: `${API_URL}files`})
            set({urls:urlsF})
        } catch (error) {
            console.error(error);
        }
    },
}))
export default GaleryZus;