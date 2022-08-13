import Navbar from '../components/Navbar';
import GalleryMisora from './components/GalleryMisora';
import Footer from '../components/Footer';
import Meta from '../components/Meta'

export default function PageGallery() {
  return (
    <>
      <Meta description="Galeria de imagenes de Hina Misora" title="Galeria"/>
      <Navbar />
      <GalleryMisora />
      <Footer />
    </>
  );
}