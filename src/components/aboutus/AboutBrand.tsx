export default function AboutBrand(){
    return(
        <div className="relative w-full md:aspect-[12/5] mt-[-80px] md:mt-[-100px] aspect-[36/41]">
            <img className="absolute w-full h-full" src="/image/homepage/promocta.png" alt="Promo CTA Illustration" />
            <div className="absolute bg-black w-full h-full opacity-60"></div>
            <div className="absolute w-full h-full md:mt-[-50px] tracking-[.2em] flex justify-center items-center">
                <h1 className="font-aboreto text-primary-2 text-[24px] md:text-[52px]">ABOUT THE BRAND</h1>
            </div>
        </div>
    )
}