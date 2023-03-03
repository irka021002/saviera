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
    let prodTitle = "CYANNE"
    let prodDesc= "Wrap top that lasts beyond the season. Belt included (sewed in the back). Tailored details and material make this item a top-notch statement piece to wear. Tailored by artisans with a unique material look and feel, making this piece a top-notch statement piece to wear."
    return(
        <>
            <div className="justify-center grid grid-cols-6 gap-[16px] md:grid-cols-[repeat(12,minmax(0,78px))] md:gap-[24px] px-6 md:px-0 mt-10">
                <ProductGallery pic={picData} />
                <ProductDetail product="Cyanne" reviews={reviews} prodTitle={prodTitle} prodDesc={prodDesc} />
            </div>
        </>
    )
}