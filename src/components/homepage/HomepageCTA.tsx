import ArrowRightRed from "../../assets/icon/arrowRightRed.svg"
import { useState, useEffect } from 'react';
export default function HomepageCTA(){
    const [animate, setAnimate] = useState("-translate-y-full opacity-0")
    useEffect(() => {
        setAnimate("translate-y-0 opacity-100")
    },[])
    return(
        <div className={`py-10 ${animate} transition-all ease-in-out duration-700`}>
            <div className="justify-center px-6 md:px-0 grid grid-cols-6 gap-[16px] md:grid-cols-[repeat(12,minmax(0,78px))] md:gap-[24px]">
                <div className="col-span-6 md:col-span-12 flex items-center flex-col text-secondary-2">
                    <h2 className="font-aboreto text-4xl text-center">
                        OPTIMUM COMFORT MEETS VERSATILITY
                    </h2>
                    <p className="text-justify max-w-[800px] mt-5 mb-8 font-trap">
                        SAVIERA is an eco-conscious fashion brand that provides size-inclusive, timeless and versatile fashion staples for anyone who cares about what they wear and how their clothes are made in an era of modern conscious consumption.
                    </p>
                    <a className="flex font-montserrat text-accent-1 font-medium mb-36" href="/about-us">MORE OF OUR STORY <img className="ml-2" src={ArrowRightRed} alt="Arrow Icon" /></a>
                </div>
            </div>
        </div>
    )
}