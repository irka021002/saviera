import Facebook from "../../assets/icon/footer/facebook.svg"
import Pinterest from "../../assets/icon/footer/pinterest.svg"
import Instagram from "../../assets/icon/footer/instagram.svg"
import Email from "../../assets/icon/footer/email.svg"
import Whatsapp from "../../assets/icon/footer/whatsapp.svg"
import ArrowRight from "../../assets/icon/arrowRight.svg"
import UnderlineButton from "../button/UnderlineButton"
import Copyright from "./Copyright"
import ContactButton from "../button/ContactButton"
import WhatsappCircle from "../../assets/icon/footer/whatsappCircle.svg"
import { useState,useEffect } from "react"
export default function Footer(){
    const [animate, setAnimate] = useState("translate-y-full")
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {if(entry.isIntersecting) setAnimate("translate-y-0")}));
    useEffect(() => {
        const wrapper = document.getElementById("footer")
        if(wrapper) observer.observe(wrapper)
        return () => {
            if(wrapper) observer.unobserve(wrapper)
        }
    },[])
    return(
        <footer>
            <div id="footer" className="w-full m-auto justify-center grid grid-cols-6 px-6 md:px-0 gap-[16px] md:grid-cols-[repeat(12,minmax(0,78px))] md:gap-[24px] py-[80px] max-w-[1440px] bg-primary-2">
                <div className={`${animate} transition-all duration-1000 ease-in-out col-span-6 md:col-span-12 flex flex-col items-center md:justify-between md:items-center md:flex-row`}>
                    <div className="w-full md:w-[30%] md:h-full">
                        <div className="font-aboreto text-secondary-2 text-3xl text-center w-full mb-3">SAVIERA</div>
                        <p className="text-center font-trap">is an eco-conscious fashion brand that intentionally aims for a timeless, versatile, and original fashion staple.</p>
                        <p className="text-center mt-3 font-trap">Small batches.<br/>Limited Drops.<br/>Sourced and made locally</p>
                        <div className="mt-[21px] text-left flex flex-col items-center md:items-start">
                            <UnderlineButton href="/01-archetypes" text="Vol 01. Archetypes" src={ArrowRight} />
                            <UnderlineButton target="_blank" href="https://www.instagram.com/p/CqQB1f9PpVL/?igshid=YmMyMTA2M2Y=" text="Feedback & Reviews" src={ArrowRight} />
                            <UnderlineButton target="_blank" href="https://www.instagram.com/p/CqQASQpvdYZ/?igshid=YmMyMTA2M2Y=" text="FAQ" src={ArrowRight} />
                        </div>
                    </div>
                    <span className="border col-span-0 my-8 md:my-0 border-secondary-1 w-2/5 h-[1px] md:w-[1px] md:h-2/5"></span>
                    <div className="w-full md:w-[30%] md:h-full">
                        <div className="font-aboreto text-secondary-2 text-3xl text-center w-full mb-3">HERE FOR YOU</div>
                        <p className="text-center mb-3 font-trap">Order,<br/>Complaints,<br/>Inquiries, and<br/>Feedback:</p>
                        <a className="w-full hover:border-opacity-30 py-[13px] border mb-[35px] border-solid border-accent-2 rounded justify-center content-center text-accent-2 hidden md:flex" target="_blank" href="http://ig.me/m/saviera.co"><img height={20} className="mr-3" src={Whatsapp} alt="Whatsapp Logo" />Let us talk about it.</a>
                        <div className="w-full font-trap text-center text-base text-secondary-2 bg-cream-1 p-[10px]">
                            Our customer service is available <span className="font-bold">Monday</span> to <span className="font-bold">Friday</span> from <span className="font-bold">8 am</span> to <span className="font-bold">9 pm</span>. We do shipping on weekends.
                        </div>
                    </div>
                    <span className="border col-span-0 my-8 md:my-0 border-secondary-1 w-2/5 h-[1px] md:w-[1px] md:h-2/5"></span>
                    <div className="w-full md:w-[30%] md:h-full flex flex-col justify-start">
                        <div className="font-aboreto text-secondary-2 text-3xl text-center w-full mb-3">KEEP IN TOUCH</div>
                        <div className="flex justify-between md:hidden">
                            <a className="w-fit py-[13px] hover:border-opacity-30 border p-3 border-solid border-accent-2 rounded flex justify-center content-center text-accent-2" target="_blank" href="https://www.facebook.com/saviera.co">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="#016064" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </a>
                            <a className="w-fit py-[13px] hover:border-opacity-30 border p-3 border-solid border-accent-2 rounded flex justify-center content-center text-accent-2" href="https://co.pinterest.com/savieradotco/">
                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.91348 11.5788L9.92344 11.5812L9.9234 11.5813L9.92327 11.5819L9.92274 11.5841L9.92062 11.5931L9.91236 11.628L9.88084 11.7611L9.76696 12.2422L9.40916 13.7545C9.14075 14.8896 8.84984 16.1215 8.75976 16.5085C8.56057 17.3636 8.63824 18.5647 8.72588 19.3486L8.81168 20.1017C9.70771 19.3001 10.3233 18.1601 10.6242 16.9906L10.6242 16.9905C10.685 16.7592 10.8396 16.1701 10.979 15.6388L11.163 14.9371L11.221 14.7162L11.2369 14.6553L11.2411 14.6394L11.2422 14.6353L11.2425 14.6343L11.2425 14.634L11.2425 14.6339L11.2525 14.6365L11.2425 14.6339L11.2493 14.6082L11.2615 14.6318C11.421 14.9385 11.7368 15.2221 12.1378 15.429C12.5388 15.6358 13.0241 15.7656 13.5214 15.7656C16.5035 15.7656 18.6528 13.0261 18.6528 9.60682C18.6528 6.33631 15.9851 3.8911 12.5525 3.8911C10.4149 3.8911 8.78047 4.60842 7.68039 5.71518C6.58024 6.82202 6.01391 8.319 6.01391 9.87948C6.01391 10.6033 6.20705 11.4173 6.55453 12.122C6.90207 12.8268 7.40339 13.421 8.01888 13.707L8.01915 13.7071C8.11097 13.753 8.17924 13.7635 8.22913 13.7427C8.27865 13.7221 8.31399 13.6691 8.33565 13.5777C8.35534 13.4826 8.43849 13.1512 8.51459 12.8479C8.55196 12.699 8.58762 12.5568 8.61324 12.4527L8.61325 12.4527C8.62516 12.4051 8.62859 12.3592 8.61924 12.3136C8.6099 12.2681 8.58766 12.2221 8.54722 12.1746L8.54712 12.1744C8.13644 11.6758 7.80469 10.758 7.80469 9.9087C7.80469 7.71731 9.4643 5.59424 12.2896 5.59424C13.5092 5.59424 14.5465 6.00895 15.279 6.72189C16.0115 7.43485 16.4385 8.44546 16.4385 9.63603C16.4385 10.9791 16.0997 12.1169 15.5395 12.9194C14.9793 13.7219 14.1973 14.1891 13.312 14.1891C12.3324 14.1891 11.5962 13.3802 11.8365 12.3846C11.938 11.9611 12.0729 11.5254 12.204 11.1021C12.2553 10.9363 12.3061 10.7723 12.354 10.6118C12.5244 10.0408 12.6591 9.51261 12.6591 9.0907C12.6591 8.7126 12.5585 8.36698 12.3528 8.11609C12.1474 7.86548 11.8364 7.70841 11.4131 7.70841C10.4232 7.70841 9.63158 8.72829 9.63158 10.1083C9.63158 10.5454 9.70443 10.9121 9.77727 11.1694C9.81368 11.2981 9.85009 11.3994 9.87736 11.4685C9.891 11.503 9.90235 11.5295 9.91029 11.5474L9.91948 11.5675L9.92188 11.5726L9.92248 11.5739L9.92263 11.5742L9.92266 11.5742L9.92267 11.5742L9.91348 11.5788ZM9.91348 11.5788L9.9264 11.5818L9.92267 11.5742L9.91348 11.5788Z" fill="#016064" stroke="#016064" strokeWidth="0.0204904"/>
                                </svg>
                            </a>
                            <a className="w-fit py-[13px] hover:border-opacity-30 border p-3 border-solid border-accent-2 rounded flex justify-center content-center text-accent-2" href="https://www.instagram.com/saviera.co/">
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.6666 2H7.66663C4.9052 2 2.66663 4.23858 2.66663 7V17C2.66663 19.7614 4.9052 22 7.66663 22H17.6666C20.428 22 22.6666 19.7614 22.6666 17V7C22.6666 4.23858 20.428 2 17.6666 2Z" stroke="#016064" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M16.6663 11.3703C16.7897 12.2025 16.6476 13.0525 16.2601 13.7993C15.8726 14.5461 15.2595 15.1517 14.508 15.53C13.7564 15.9082 12.9048 16.0399 12.0741 15.9062C11.2435 15.7726 10.4761 15.3804 9.88117 14.7855C9.28625 14.1905 8.89407 13.4232 8.7604 12.5925C8.62674 11.7619 8.7584 10.9102 9.13666 10.1587C9.51492 9.40716 10.1205 8.79404 10.8673 8.40654C11.6141 8.01904 12.4641 7.87689 13.2963 8.0003C14.1453 8.12619 14.9312 8.52176 15.538 9.12861C16.1449 9.73545 16.5404 10.5214 16.6663 11.3703Z" stroke="#016064" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M18.1666 6.5H18.1766" stroke="#016064" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            </a>
                            <a className="w-fit py-[13px] hover:border-opacity-30 border p-3 border-solid border-accent-2 rounded flex justify-center content-center text-accent-2" target="_blank" href="mailto:fairy@saviera.co">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#016064" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M22 6L12 13L2 6" stroke="#016064" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </a>
                        </div>
                        <ContactButton target="_blank" src={Facebook} alt="Facebook Logo" text="Facebook" href="https://www.facebook.com/saviera.co" />
                        <ContactButton target="_blank" src={Pinterest} alt="Pinterest Logo" text="Pinterest" href="https://co.pinterest.com/savieradotco/" />
                        <ContactButton target="_blank" src={Instagram} alt="Instagram Logo" text="Instagram" href="https://www.instagram.com/saviera.co/" />
                        <ContactButton target="_blank" src={Email} alt="Email Logo" text="Email" href="mailto:saviera.starlist@gmail.com" />
                    </div>
                </div>
            </div>
            <Copyright />
            <div className="fixed right-6 bottom-6 md:right-10 md:bottom-5">
                <a target="_blank" href="https://wa.me/628175199968?text=Hi%20Saviera.co%0AI%20would%20like%20to%20ask%20about%20.....">
                    <img className="w-[44px] h-[44px] md:w-[80px] md:h-[80px]" src={WhatsappCircle} alt="Whatsapp Redirect" />
                </a>
            </div>
        </footer>
    )
}