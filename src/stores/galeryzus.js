import create from 'zustand'
import apiCall from '../hooks/apiCall'
import {API_URL} from '../urls'
const GaleryZus = create((set,get)=>({
    loading:false,
    error:false,
    urls:[],
    setUrls:async()=>{
        try {
            set({loading:true})
            set({error:false})
            const urlsF = await apiCall({url: `${API_URL}files`})
            set({urls:urlsF})
        } catch (error) {
            set({error:true})
            console.error(error);
        } finally {
            set({loading:false})
        }
    },
    imgExpanded:false,
    srcImg:'',
    setExpanded: (url)=>{
        set((state)=>({imgExpanded : !state.imgExpanded}))
        set({srcImg:url})
    },
}))
export default GaleryZus;