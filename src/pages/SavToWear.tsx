import Footer from "../components/layout/Footer"
import Navbar from "../components/layout/Navbar"
import SavForm from "../components/savtowear/SavForm"
import HeroBanner from "../components/savtowear/HeroBanner"
export default function SavToWear(){
    return(
        <>
            <Navbar />
            <HeroBanner />
            <SavForm />
            <Footer />
        </>
    )
}