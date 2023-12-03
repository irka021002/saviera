import { useState, useEffect } from 'react';
interface AboutBrandProps{
    aboutHero: Array<string>;
}
export default function AboutBrand({aboutHero}:AboutBrandProps){
    const [animation, setAnimation] = useState("-translate-y-20 opacity-0")
    useEffect(() => {
        setAnimation("translate-y-0 opacity-100")
    },[])
    return(
        <div className="relative w-full md:aspect-[12/5] md-aspect-12-5 mt-[-80px] md:mt-[-100px] aspect-[36/41] aspect-36-41">
            <img className="absolute w-full md:aspect-[12/5] md-aspect-12-5 hidden md:inline object-contain" src={aboutHero[0] || "/image/homepage/promocta.png"} alt="Promo CTA Illustration" />
            <img className="absolute w-full aspect-[36/41] aspect-36-41 inline md:hidden object-contain" src={aboutHero[1] || "/image/homepage/promocta.png"} alt="Promo CTA Illustration" />
            <div className="absolute bg-black w-full h-full opacity-60"></div>
            <div className={`absolute w-full h-full md:mt-[-50px] tracking-[.2em] flex justify-center items-center transition-all duration-700 ease-in-out ${animation}`}>
                <h1 className="font-aboreto text-primary-2 text-[24px] md:text-[52px]">ABOUT THE BRAND</h1>
            </div>
        </div>
    )
}