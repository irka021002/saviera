import { useState, useEffect } from 'react';
interface StatusQuo{
    title: string;
    description: string;
    background: string;
}
interface StatusQuoProps{
    statusQuo: StatusQuo;
}
export default function StatusQuo({statusQuo}:StatusQuoProps){
    const [animate, setAnimate] = useState("translate-x-full opacity-0")
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const element = entry.target.querySelector('.animate')
            if(entry.isIntersecting){
                setAnimate("translate-x-0 opacity-100")
                return;
            }
        })
    })
    useEffect(() => {
        const element = document.querySelector(".element-wrapper")
        if(element) observer.observe(element)
        return () => {
            if(element) observer.unobserve(element)
        }
    },[])
    return(
        <div className="element-wrapper relative w-full h-fit bg-primary-2">
            <div className="relative w-full h-fit flex">
                <div className="w-full md:w-1/2 aspect-[10/11] aspect-10-11 md:aspect-[8/7] bg-no-repeat bg-cover" style={{backgroundImage: `url(${statusQuo.background})`}}>
                    <div className="bg-black w-full h-full opacity-60"></div>
                </div>
                <div className={`${animate} transition-all duration-700 ease-in-out animate absolute right-0 h-full left-0 md:content-center justify-center grid grid-cols-6 gap-[16px] md:grid-cols-[repeat(12,minmax(0,78px))] md:gap-[24px] px-6 md:px-0 pt-10 md:pt-0`}>
                    <div className="p-10 col-span-6 md:col-span-8 md:col-start-5 bg-white text-secondary-2">
                        <h2 className="font-aboreto text-center md:text-left text-[32px] md:text-[40px] ">{statusQuo.title}</h2>
                        <p className="mt-[52px] font-trap leading-[150%]" dangerouslySetInnerHTML={{__html: statusQuo.description}}></p>
                    </div>
                </div>
            </div>
        </div>
    )
}