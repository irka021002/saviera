import { useState, useEffect } from 'react';
export default function SavieraAbout(){
    const [animate, setAnimate] = useState("-translate-y-full opacity-0")
    useEffect(() => {
        setAnimate("translate-y-0 opacity-100")
    }, [])
    return(
        <div className="bg-primary-1 justify-center grid grid-cols-6 gap-[16px] md:grid-cols-[repeat(12,minmax(0,78px))] md:gap-[24px] py-20 px-6 md:px-0">
            <div className={`${animate} transition-all duration-700 ease-in-out col-span-6 md:col-span-12 text-center text-2xl`}>
                <span><span className="font-bold">SAVIERA</span> aspires to be <span className="font-bold">a prominent eco-conscious slow fashion brand</span> with a mission to <span className="font-bold">reshape Indonesia’s fashion business towards more conscious and responsible where we can close sustainability gaps.</span> </span>
                <br />
                <br />
                <span>We visioned to be <span className="font-bold">a community</span> where anyone can find their fitting size, feel empowered and comfortable while transfiguring by their own means.</span>
            </div>
        </div>
    )
}