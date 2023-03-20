import Product1 from "../../assets/product/1.png"
import Product2 from "../../assets/product/2.png"
import Product3 from "../../assets/product/3.png"
import ArrowRight from "../../assets/icon/arrowRight.svg"
import { useState,useEffect } from "react"
export default function ProductGallery(){
    const [animate,setAnimate] = useState("translate-x-full opacity-0")
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {if(entry.isIntersecting) setAnimate("translate-x-0 opacity-100")}))
    useEffect(() => {
        const element = document.getElementById("savieraProduct")
        if (element) observer.observe(element)
        return ()=> {
            if(element) observer.unobserve(element)
        }
    },[])
    return(
        <div id="savieraProduct" className="snap-start">
            <div className="py-20">
                <div className={`justify-center ${animate} transition-all duration-1000 ease-in-out md:px-0 px-6 grid grid-cols-6 gap-[24px] md:grid-cols-[repeat(12,minmax(0,78px))] md:gap-[24px]`}>
                    <div className="col-span-6 md:col-span-4 flex flex-col">
                        <img className="w-full h-auto" src={Product1} alt="Produk 1" />
                        <a className="text-base font-montserrat hover:border-opacity-30 text-accent-2 text-center border border-accent-2 w-full py-4 flex justify-center" href="/01-omnia">MORE <img className="ml-2" src={ArrowRight} alt="Arrow Icon" /></a>
                    </div>
                    <div className="col-span-6 md:col-span-4 flex flex-col">
                        <img className="w-full h-auto" src={Product2} alt="Produk 2" />
                        <a className="text-base font-montserrat hover:border-opacity-30 text-accent-2 text-center border border-accent-2 w-full py-4 flex justify-center" href="/01-wei-yi">MORE <img className="ml-2" src={ArrowRight} alt="Arrow Icon" /></a>
                    </div>
                    <div className="col-span-6 md:col-span-4 flex flex-col">
                        <img className="w-full h-auto" src={Product3} alt="Produk 3" />
                        <a className="text-base font-montserrat hover:border-opacity-30 text-accent-2 text-center border border-accent-2 w-full py-4 flex justify-center" href="/01-cyanne">MORE <img className="ml-2" src={ArrowRight} alt="Arrow Icon" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}