import Footer from "../components/layout/Footer"
import Navbar from "../components/layout/Navbar"
import HomepageCTA from "../components/homepage/HomepageCTA"
import ProductGallery from '../components/homepage/ProductGallery';
import Benefit from '../components/homepage/Benefit';
import InstagramWidget from '../components/homepage/InstagramWidget';
import PromoCTA from '../components/homepage/PromoCTA';
import HeroBanner from '../components/homepage/HeroBanner';
export default function Homepage(){
    return(
        <>
            <Navbar />
            <HeroBanner />
            <HomepageCTA />
            <PromoCTA />
            <ProductGallery />
            <Benefit />
            <InstagramWidget />
            <Footer />
        </>
    )
}