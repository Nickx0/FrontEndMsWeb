import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Credit from "./components/Credit"
export default function Home(){
    return(
        <>
            <Navbar />
            <div className="landing-background">
            </div>
            <div></div>
            <div className="credit-containter">
                <Credit/>
            </div>
            <iframe height="80px" width="300px" frameBorder="0" src="https://livecounts.io/embed/youtube-live-subscriber-counter/UC6tSB9TnO0f01OBeo9UEJZA"></iframe>
            <Footer />
        </>
    )
}