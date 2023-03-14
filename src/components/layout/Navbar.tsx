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
import Menu from "../../assets/icon/navbar/menu.svg"
import MenuWhite from "../../assets/icon/navbar/menuWhite.svg"
import { useEffect, useState } from "react"
import { redirect } from "react-router-dom";

function checkPath(path: string):Boolean{
    return window.location.href.includes(path)
}
export default function Navbar(){
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY >= 1){
                setChangeColor(false)
            }else{
                setChangeColor(true)
            }
        })
        setAnimateMenu("translate-y-0 opacity-100")
        const element = document.getElementById(window.location.href.split("#")[1])
        if(element){
            element.scrollIntoView({behavior: "smooth"})
        }
    }, [])
    const [changeColor, setChangeColor] = useState(true)
    const [animateMenu, setAnimateMenu] = useState("-translate-y-20 opacity-0")
    const handleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
        const MOBILEMENU = document.getElementById("mobileMenu")
        if(MOBILEMENU != null){
            if(MOBILEMENU.style.height == "0px"){
                MOBILEMENU.style.height = "100vh"
                MOBILEMENU.style.paddingTop = "40px"
             }else{
                MOBILEMENU.style.height = "0"
                MOBILEMENU.style.paddingTop = "0px"
             }
        }
    };
    const handleSearch = (e:React.SyntheticEvent<HTMLAnchorElement>) => {
        const sb = document.getElementById("searchBox")
        const ov = document.getElementById("overlaySearch")
        if(sb && ov){
            if(sb.style.display == "flex"){
                sb.style.display = "none"
                ov.style.display = "none"
                return;
            }
            sb.style.display = "flex"
            ov.style.display = "block"
        }
    }
    const handleOverlay = (e:React.SyntheticEvent<HTMLDivElement>) => {
        const sb = document.getElementById("searchBox")
        const ov = document.getElementById("overlaySearch")
        if(sb && ov){
            if(sb.style.display == "flex"){
                sb.style.display = "none"
                ov.style.display = "none"
                return;
            }
            sb.style.display = "flex"
            ov.style.display = "block"
        }
    }
    return(
        <nav className="z-[9999] sticky top-0 max-w-[1440px] m-auto">
            <div className={`justify-center grid grid-cols-6 gap-[16px] px-6 md:px-0 md:grid-cols-[repeat(12,minmax(0,78px))] md:gap-[24px] items-center h-[80px] md:h-[100px] ${changeColor && !checkPath("/01-archetypes") && !checkPath("/01-") && !checkPath("/savdashboard") ? "bg-transparent" : "md:bg-primary-1 bg-[#c8c8c8]"}`}>
                <div className={`col-span-4 hidden md:flex justify-between transition-all duration-500 ease-in-out ${animateMenu} ${changeColor && !checkPath("/01-archetypes") && !checkPath("/sav-to-wear-01") && !checkPath("/01-") && !checkPath("/savdashboard") ? "text-primary-2" : "text-secondary-2"} font-montserrat text-base`}>
                    <a href="/01-archetypes">VOL 01. ARCHETYPES</a>
                    <a href="/#savieraProduct">SHOP</a>
                    <a href="/about-us">ABOUT US</a>
                </div>
                <div className="col-span-1 hidden md:block"></div>
                <div className={`col-span-1 md:col-span-2 transition-all duration-500 ease-in-out ${animateMenu}`}>
                    <a href="/">
                        <img src={changeColor && !checkPath("/01-archetypes") && !checkPath("/sav-to-wear-01") && !checkPath("/01-") && !checkPath("/savdashboard") ? SavieraWhite : Saviera} className="m-auto" alt="Store Logo" />
                    </a>
                </div>
                <div className="col-span-1 hidden md:block"></div>
                <div className={`col-span-4 hidden md:flex transition-all duration-500 ease-in-out ${animateMenu}`}>
                    <a href=""><img width={32} className="mr-8" src={changeColor && !checkPath("/01-archetypes") && !checkPath("/sav-to-wear-01") && !checkPath("/01-") && !checkPath("/savdashboard") ? WhatsappWhite : Whatsapp} alt="Whatsapp Logo" /></a>
                    <a href=""><img width={32} className="mr-8" src={changeColor && !checkPath("/01-archetypes") && !checkPath("/sav-to-wear-01") && !checkPath("/01-") && !checkPath("/savdashboard") ? InstagramWhite : Instagram} alt="Instagram Logo" /></a>
                    <a href="https://www.facebook.com/saviera.co"><img width={32} className="mr-8" src={changeColor && !checkPath("/01-archetypes") && !checkPath("/sav-to-wear-01") && !checkPath("/01-") && !checkPath("/savdashboard") ? FacebookWhite : Facebook} alt="Facebook Logo" /></a>
                    <a href=""><img width={32} className="mr-8" src={changeColor && !checkPath("/01-archetypes") && !checkPath("/sav-to-wear-01") && !checkPath("/01-") && !checkPath("/savdashboard") ? BrowserWhite : Browser} alt="Browser Logo" /></a>
                    <span className={`h-[32px] border ${changeColor && !checkPath("/01-archetypes") && !checkPath("/sav-to-wear-01") && !checkPath("/01-") && !checkPath("/savdashboard") ? "border-primary-1" : "border-secondary-2"}`} />
                    <a role="button" onClick={handleSearch}><img width={32} className="ml-8" src={changeColor && !checkPath("/01-archetypes") && !checkPath("/sav-to-wear-01") && !checkPath("/01-") && !checkPath("/savdashboard") ? SearchWhite : Search} alt="Search Logo" /></a>
                </div>
                <span className="col-span-4 md:hidden"></span>
                <div className="col-span-1 md:hidden">
                    <button onClick={handleMenu}>
                        <img src={changeColor && !checkPath("/01-archetypes") && !checkPath("/sav-to-wear-01") && !checkPath("/01-") && !checkPath("/savdashboard") ? MenuWhite : Menu} className="m-auto" alt="Menu Icon" />
                    </button>
                </div>
            </div>
            <div id="mobileMenu" className="absolute bg-primary-1 top-0 left-0 right-0 bottom-0 md:hidden px-6 transition-all duration-500 overflow-y-hidden" style={{height: 0}}>
                <div className="p-[10px] flex justify-end">
                    <button onClick={handleMenu}>
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.411743 0.411621L21.5882 21.5881" stroke="#800020" strokeWidth="0.661765"/>
                            <path d="M21.5882 0.411621L0.411732 21.5881" stroke="#800020" strokeWidth="0.661765"/>
                        </svg>
                    </button>
                </div>
                <div className="text-center flex flex-col">
                    <a href="/01-archetypes" className="text-secondary-2 font-montserrat">VOL 01. ARCHETYPES</a>
                    <a href="/#savieraProduct" className="text-secondary-2 font-montserrat mt-6">SHOP</a>
                    <a href="/about-us" className="text-secondary-2 font-montserrat mt-6">ABOUT US</a>
                </div>
                <div className="px-[60px] flex justify-between mt-[52px]">
                    <img width={24} src={Whatsapp} alt="Whatsapp Icon" />
                    <img width={24} src={Instagram} alt="Instagram Icon" />
                    <a href="https://www.facebook.com/saviera.co"><img width={24} src={Facebook} alt="Facebook Icon" /></a>
                    <img width={24} src={Browser} alt="Browser Icon" />
                </div>
                <div className="mt-[52px] relative">
                    <input className="bg-primary-1 border border-[rgba(58,58,58,0.3)] w-full p-4 font-montserrat font-medium rounded" type="text" placeholder="Search the item" />
                    <img className="absolute right-7 top-1 translate-x-2/4 translate-y-2/4" width={24} src={Search} alt="Search Icon" />
                </div>
            </div>
            <div id="searchBox" className="absolute flex-col bg-white p-8 right-20 top-20 z-40" style={{display: "none"}}>
                <label className="font-montserrat font-medium text-secondary-2" htmlFor="search">Search the item here</label>
                <input className="mt-1 font-montserrat text-[#828282] hover:border-accent-2 focus:border-accent-2 p-5 w-[400px] outline-none border rounded border-[rgba(58,58,58,0.3)]" placeholder="Type the keyword" id="search" type="text" />
            </div>
            <div id="overlaySearch" onClick={handleOverlay} className="fixed top-0 right-0 bottom-0 left-0" style={{display: "none"}}></div>
        </nav>
    )
}