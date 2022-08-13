import Navbar from "../components/Navbar";
import Comentario from './components/Comentario'
import Information from './components/Information';
import RedesMisora from '../components/RedesMisora';
import Footer from '../components/Footer';
import Meta from '../components/Meta'

export default function Wiki(){
    return (
        <>
            <Meta description="Mini Wiki sobre Hina Misora" title="Wiki"/>
            <Navbar />
            <Information />
            <RedesMisora />
            <Comentario />
            <Footer />
        </>
    );
}