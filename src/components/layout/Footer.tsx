import Copyright from "./Copyright"
import Facebook from "../../assets/icon/facebook.svg"
import Pinterest from "../../assets/icon/pinterest.svg"
import Instagram from "../../assets/icon/instagram.svg"
import Email from "../../assets/icon/email.svg"
import Whatsapp from "../../assets/icon/whatsapp.svg"
import ArrowRight from "../../assets/icon/arrowRight.svg"
export default function Footer(){
    return(
        <footer>
            <div className="w-full justify-center grid grid-cols-[repeat(4,minmax(0,78px))] md:grid-cols-[repeat(12,minmax(0,78px))] gap-[24px] py-[80px]">
                <div className="col-span-4">
                    <div className="font-aboreto text-secondary-2 text-3xl text-center w-full mb-3">SAVIERA</div>
                    <p className="text-center">is an eco-conscious fashion brand that intentionally aims for a timeless, versatile, and original fashion staple.</p>
                    <p className="text-center mt-3">Small batches.<br/>Limited Drops.<br/>Sourced and made locally</p>
                    <div className="mt-[21px] text-left flex flex-col items-center md:items-start">
                        <a className="font-montserrat text-base text-secondary-2 underline flex">Vol 01. Archetypes<img className="ml-2" width={24} src={ArrowRight}/></a>
                        <a className="font-montserrat text-base text-secondary-2 underline mt-3 flex">Feedback & Reviews<img className="ml-2" width={24} src={ArrowRight}/></a>
                        <a className="font-montserrat text-base text-secondary-2 underline mt-3 flex">FAQ<img className="ml-2" width={24} src={ArrowRight}/></a>
                    </div>
                </div>
                <div className="col-span-4">
                    <div className="font-aboreto text-secondary-2 text-3xl text-center w-full mb-3">HERE FOR YOU</div>
                    <p className="text-center">Order,<br/>Complaints,<br/>Inquiries, and<br/>Feedback:</p>
                    <a className="w-full py-[13px] border mb-[35px] border-solid border-accent-2 rounded flex justify-center content-center text-accent-2 mt-3" href=""><img height={20} className="mr-3" src={Whatsapp} alt="Whatsapp Logo" />Let us talk about it.</a>
                    <div className="w-full text-center text-base text-secondary-2 bg-cream-1 p-[10px]">
                        Our customer service is available <span className="font-bold">Monday</span> to <span className="font-bold">Friday</span> from <span className="font-bold">8 am</span> to <span className="font-bold">9 pm</span>. We do shipping on weekends.
                    </div>
                </div>
                <div className="col-span-4">
                    <div className="font-aboreto text-secondary-2 text-3xl text-center w-full mb-3">KEEP IN TOUCH</div>
                    <a className="w-full py-[13px] border mb-[35px] border-solid border-accent-2 rounded flex justify-center content-center text-accent-2" href=""><img height={20} className="mr-3" src={Facebook} alt="Facebook Logo" />Facebook</a>
                    <a className="w-full py-[13px] border mb-[35px] border-solid border-accent-2 rounded flex justify-center content-center text-accent-2" href=""><img height={20} className="mr-3" src={Pinterest} alt="Pinterest Logo" />Pinterest</a>
                    <a className="w-full py-[13px] border mb-[35px] border-solid border-accent-2 rounded flex justify-center content-center text-accent-2" href=""><img height={20} className="mr-3" src={Instagram} alt="Instagram Logo" />Instagram</a>
                    <a className="w-full py-[13px] border border-solid border-accent-2 rounded flex justify-center content-center text-accent-2" href=""><img height={20} className="mr-3" src={Email} alt="Email Logo" />Email</a>
                </div>
            </div>
            <Copyright />
        </footer>
    )
}