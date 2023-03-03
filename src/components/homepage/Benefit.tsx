import Money from "../../assets/icon/money.svg"
import Leaf from "../../assets/icon/leaf.svg"
import DNA from "../../assets/icon/dna.svg"
import { useState,useEffect } from "react"
export default function Benefit(){
    const [animate, setAnimate] = useState("max-h-0 py-0")
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {if(entry.isIntersecting) setAnimate("max-h-[2000px] py-[40px] md:py-[120px]")}));
    useEffect(() => {
        const wrapper = document.getElementById("benefitWrapper")
        if(wrapper) observer.observe(wrapper)
        return () => {
            if(wrapper) observer.unobserve(wrapper)
        }
    },[])
    return(
        <div id="benefitWrapper" className={`${animate} transition-all duration-1000 ease-in-out overflow-hidden bg-[url('/image/savtowear/hero.png')]`}>
            <div id="benefitCarousel" className="carousel px-6 slide block md:hidden" data-bs-ride="carousel">
                <div className="carousel-inner relative overflow-hidden">
                    <div className="carousel-item active float-left w-full text-center px-6 py-14 bg-white rounded">
                        <img className="m-auto" src={Money} alt="Money Icon" />
                        <h2 className="text-2xl font-montserrat mb-3 mt-6">Secure Transactions</h2>
                        <p className="break-words">Get a 1-on-1 order payment through WhatsApp.</p>
                    </div>
                    <div className="carousel-item float-left w-full  text-center px-6 py-11 bg-white rounded">
                        <img className="m-auto" src={Leaf} alt="leaf Icon" />
                        <h2 className="text-2xl font-montserrat mb-3 mt-6">Sustainable Packaging</h2>
                        <p className="break-words">Receive your order in a fully recycled and compostable bag. Learn how to reuse and recycle your packaging <span className="text-accent-1 underline">here</span>.</p>
                    </div>
                    <div className="carousel-item float-left w-full  text-center px-6 py-8 bg-white rounded">
                        <img className="m-auto" src={DNA} alt="DNA Icon" />
                        <h2 className="text-2xl font-montserrat mb-3 mt-6">Co-create is in Our DNA</h2>
                        <p className="break-words">Got any ideas for collaboration or inventions?<br />Email at <span className="underline">fairy@saviera.co</span><br/> withthe subject “Hot Stuff”</p>
                    </div>
                </div>
                <div className="carousel-indicators flex justify-center p-0 mb-4 black-indicators">
                    <button
                        type="button"
                        data-bs-target="#benefitCarousel"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#benefitCarousel"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#benefitCarousel"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                </div>
            </div>
            <div className="hidden justify-center md:grid grid-cols-6 px-6 gap-[16px] md:grid-cols-[repeat(12,minmax(0,78px))] md:gap-[24px]">
                <div className="col-span-6 md:col-span-4 text-center px-6 py-14 bg-white rounded">
                    <img className="m-auto" src={Money} alt="Money Icon" />
                    <h2 className="text-2xl font-montserrat mb-3 mt-6">Secure Transactions</h2>
                    <p>Get a 1-on-1 order payment through WhatsApp.</p>
                </div>
                <div className="col-span-6 md:col-span-4 text-center px-6 py-11 bg-white rounded">
                    <img className="m-auto" src={Leaf} alt="leaf Icon" />
                    <h2 className="text-2xl font-montserrat mb-3 mt-6">Sustainable Packaging</h2>
                    <p>Receive your order in a fully recycled and compostable bag. Learn how to reuse and recycle your packaging <span className="text-accent-1 underline">here</span>.</p>
                </div>
                <div className="col-span-6 md:col-span-4 text-center px-6 py-8 bg-white rounded">
                    <img className="m-auto" src={DNA} alt="DNA Icon" />
                    <h2 className="text-2xl font-montserrat mb-3 mt-6">Co-create is in Our DNA</h2>
                    <p>Got any ideas for collaboration or inventions?<br />Email at <span className="underline">fairy@saviera.co</span> withthe subject “Hot Stuff”</p>
                </div>
            </div>
        </div>
    )
}