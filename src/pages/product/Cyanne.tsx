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
export default function Cyanne(){
    const [reviews, setReviews] = useState<Array<Review>>()
    const [cookies, setCookie] = useCookies(['access-token','refresh-token'])
    useEffect(() => {
        document.title = "Cyanne | Vol 1. Archetypes - Saviera.co"
        if(cookies["access-token"]){
            axios.post(
                `${import.meta.env.VITE_MONGOPOINT}/action/find`,
                {
                    "dataSource": "Cluster0",
                    "database": "saviera",
                    "collection": "review",
                    "sort": {
                        "_id": -1
                    },
                    "filter": {
                        "products": "Cyanne"
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
                            "sort": {
                                "_id": -1
                            },
                            "filter": {
                                "products": "Cyanne"
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
                })

        }
    },[])
    let picData = [
        "/product/cyanne.png",
        "/product/cyanne.png",
        "/product/cyanne.png",
        "/product/cyanne.png",
        "/product/cyanne.png",
        "/product/cyanne.png",
        "/product/cyanne.png",
        "/product/cyanne.png",
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
        "100% Organic cotton ",
        "Textured look with a mix of crinkle, slub, and crepe ",
        "Fabric is soft, cool, and flowy",
        "Fixed belt, sewed on the back",
        "Two functional front pockets",
    ]
    let sizeFit = [
        "All sizes, Loose-Fit to Semi-Oversized ",
        "Length 77,5 cm ",
        "Bust 120 cm if the belt is tied, Free size if worn loose",
        "Sleeve length 65,5 cm ",
        "Sleeve width 44 cm, asymmetrical cut in hem with width 35 cm",
        "Belt length 90 cm",
    ]
    let sizeNotes = "Length may differ depending on your body shape and height as this item is bias cut"
    let madeClotheDesc = "<span class=\"font-bold\">Meet Pak Tata!</span><br/>Unfortunately, Pak Tata wasn't present due to personal reasons.<br/> We'll share a bit about Pak Tata and update you.  Stay tuned to our Instagram!"
    let prodTitle = "CYANNE"
    let prodDesc= "Wrap top that lasts beyond the season. Belt included (sewed in the back). Tailored details and material make this item a top-notch statement piece to wear. Tailored by artisans with a unique material look and feel, making this piece a top-notch statement piece to wear."
    let behindPiece = "Between calmness and passion, chaos and order, the yin to the yang. She placed herself in a juxtaposition. <br/><br/>An outsider looking inside.<br/>An insider looking outside. <br/><br/>Not to pursue a focal point but to adapt and harness a purpose. So it fuels passion. <br/>Cyanne embodies a modern gentlewoman inspired by a luxurious trench coat and the assimilation of kimono easiness. <br/><br/>Suits for the chic and significant go-getters, busy bees, and hustlers that crave an effortlessly posh yet classic look. Fabric is 100% organic cotton that is chemical-free, ethically produced, and significantly uses a lower energy consumption. Moreover, it is breathable, hypoallergenic, and easy to maintain. The fabric is the latest innovation to create a crinkle, slub, and crepe texture. Making it look expensive."
    return(
        <>
            <div className="justify-center grid grid-cols-6 gap-[16px] md:grid-cols-[repeat(12,minmax(0,78px))] md:gap-[24px] px-6 md:px-0 mt-10">
                <ProductGallery pic={picData} />
                <ProductDetail sizeFit={sizeFit} sizeNotes={sizeNotes} madeClothesDesc={madeClotheDesc} madeClothesImg="" product="Cyanne" reviews={reviews} behindPiece={behindPiece} prodDetails={prodDetails} prodInstruction={prodInstruction} prodTitle={prodTitle} prodDesc={prodDesc} redirectURL="https://wa.me/628175199968?text=Hi%20Saviera.co%20I%20would%20like%20to%20place%20an%20order%20for%20Cyanne.%0ACan%20you%20assist%20me%3F" />
            </div>
        </>
    )
}