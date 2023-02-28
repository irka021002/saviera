import AboutBrand from "../components/aboutus/AboutBrand"
import SavieraAbout from '../components/aboutus/SavieraAbout';
import StatusQuo from "../components/aboutus/StatusQuo";
import OurSentiment from '../components/aboutus/OurSentiment';
import Value from "../components/aboutus/Value";
import { useEffect } from "react";
export default function AboutUs(){
    useEffect(() => {
        document.title = "About Saviera.co"
    },[])
    return(
        <>
            <AboutBrand />
            <SavieraAbout />
            <StatusQuo />
            <OurSentiment />
            <Value />
        </>
    )
}