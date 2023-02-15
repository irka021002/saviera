import Footer from "../components/layout/Footer"
import Navbar from "../components/layout/Navbar"
import AboutBrand from "../components/aboutus/AboutBrand"
import SavieraAbout from '../components/aboutus/SavieraAbout';
import StatusQuo from "../components/aboutus/StatusQuo";
import OurSentiment from '../components/aboutus/OurSentiment';
export default function AboutUs(){
    return(
        <>
            <Navbar />
            <AboutBrand />
            <SavieraAbout />
            <StatusQuo />
            <OurSentiment />
            <Footer />
        </>
    )
}