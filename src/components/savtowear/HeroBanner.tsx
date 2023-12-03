import { useState, useEffect } from 'react';
export default function HeroBanner(){
    const [animate, setAnimate] = useState("-translate-y-full opacity-0")
    useEffect(() => {
        setAnimate("translate-y-0 opacity-100")
    },[])
    return(
        <div className="relative aspect-[130/253] aspect-130-253 md:aspect-[720/281] md-aspect-720-281 mt-[-80px] md:mt-[-100px] text-center flex flex-col justify-center">
            <div className='absolute w-full h-full bg-[url(/image/savtowear/hero.png)] bg-cover md:bg-auto bg-no-repeat'></div>
            <div className={animate + " absolute px-6 md:px-0 transition-all duration-700 ease-in-out w-full h-full flex flex-col justify-center items-center"}>
                <h1 className="font-aboreto text-[40px] leading-[135%] text-secondary-2">
                    YAY!<br className="md:hidden" /> YOU HAVE MADE IT!
                </h1>
                <p className="font-trap text-2xl leading-[150%] mt-10 text-secondary-2">
                    You have intentionally chosen a small step toward your own <br/> conscious fashion staple movement
                    <br/>through our very first collection, <span className="font-bold">Archetypes.</span>
                </p>
            </div>
        </div>
    )
}