import { useState, useEffect } from 'react';
interface SavieraAboutProps{
    aboutSaviera: string;
}
export default function SavieraAbout({aboutSaviera}:SavieraAboutProps){
    const [animate, setAnimate] = useState("-translate-y-full opacity-0")
    useEffect(() => {
        setAnimate("translate-y-0 opacity-100")
    }, [])
    return(
        <div className="bg-primary-1 font-trap justify-center grid grid-cols-6 gap-[16px] md:grid-cols-[repeat(12,minmax(0,78px))] md:gap-[24px] py-20 px-6 md:px-0">
            <div className={`${animate} transition-all duration-700 ease-in-out col-span-6 md:col-span-12 text-center text-2xl`} dangerouslySetInnerHTML={{__html: aboutSaviera}}></div>
        </div>
    )
}