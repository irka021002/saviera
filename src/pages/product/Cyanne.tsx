import ProductGallery from "../../components/product/ProductGallery"
import ProductDetail from "../../components/product/ProductDetail"
import { useEffect } from "react"
export default function Cyanne(){
    useEffect(() => {
        document.title = "Cyanne | Vol 1. Archetypes - Saviera.co"
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
                <ProductDetail prodTitle={prodTitle} prodDesc={prodDesc} />
            </div>
        </>
    )
}