import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Credit from "./components/Credit"
import SubCounter from "./components/SubCounter"
import Welcome from "./components/Welcome"
import ServiceRed from "./components/ServiceRed"
import MemorableStreams from "./components/MemorableStreams"
import Firstreams from "./components/Firstreams"
import Motivation from "./components/Motivation"
import Disclaimer from "./components/Disclaimer"
import Thanksforvisit from "./components/Thanksforvisit"
import Meta from '../components/Meta'
export default function Home(){
    return(
        <>
            <Meta description=" Pagina Web Dedicada a Hina Misora como regalo" title="Home"/>
            <Navbar />
            <div className="landing-background">
                <img src="./utilities/misolanding.webp" alt="misora"/>
            </div>
            <Welcome/>
            <ServiceRed />
            <MemorableStreams />
            <Firstreams />
            <SubCounter/>
            <Motivation/>
            <Disclaimer/>
            <Thanksforvisit/>
            <Credit/>
            <Footer />
        </>
    )
}