import ProductGallery from "../../components/product/ProductGallery"
import ProductDetail from "../../components/product/ProductDetail"
import { useEffect } from 'react';
export default function Omnia(){
    useEffect(() => {
        document.title = "Omnia | Vol 1. Archetypes - Saviera.co"
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
    let prodTitle = "OMNIA"
    let prodDesc= "A loungewear, casual outer, or a sexy summer dress with plunge deep V-neck with above-the-waist concealed elastic to give shape."
    return(
        <>
            <div className="justify-center grid grid-cols-6 gap-[16px] md:grid-cols-[repeat(12,minmax(0,78px))] md:gap-[24px] px-6 md:px-0 mt-10">
                <ProductGallery pic={picData} />
                <ProductDetail prodTitle={prodTitle} prodDesc={prodDesc} />
            </div>
        </>
    )
}