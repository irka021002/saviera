import ProductGallery from "../../components/product/ProductGallery"
import ProductDetail from "../../components/product/ProductDetail"
import { useEffect, useState } from 'react';
import axios from "axios";
import useCookies from "react-cookie/cjs/useCookies";
interface Review{
    anonymous: Boolean;
    name: string;
    message: string;
    products: Array<string>;
    rates: any;
}
export default function Weiyi(){
    const [reviews, setReviews] = useState<Array<Review>>()
    const [cookies, setCookie] = useCookies(['access-token','refresh-token'])
    useEffect(() => {
        document.title = "Wei Yi | Vol 1. Archetypes - Saviera.co"
        if(cookies["access-token"]){
            axios.post(
                `${import.meta.env.VITE_MONGOPOINT}/action/find`,
                {
                    "dataSource": "Cluster0",
                    "database": "saviera",
                    "collection": "review",
                    "filter": {
                        "products": "Wei Yi"
                    },
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${cookies["access-token"]}`
                    }
                }
            )
                .then(v => {
                    if(v.status = 201){
                        setReviews(v.data.documents)
                    }
                })
            return;
        }
        if(cookies["refresh-token"] && !cookies["access-token"]){
            axios.post(
                "https://realm.mongodb.com/api/client/v2.0/auth/session",
                {},
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${cookies["refresh-token"]}`
                    }
                }
            )
                .then(v => {
                    setCookie("access-token", v.data.access_token, {maxAge: 25*60})
                    axios.post(
                        `${import.meta.env.VITE_MONGOPOINT}/action/find`,
                        {
                            "dataSource": "Cluster0",
                            "database": "saviera",
                            "collection": "review",
                            "filter": {
                                "products": "Wei Yi"
                            },
                        },
                        {
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": `Bearer ${v.data.access_token}`
                            }
                        }
                    )
                        .then(v => {
                            if(v.status = 201){
                                setReviews(v.data.documents)
                            }
                        })
                })
        }
    },[])
    let picData = [
        "/product/weiyi.png",
        "/product/weiyi.png",
        "/product/weiyi.png",
        "/product/weiyi.png",
        "/product/weiyi.png",
        "/product/weiyi.png",
        "/product/weiyi.png",
        "/product/weiyi.png",
    ]
    let prodInstruction = [
        "Lukewarm or cold water",
        "Do not bleach, do not tumble dry, do not dry clean",
        "Use mild detergent",
        "Separate from other colors",
        "Air dry in a padded hanger or lay flat on a drying rack",
        "Turn the garment inside out before ironing with a press cloth between the iron and fabric to prevent direct heat, damp a bit before ironing on the highest heat",
        "Store: Hang or roll",
    ]
    let sizeFit = [
        "All size, Loose-Fit",
        "Bust up to 114 cm (buttoned), free size if unbuttoned",
        "Length 60,5 cm",
        "Sleeve length 25,5 cm",
        "Sleeve width 38 cm",
    ]
    let sizeNotes = "Length may differ depending on your height. There might be a slight color difference due to screens and lightning"
    let madeClothesDesc = '<span class="font-bold">Meet Pak Darto!</span><br/>With 15 years of experience in cutting, making, and trimming numerous designs and contributing to hundreds of fashion brands, his tenaciousness proceeds with his speedy work ethic.<br/><br/>"I am focused when I do what I do. The design is good." Pak Darto commented. Pak Darto also stated that he thought this piece a general-to-use, giving formal could also be smart-casual.'
    let prodDetails = [
        "100% pure linen, woven ",
        "Fabric is soft, cool, flexible, structured ",
        "Double-breasted",
        "Button made of premium acrylic, two functional inside, and two outside",
    ]
    let prodTitle = "WEI YI"
    let prodDesc= "A relaxed, elegant, and fitting double-breasted blazer in asymmetrical cutting. Buttons inside, aiming for a sculptural look. <br/><br/>This piece comes in three color selections: Ecru, Fawn, and Taupe."
    let behindPiece = "From the silent dawn to the black nights, society has taught us to seek completion and accomplishments. Life is fulfilling by crossing out duties. To be wise, one must understand what one wants. Be it the energy poured, intention sets, and activities that get done.<br/><br/>Wei Yi, which translates to ‘the only one’ in Chinese, pointed to the 1% of those who needed a statement piece with a safe twist. Achieve a formal, modern look that is effortlessly professional. <br/><br/>Inspired by the achiever, intentional individuals who work the very best, day and night, for a better tomorrow. The one who always stands out because wherever she goes, she blooms.<br/><br/>Three warm color tones to choose from, making it an easy add-on to anyone’s wardrobe and style. We use locally made and sourced linen from Jakarta (with the trade name: Greece linen). Linen is one of the most well-known sustainable fibers. It gives a classy, elegant, and gorgeous look. The more it ages, the better the fabric becomes!"
    return(
        <>
            <div className="justify-center grid grid-cols-6 gap-[16px] md:grid-cols-[repeat(12,minmax(0,78px))] md:gap-[24px] px-6 md:px-0 mt-10">
                <ProductGallery pic={picData} />
                <ProductDetail madeClothesDesc={madeClothesDesc} madeClothesImg="" sizeNotes={sizeNotes} sizeFit={sizeFit} product="Wei Yi" reviews={reviews} behindPiece={behindPiece} prodDetails={prodDetails} prodInstruction={prodInstruction} prodTitle={prodTitle} prodDesc={prodDesc} redirectURL="https://wa.me/628175199968?text=Hi%20Saviera.co%20I%20would%20like%20to%20place%20an%20order%20for%20Wei%20Yi.%0ACan%20you%20assist%20me%3F" />
            </div>
        </>
    )
}