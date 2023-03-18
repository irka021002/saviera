import { useState, useEffect } from 'react';
interface CTA{
    title: string;
    description: string;
    background: string;
}
interface CTAProps{
    cta: CTA;
}
export default function PromoCTA({cta}:CTAProps){
    const [animate,setAnimate] = useState("-translate-x-full opacity-0")
    const observerMobile = new IntersectionObserver(entries => entries.forEach(entry => {if(entry.isIntersecting) setAnimate("translate-x-0 opacity-100")}))
    const observerDesktop = new IntersectionObserver(entries => entries.forEach(entry => {if(entry.isIntersecting) setAnimate("translate-x-0 opacity-100")}))
    useEffect(() => {
        const elementMobile = document.getElementById("ctaMobile")
        const elementDesktop = document.getElementById("ctaDesktop")
        if(elementMobile) observerMobile.observe(elementMobile)
        if(elementDesktop) observerDesktop.observe(elementDesktop)
        return () => {
            if(elementMobile) observerMobile.unobserve(elementMobile)
            if(elementDesktop) observerDesktop.unobserve(elementDesktop)
        }
    },[])
    return(
        <div className="bg-clip-border bg-no-repeat bg-contain aspect-[360/323] md:aspect-auto flex md:block justify-center items-center" style={{backgroundImage: `url(${cta.background})`}}>
            <div id="ctaMobile" className={`${animate} transition-all duration-700 md:hidden p-3 text-secondary-2 bg-[#f2f2f2] md:mt-[180px] md:mb-[190px] w-4/5 h-fit`}>
                <h2 className="text-2xl font-aboreto">{cta.title}</h2>
                <p className="mt-3 md:mt-10">{cta.description}</p>
            </div>
            <div id="ctaDesktop" className={`hidden ${animate} transition-all duration-700 ease-in-out justify-center md:grid grid-cols-6 gap-[16px] md:grid-cols-[repeat(12,minmax(0,78px))] md:gap-[24px]`}>
                <div className="col-span-5 p-[60px] text-secondary-2 bg-[#f2f2f2] md:mt-[180px] md:mb-[190px]">
                    <h2 className="text-2xl font-aboreto">{cta.title}</h2>
                    <p className="mt-10 font-trap">{cta.description}</p>
                </div>
            </div>
        </div>
    )
}