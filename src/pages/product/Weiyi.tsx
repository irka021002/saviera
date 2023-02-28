import ProductGallery from "../../components/product/ProductGallery"
import ProductDetail from "../../components/product/ProductDetail"
import { useEffect } from "react"
export default function Weiyi(){
    useEffect(() => {
        document.title = "Wei Yi | Vol 1. Archetypes - Saviera.co"
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
                <ProductDetail prodTitle={prodTitle} prodDesc={prodDesc} />
            </div>
        </>
    )
}