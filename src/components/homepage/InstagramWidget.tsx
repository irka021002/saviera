import { useState,useEffect } from "react";
interface InstagramWidget{
    image: string;
    url: string;
}
interface InstagramWidgetProps{
    instaPic: Array<InstagramWidget>;
}
export default function InstagramWidget({instaPic}: InstagramWidgetProps){
    const [animate, setAnimate] = useState("opacity-0")
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {if(entry.isIntersecting) setAnimate("opacity-100")}));
    useEffect(() => {
        const wrapper = document.getElementById("instagramWidget")
        if(wrapper) observer.observe(wrapper)
        return () => {
            if(wrapper) observer.unobserve(wrapper)
        }
    },[])
    return(
        <div id="instagramWidget" className="pt-20 pb-[160px] bg-primary-2">
            <div className={`${animate} justify-center grid grid-cols-6 gap-[16px] px-6 md:px-0 md:grid-cols-[repeat(12,minmax(0,78px))] md:gap-[24px]`}>
                <div className="col-span-6 md:col-span-12 grid-cols-3 hidden md:grid md:grid-cols-4 gap-[3px]">
                    {
                        instaPic.length > 0 && instaPic.slice(0,8).map((v,i) => {
                            return(
                                <a key={i} href={v.url}><div className="aspect-square" style={{backgroundImage: `url(${v.image})`}}></div></a>
                            )   
                        })
                    }
                </div>
                <div className="col-span-6 md:col-span-12 grid-cols-3 grid md:hidden md:grid-cols-4 gap-[3px]">
                    {
                        instaPic.length > 0 && instaPic.slice(0,6).map((v,i) => {
                            return(
                                <a key={i} href={v.url}><div className="aspect-square" style={{backgroundImage: `url(${v.image})`}}></div></a>
                            )   
                        })
                    }
                </div>
            </div>
        </div>
    )
}