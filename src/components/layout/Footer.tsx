import Facebook from "../../assets/icon/footer/facebook.svg"
import Pinterest from "../../assets/icon/footer/pinterest.svg"
import Instagram from "../../assets/icon/footer/instagram.svg"
import Email from "../../assets/icon/footer/email.svg"
import Whatsapp from "../../assets/icon/footer/whatsapp.svg"
import ArrowRight from "../../assets/icon/arrowRight.svg"
import UnderlineButton from "../button/UnderlineButton"
import Copyright from "./Copyright"
import ContactButton from "../button/ContactButton"
export default function Footer(){   
    return(
        <footer>
            <div className="w-full justify-center grid grid-cols-[repeat(4,minmax(0,78px))] md:grid-cols-[repeat(12,minmax(0,78px))] gap-[24px] py-[80px]">
                <div className="col-span-4">
                    <div className="font-aboreto text-secondary-2 text-3xl text-center w-full mb-3">SAVIERA</div>
                    <p className="text-center">is an eco-conscious fashion brand that intentionally aims for a timeless, versatile, and original fashion staple.</p>
                    <p className="text-center mt-3">Small batches.<br/>Limited Drops.<br/>Sourced and made locally</p>
                    <div className="mt-[21px] text-left flex flex-col items-center md:items-start">
                        <UnderlineButton text="Vol 01. Archetypes" src={ArrowRight} />
                        <UnderlineButton text="Feedback & Reviews" src={ArrowRight} />
                        <UnderlineButton text="FAQ" src={ArrowRight} />
                    </div>
                </div>
                <div className="col-span-4">
                    <div className="font-aboreto text-secondary-2 text-3xl text-center w-full mb-3">HERE FOR YOU</div>
                    <p className="text-center mb-3">Order,<br/>Complaints,<br/>Inquiries, and<br/>Feedback:</p>
                    <ContactButton src={Whatsapp} alt="Whatsapp Logo" text="Whatsapp" href="" />
                    <div className="w-full text-center text-base text-secondary-2 bg-cream-1 p-[10px]">
                        Our customer service is available <span className="font-bold">Monday</span> to <span className="font-bold">Friday</span> from <span className="font-bold">8 am</span> to <span className="font-bold">9 pm</span>. We do shipping on weekends.
                    </div>
                </div>
                <div className="col-span-4">
                    <div className="font-aboreto text-secondary-2 text-3xl text-center w-full mb-3">KEEP IN TOUCH</div>
                    <ContactButton src={Facebook} alt="Facebook Logo" text="Facebook" href="" />
                    <ContactButton src={Pinterest} alt="Pinterest Logo" text="Pinterest" href="" />
                    <ContactButton src={Instagram} alt="Instagram Logo" text="Instagram" href="" />
                    <ContactButton src={Email} alt="Email Logo" text="Email" href="" />
                </div>
            </div>
            <Copyright />
        </footer>
    )
}