import ProductGallery from "../../components/product/ProductGallery"
import ProductDetail from '../../components/product/ProductDetail';
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
export default function Omnia(){
    const [reviews, setReviews] = useState<Array<Review>>()
    const [cookies, setCookie] = useCookies(['access-token','refresh-token'])
    useEffect(() => {
        document.title = "Omnia | Vol 1. Archetypes - Saviera.co"
        if(cookies["access-token"]){
            axios.post(
                `${import.meta.env.VITE_MONGOPOINT}/action/find`,
                {
                    "dataSource": "Cluster0",
                    "database": "saviera",
                    "collection": "review",
                    "filter": {
                        "products": "Omnia"
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
                                "products": "Omnia"
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
        "/product/omnia.png",
        "/product/omnia.png",
        "/product/omnia.png",
        "/product/omnia.png",
        "/product/omnia.png",
        "/product/omnia.png",
        "/product/omnia.png",
        "/product/omnia.png",
    ]
    let prodInstruction = [
        "Cold Hand Wash",
        "Do not bleach, do not soak, do not use rinse agent, do not tumble dry, and do not dry clean",
        "Use mild detergent",
        "Separate from other colors",
        "Turn the clothing inside out during washing",
        "Air dry, lay flat on a drying rack",
        "Turn the garment inside out before ironing with a press cloth between the iron and fabric to prevent direct heat, use a medium-hot iron",
        "Store: Fold in cool, dry, and dark spaces",
    ]
    let prodDetails = [
        "100% pure cotton (repurposed from deadstock fabrics)",
        "Textured (subtle checkered pattern)",
        "Fabric is cool, soft, and flowy ",
        "Sheer, see-through",
        "No zip, rubber under bust ",
        "Two functional side pockets",
    ]
    let sizeFit = [
        "All size, Standard Fit",
        "Midi length 101 cm",
        "Bust up to 115 cm",
        "Hollow to V-neck cut 23 cm",
        "Under bust rubber can stretch up to 120 cm",
        "Sleeve length 33 cm",
        "Sleeve width up to 60 cm (asymmetrical cut that allows breathable and flexible movement+size)",
    ]
    let madeClothesDesc = '<span class="font-bold">Meet Pak Taswan!</span><br/>Almost seven years. Producing numerous designs and contributing to hundreds of fashion brands, Pak Taswan craftsmanship is no doubt delicate and sincere. <br/><br/>"The fabric was easy to work with when I made the clothes. I was focused we\'re given the sampling model. I matched the cutting, the sample, and made it happen." Pak Taswan explained.<br/><br/>Pak Taswan also stated that he imagined the person wearing this piece as <span class="font-bold">"A calm but also a bold person"</span> given the sheer fabric. At last, he shared that he\'s happy when someone owns the piece that he produced. He is proud when people like it and wear it often.'
    let sizeNotes = "Length may differs depending on your body shape and height as this item is bias cut. Color may differ due to different screens and lightning"
    let prodTitle = "OMNIA"
    let prodDesc= "A loungewear, casual outer, or a sexy summer dress with plunge deep V-neck with above-the-waist concealed elastic to give shape."
    let behindPiece = "In life, we take pleasure and appear serious. Some say the two must have it balanced. Some dare to see it as integration. <br/><br/>Omnia, which translates to \"all\" or \"everything\" in Italian is a fitting name. When we design, formulate and produce this piece, we think of a dynamic, jack-of-all-trades figure. <br/><br/>Society and culture formed an archetype that is simply outdated - that certain occupations, raising children, or doing chores is a gender role. <br/><br/>This piece stands between significant importance: to feel comfortable.<br/><br/>Be it when you want to appear serious in social settings or cozy loungewear. <br/>Only available in white. A simple yet adaptable color. <br/><br/>We found a beautiful deadstock fabric that is too shameful to waste. We acknowledge that it is hard to trace where or how the raw materials are produced. However, as one of our ways to exercise our sentiments (the People, Planet, and Fashion Industry), we are using deadstock fabric to reduce textile waste, which is one of the options for our eco-conscious effort. "
    return(
        <>
            <div className="justify-center grid grid-cols-6 gap-[16px] md:grid-cols-[repeat(12,minmax(0,78px))] md:gap-[24px] px-6 md:px-0 mt-10">
                <ProductGallery pic={picData} />
                <ProductDetail madeClothesImg="" madeClothesDesc={madeClothesDesc} sizeFit={sizeFit} sizeNotes={sizeNotes} product="Omnia" reviews={reviews} behindPiece={behindPiece} prodDetails={prodDetails} prodInstruction={prodInstruction} prodTitle={prodTitle} prodDesc={prodDesc} redirectURL="https://wa.me/628175199968?text=Hi%20Saviera.co%20I%20would%20like%20to%20place%20an%20order%20for%20Omnia.%0ACan%20you%20assist%20me%3F" />
            </div>
        </>
    )
}