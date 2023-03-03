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
    let prodTitle = "WEI YI"
    let prodDesc= "A relaxed, elegant, and fitting double-breasted blazer in asymmetrical cutting. Buttons inside, aiming for a sculptural look. <br/><br/>This piece comes in three color selections: Ecru, Fawn, and Taupe."
    return(
        <>
            <div className="justify-center grid grid-cols-6 gap-[16px] md:grid-cols-[repeat(12,minmax(0,78px))] md:gap-[24px] px-6 md:px-0 mt-10">
                <ProductGallery pic={picData} />
                <ProductDetail product="Wei Yi" reviews={reviews} prodTitle={prodTitle} prodDesc={prodDesc} />
            </div>
        </>
    )
}