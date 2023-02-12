import Product1 from "../../assets/product/1.png"
import Product2 from "../../assets/product/2.png"
import Product3 from "../../assets/product/3.png"
import ArrowRight from "../../assets/icon/arrowRight.svg"
export default function ProductGallery(){
    return(
        <div className="py-20">
            <div className="justify-center grid grid-cols-[repeat(4,minmax(0,78px))] md:grid-cols-[repeat(12,minmax(0,78px))] gap-[24px]">
                <div className="col-span-4 flex flex-col">
                    <img className="w-full h-auto" src={Product1} alt="Produk 1" />
                    <a className="text-base font-montserrat text-accent-2 text-center border border-accent-2 w-full py-4 flex justify-center" href="">MORE <img className="ml-2" src={ArrowRight} alt="Arrow Icon" /></a>
                </div>
                <div className="col-span-4 flex flex-col">
                    <img className="w-full h-auto" src={Product2} alt="Produk 2" />
                    <a className="text-base font-montserrat text-accent-2 text-center border border-accent-2 w-full py-4 flex justify-center" href="">MORE <img className="ml-2" src={ArrowRight} alt="Arrow Icon" /></a>
                </div>
                <div className="col-span-4 flex flex-col">
                    <img className="w-full h-auto" src={Product3} alt="Produk 3" />
                    <a className="text-base font-montserrat text-accent-2 text-center border border-accent-2 w-full py-4 flex justify-center" href="">MORE <img className="ml-2" src={ArrowRight} alt="Arrow Icon" /></a>
                </div>
            </div>
        </div>
    )
}