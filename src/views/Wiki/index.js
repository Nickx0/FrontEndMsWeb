import Navbar from "../components/Navbar";
import Comentario from './components/Comentario'
import Information from './components/Information';
import RedesMisora from '../components/RedesMisora';
import Footer from '../components/Footer';

export default function Wiki(){
    return (
        <>
            <Navbar />
            <Information />
            <RedesMisora />
            <Comentario />
            <Footer />
        </>
    );
}