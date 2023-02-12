import Saviera from "../../assets/logo/saviera.svg"
import Browser from "../../assets/icon/navbar/browser.svg"
import Facebook from "../../assets/icon/navbar/facebook.svg"
import Instagram from "../../assets/icon/navbar/instagram.svg"
import Search from "../../assets/icon/navbar/search.svg"
import Whatsapp from "../../assets/icon/navbar/whatsapp.svg"
import SavieraWhite from "../../assets/logo/savieraWhite.svg"
import BrowserWhite from "../../assets/icon/navbar/browserWhite.svg"
import FacebookWhite from "../../assets/icon/navbar/facebookWhite.svg"
import InstagramWhite from "../../assets/icon/navbar/instagramWhite.svg"
import SearchWhite from "../../assets/icon/navbar/searchWhite.svg"
import WhatsappWhite from "../../assets/icon/navbar/whatsappWhite.svg"
import { useEffect, useState } from "react"
export default function Navbar(){
    const [changeColor, setChangeColor] = useState(true)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY >= 1){
                setChangeColor(false)
            }else{
                setChangeColor(true)
            }
        })
    }, [])
    return(
        <nav className="z-[9999] sticky top-0">
            <div className={`justify-center grid grid-cols-[repeat(4,minmax(0,78px))] md:grid-cols-[repeat(12,minmax(0,78px))] gap-[24px] items-center h-[100px] ${changeColor ? "bg-transparent" : "bg-primary-1"}`}>
                <div className={`col-span-4 flex justify-between ${changeColor ? "text-primary-2" : "text-secondary-2"} font-montserrat text-base`}>
                    <a href="/">VOL 01. ARCHETYPES</a>
                    <a href="/shop">SHOP</a>
                    <a href="/aboutus">ABOUT US</a>
                </div>
                <div className="col-span-1"></div>
                <div className="col-span-2">
                    <img src={changeColor ? SavieraWhite : Saviera} className="m-auto" alt="Store Logo" />
                </div>
                <div className="col-span-1"></div>
                <div className="col-span-4 flex">
                    <a href=""><img width={32} className="mr-8" src={changeColor ? WhatsappWhite : Whatsapp} alt="Whatsapp Logo" /></a>
                    <a href=""><img width={32} className="mr-8" src={changeColor ? InstagramWhite : Instagram} alt="Instagram Logo" /></a>
                    <a href=""><img width={32} className="mr-8" src={changeColor ? FacebookWhite : Facebook} alt="Facebook Logo" /></a>
                    <a href=""><img width={32} className="mr-8" src={changeColor ? BrowserWhite : Browser} alt="Browser Logo" /></a>
                    <span className={`h-[32px] border ${changeColor ? "border-primary-1" : "border-secondary-2"}`} />
                    <a href=""><img width={32} className="ml-8" src={changeColor ? SearchWhite : Search} alt="Search Logo" /></a>
                </div>
            </div>
        </nav>
    )
}