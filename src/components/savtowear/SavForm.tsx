import Saviera from "../../assets/image/savieraco.png"
import { SyntheticEvent, useState } from "react"
export default function SavForm(){
    const [omniaModal, setOmniaModal] = useState(false)
    const [weiyiModal, setWeiyiModal] = useState(false)
    const [cyanneModal, setCyanneModal] = useState(false)
    const [formModal, setFormModal] = useState(false)
    const [omniaReviewState, setOmniaReviewState] = useState(false)
    const [weiyiReviewState, setWeiyiReviewState] = useState(false)
    const [cyanneReviewState, setCyanneReviewState] = useState(false)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [firstPurchase, setFirstPurchase] = useState(false)
    const [hearUs, setHearUs] = useState("")
    const [dislike, setDislike] = useState("")
    const [love, setLove] = useState("")
    const [fabric, setFabric] = useState("")
    const [anonymous, setAnonymous] = useState(false)
    const [request, setRequest] = useState("")
    const [omniaReview, setOmniaReview] = useState(0)
    const [weiyiReview, setWeiyiReview] = useState(0)
    const [cyanneReview, setCyanneReview] = useState(0)
    const handleOmnia = (e: SyntheticEvent<HTMLButtonElement>) => {
        setOmniaModal(!omniaModal)
        if(!omniaModal) document.body.style.overflow = "hidden"
        if(omniaModal) document.body.style.overflow = "auto"
    }
    const handleOmniaDiv = (e: SyntheticEvent<HTMLDivElement>) => {
        setOmniaModal(!omniaModal)
        if(!omniaModal) document.body.style.overflow = "hidden"
        if(omniaModal) document.body.style.overflow = "auto"
    }
    const handleWeiyi = (e: SyntheticEvent<HTMLButtonElement>) => {
        setWeiyiModal(!weiyiModal)
        if(!weiyiModal) document.body.style.overflow = "hidden"
        if(weiyiModal) document.body.style.overflow = "auto"
    }
    const handleWeiyiDiv = (e: SyntheticEvent<HTMLDivElement>) => {
        setWeiyiModal(!weiyiModal)
        if(!weiyiModal) document.body.style.overflow = "hidden"
        if(weiyiModal) document.body.style.overflow = "auto"
    }
    const handleCyanne = (e: SyntheticEvent<HTMLButtonElement>) => {
        setCyanneModal(!cyanneModal)
        if(!cyanneModal) document.body.style.overflow = "hidden"
        if(cyanneModal) document.body.style.overflow = "auto"
    }
    const handleCyanneDiv = (e: SyntheticEvent<HTMLDivElement>) => {
        setCyanneModal(!cyanneModal)
        if(!cyanneModal) document.body.style.overflow = "hidden"
        if(cyanneModal) document.body.style.overflow = "auto"
    }
    const handleForm = (e: SyntheticEvent<HTMLButtonElement>) => {
        setFormModal(!formModal)
        if(!formModal) document.body.style.overflow = "hidden"
        if(formModal) document.body.style.overflow = "auto"
    }
    const handleFormDiv = (e: SyntheticEvent<HTMLDivElement>) => {
        setFormModal(!formModal)
        if(!formModal) document.body.style.overflow = "hidden"
        if(formModal) document.body.style.overflow = "auto"
    }
    const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(e)
    }
    return(
        <>
            <div className="justify-center grid grid-cols-6 px-6 md:px-0 break-all gap-[16px] md:grid-cols-[repeat(12,minmax(0,78px))] md:gap-[24px] bg-primary-2">
                <div className="col-span-6 md:col-span-12 py-[80px]">
                    <div className="flex flex-col items-center w-full">
                        <p className="font-trap text-2xl leading-[150%] text-secondary-2 text-center">
                            <span className="font-bold">ARCHETYPES</span> collection provides essential staples that are versatile and purposeful. <br/><br/>Curated in minimalistic earth tone, all-size, breathable, and effortlessly chic.<br/><br/>Please help us to improve by leaving your review. As a new small brand, your feedback means a lot!<br/><br/><span className="font-bold">PS: Kamu bisa tinggalkan ulasan dalam bahasa Indonesia</span>
                        </p>
                        <button onClick={handleForm} className="border-accent-2 hover:border-opacity-30 mt-10 md:mt-[90px] border text-accent-2 rounded font-montserrat text-xl md:text-[32px] font-medium py-[10px] text-center md:px-[190px] w-full md:w-fit">
                            CLICK HERE!
                        </button>
                    </div>
                    <div className="mt-20">
                        <p className="font-trap text-[14px] md:text-2xl text-center leading-[150%] p-6 md:py-6 bg-accent-1 text-primary-2">
                            Use <span className="font-bold">#SAVTOWEAR #SAVVYSISSY</span> on social media and <span className="font-bold">tag us.</span>
                            <br/>Get a special <span className="font-bold">20k IDR cashback</span> (we will contact you!)
                        </p>
                        <p className="my-20 font-trap text-[14px] md:text-2xl text-center leading-[150%] text-secondary-2">
                            Scroll to understand the item(s) you just owned. 
                            <br/>Tell a story about it, and generate discussions with your community!
                        </p>
                    </div>
                    <div className="mb-20">
                        <div className="p-6 bg-cream-2 font-montserrat text-secondary-2">
                            <h2 className="text-2xl md:text-[32px] font-bold">
                                Care Instruction
                            </h2>
                            <p className="text-[14px] md:text-2xl">
                                Find how to take care of your beloved staple so it will be with you for a longer time.
                            </p>
                        </div>
                        <div className="flex p-5 text-2xl font-montserrat justify-between items-center flex-col md:flex-row">
                            <button onClick={handleOmnia} className="text-accent-1 hover:border-opacity-30 rounded border border-secondary-2 py-[10px] w-full md:w-fit md:px-[125px]">
                                Omnia
                            </button>
                            <span className="md:w-[1px] md:h-[38px] h-[1px] my-3 w-[38px] border border-secondary-1"></span>
                            <button onClick={handleCyanne} className="text-accent-2 hover:border-opacity-30 rounded border border-secondary-2 py-[10px] w-full md:w-fit md:px-[125px]">
                                Cyanne
                            </button>
                            <span className="md:w-[1px] md:h-[38px] h-[1px] my-3 w-[38px] border border-secondary-1"></span>
                            <button onClick={handleWeiyi} className="text-accent-3 hover:border-opacity-30 rounded border border-secondary-2 py-[10px] w-full md:w-fit md:px-[125px]">
                                Wei Yi
                            </button>
                        </div>
                    </div>
                    <div>
                        <div className="p-6 bg-cream-2 font-montserrat text-secondary-2">
                            <h2 className="text-2xl md:text-[32px] font-bold">
                                Eco-Packaging
                            </h2>
                            <p className="text-[14px] md:text-2xl">
                                Know how to repurpose, reuse and recycle your order packaging.
                            </p>
                        </div>
                        <div className="mt-8">
                            <img className="m-auto" src={Saviera} alt="Saviera Co" />
                        </div>
                    </div>
                    <div id="carouselBenefit" className="carousel md:hidden slide relative aspect-[36/41] md:aspect-auto" data-bs-ride="carousel">
                        <div className="carousel-indicators flex justify-center p-0 black-indicators absolute left-0 right-0 mt-[340px]">
                            <button
                                type="button"
                                data-bs-target="#carouselBenefit"
                                data-bs-slide-to="0"
                                className="active"
                                aria-current="true"
                                aria-label="Slide 1"
                            ></button>
                            <button
                                type="button"
                                data-bs-target="#carouselBenefit"
                                data-bs-slide-to="1"
                                aria-label="Slide 2"
                            ></button>
                            <button
                                type="button"
                                data-bs-target="#carouselBenefit"
                                data-bs-slide-to="2"
                                aria-label="Slide 3"
                            ></button>
                        </div>
                        <div className="carousel-inner relative w-full overflow-hidden px-5">
                            <div className="carousel-item active relative float-left w-full bg-primary-2">
                                <div className="bg-[#d9d9d9] aspect-square w-full"></div>
                                <div className="flex-grow flex justify-center items-center w-full mt-[50px]">
                                    <p className="font-trap md:text-2xl leading-[150%] break-words">
                                        Your <span className="font-bold">poly mailer bag</span> is <span className="font-bold">oxo-biodegradable.</span> Which means, in two years, it will break off. In the meantime, you can reuse it as a desk-trash bin until it reaches its life cycle.
                                    </p>
                                </div>
                            </div>
                            <div className="carousel-item relative float-left w-full bg-primary-2">
                                <div className="bg-[#d9d9d9] aspect-square w-full"></div>
                                <div className="flex-grow flex justify-center items-center w-full mt-[50px]">
                                    <p className="font-trap md:text-2xl leading-[150%] break-words">
                                        <span className="font-bold">Tissue paper</span> wrap is <span className="font-bold">compostable.</span> If you don’t compost, bring it to a composting facility, or reuse it as:
                                        <br/>
                                        <ol className="list-decimal ml-[27px]">
                                            <li>Wardrobe freshener (spray with linen sprays, let it dry a bit, and put it on your drawer/in-between clothes);</li>
                                            <li>Party decorations or;</li>
                                            <li>Decorative gift wraps.</li>
                                        </ol>
                                        <br/>
                                        <span className="font-bold">Hang Tag</span> made of recycled paper. <span className="font-bold">Repurpose</span> as a bookmark.
                                        <br/><br/>
                                        <span className="font-bold">Reuse</span> the <span className="font-bold">ramie rope</span> and <span className="font-bold">pin</span> attached to the hangtag.
                                    </p>
                                </div>
                            </div>
                            <div className="carousel-item relative float-left w-full bg-primary-2">
                                <div className="bg-[#d9d9d9] aspect-square w-full"></div>
                                <div className="flex-grow flex justify-center items-center w-full mt-[50px]">
                                    <p className="font-trap md:text-2xl leading-[150%] break-words">
                                        <span className="font-bold">Thank You Card</span> is a <span className="font-bold">repurposed</span> sketch paper hand-painted by our fairy. 
                                        <br/>
                                        <span className="font-bold">Reuse</span> it as a decorative desk or information piece of your clothing item!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-5 mt-[72px] hidden md:block">
                        <div className="flex">
                            <div className="bg-[#d9d9d9] aspect-square w-2/5"></div>
                            <div className="flex-grow ml-5 flex justify-center items-center w-3/5">
                                <p className="font-trap text-2xl leading-[150%] break-words">
                                    Your <span className="font-bold">poly mailer bag</span> is <span className="font-bold">oxo-biodegradable.</span> Which means, in two years, it will break off. In the meantime, you can reuse it as a desk-trash bin until it reaches its life cycle.
                                </p>
                            </div>
                        </div>
                        <div className="flex mt-8">
                            <div className="flex-grow mr-5 flex justify-center items-center w-3/5">
                                <p className="font-trap text-2xl leading-[150%] break-words">
                                    <span className="font-bold">Tissue paper</span> wrap is <span className="font-bold">compostable.</span> If you don’t compost, bring it to a composting facility, or reuse it as:
                                    <br/>
                                    <ol className="list-decimal ml-[27px]">
                                        <li>Wardrobe freshener (spray with linen sprays, let it dry a bit, and put it on your drawer/in-between clothes);</li>
                                        <li>Party decorations or;</li>
                                        <li>Decorative gift wraps.</li>
                                    </ol>
                                    <br/>
                                    <span className="font-bold">Hang Tag</span> made of recycled paper. <span className="font-bold">Repurpose</span> as a bookmark.
                                    <br/><br/>
                                    <span className="font-bold">Reuse</span> the <span className="font-bold">ramie rope</span> and <span className="font-bold">pin</span> attached to the hangtag.
                                </p>
                            </div>
                            <div className="bg-[#d9d9d9] aspect-square w-2/5"></div>
                        </div>
                        <div className="flex mt-8">
                            <div className="bg-[#d9d9d9] aspect-square w-2/5"></div>
                            <div className="flex-grow ml-5 flex justify-center items-center w-3/5">
                                <p className="font-trap text-2xl leading-[150%] break-words">
                                    <span className="font-bold">Thank You Card</span> is a <span className="font-bold">repurposed</span> sketch paper hand-painted by our fairy. 
                                    <br/>
                                    <span className="font-bold">Reuse</span> it as a decorative desk or information piece of your clothing item!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {omniaModal && <div  id="omniaModal" className="fixed overflow-x-hidden top-0 left-0 overflow-y-auto h-full w-full z-[9999] flex justify-center items-center" style={{backgroundColor: "rgba(0,0,0,0.41)"}}>
                    <div onClick={handleOmniaDiv} className="absolute top-0 left-0 bottom-0 right-0"></div>
                    <div className="bg-white relative py-4 md:py-[60px] px-6 md:px-20 w-fit h-fit max-w-[312px] md:max-w-[1063px] text-secondary-2">
                        <button onClick={handleOmnia} className="absolute top-4 right-4 md:top-10 md:right-10">
                            <svg className="hidden md:block" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L33 33" stroke="#800020"/>
                                <path d="M33 1L1 33" stroke="#800020"/>
                            </svg>
                            <svg className="md:hidden" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L17 17" stroke="#800020" stroke-width="0.666667"/>
                                <path d="M17 1L1 17" stroke="#800020" stroke-width="0.666667"/>
                            </svg>
                        </button>
                        <p className="font-montserrat text-[14px] md:text-[30px] text-center">Care Instruction for</p>
                        <p className="font-aboreto text-[30px] md:text-[64px] text-center mt-3">OMNIA</p>
                        <ul className="list-disc font-trap ml-6 text-[14px] md:text-2xl leading-[150%] mt-[37px]">
                            <li>Cold Hand Wash</li>
                            <li>Do not bleach, do not soak, do not use rinse agent, do not tumble dry, and do not dry clean</li>
                            <li>Use mild detergent</li>
                            <li>Separate from other colors</li>
                            <li>Turn the clothing inside out during washing</li>
                            <li>Air dry, lay flat on a drying rack</li>
                            <li>Turn the garment inside out before ironing with a press cloth between the iron and fabric to prevent direct heat, use a medium-hot iron</li>
                            <li>Store: Fold in cool, dry, and dark spaces</li>
                        </ul>
                    </div>
                </div>}
                {weiyiModal && <div  id="weiyiModal" className="fixed overflow-x-hidden top-0 left-0 overflow-y-auto h-full w-full z-[9999] flex justify-center items-center" style={{backgroundColor: "rgba(0,0,0,0.41)"}}>
                    <div onClick={handleWeiyiDiv} className="absolute top-0 left-0 bottom-0 right-0"></div>
                    <div className="bg-white relative py-4 md:py-[60px] px-6 md:px-20 w-fit h-fit max-w-[312px] md:max-w-[1063px] text-secondary-2">
                        <button onClick={handleWeiyi} className="absolute top-4 right-4 md:top-10 md:right-10">
                            <svg className="hidden md:block" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L33 33" stroke="#800020"/>
                                <path d="M33 1L1 33" stroke="#800020"/>
                            </svg>
                            <svg className="md:hidden" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L17 17" stroke="#800020" stroke-width="0.666667"/>
                                <path d="M17 1L1 17" stroke="#800020" stroke-width="0.666667"/>
                            </svg>
                        </button>
                        <p className="font-montserrat text-[14px] md:text-[30px] text-center">Care Instruction for</p>
                        <p className="font-aboreto text-[30px] md:text-[64px] text-center mt-3">WEI YI</p>
                        <ul className="list-disc font-trap ml-6 text-[14px] md:text-2xl leading-[150%] mt-[37px]">
                            <li>Lukewarm or cold water</li>
                            <li>Do not bleach, do not tumble dry, do not dry clean</li>
                            <li>Use mild detergent</li>
                            <li>Separate from other colors</li>
                            <li>Air dry in a padded hanger or lay flat on a drying rack</li>
                            <li>Turn the garment inside out before ironing with a press cloth between the iron and fabric to prevent direct heat, damp a bit before ironing on the highest heat</li>
                            <li>Store: Hang or roll</li>
                        </ul>
                    </div>
                </div>}
                {cyanneModal && <div  id="cyanneModal" className="fixed overflow-x-hidden top-0 left-0 overflow-y-auto h-full w-full z-[9999] flex justify-center items-center" style={{backgroundColor: "rgba(0,0,0,0.41)"}}>
                    <div onClick={handleCyanneDiv} className="absolute top-0 left-0 bottom-0 right-0"></div>
                    <div className="bg-white relative py-4 md:py-[60px] px-6 md:px-20 w-fit h-fit max-w-[312px] md:max-w-[1063px] text-secondary-2">
                        <button onClick={handleCyanne} className="absolute top-4 right-4 md:top-10 md:right-10">
                            <svg className="hidden md:block" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L33 33" stroke="#800020"/>
                                <path d="M33 1L1 33" stroke="#800020"/>
                            </svg>
                            <svg className="md:hidden" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L17 17" stroke="#800020" stroke-width="0.666667"/>
                                <path d="M17 1L1 17" stroke="#800020" stroke-width="0.666667"/>
                            </svg>
                        </button>
                        <p className="font-montserrat text-[14px] md:text-[30px] text-center">Care Instruction for</p>
                        <p className="font-aboreto text-[30px] md:text-[64px] text-center mt-3">CYANNE</p>
                        <ul className="list-disc font-trap ml-6 text-[14px] md:text-2xl leading-[150%] mt-[37px]">
                            <li>Cold Hand Wash</li>
                            <li>Do not bleach, do not soak, do not use rinse agent, do not tumble dry, and do not dry clean</li>
                            <li>Use mild detergent</li>
                            <li>Separate from other colors</li>
                            <li>Turn the clothing inside out during washing</li>
                            <li>Air dry, lay flat on a drying rack</li>
                            <li>Turn the garment inside out before ironing with a press cloth between the iron and fabric to prevent direct heat, use a medium-hot iron</li>
                            <li>Store: Fold in cool, dry, and dark spaces</li>
                        </ul>
                    </div>
                </div>}
                {formModal && <div  id="cyanneModal" className="fixed overflow-x-hidden top-0 left-0 overflow-y-auto h-full w-full z-[9999] flex justify-center" style={{backgroundColor: "rgba(0,0,0,0.41)"}}>
                    <div onClick={handleFormDiv} className="absolute top-0 left-0 bottom-0 right-0"></div>
                    <div className="bg-white relative py-4 md:py-[60px] px-6 md:px-20 w-fit h-fit max-w-[312px] md:max-w-[1063px] text-secondary-2">
                        <button onClick={handleForm} className="absolute top-4 right-4 md:top-10 md:right-10">
                            <svg className="hidden md:block" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L33 33" stroke="#800020"/>
                                <path d="M33 1L1 33" stroke="#800020"/>
                            </svg>
                            <svg className="md:hidden" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L17 17" stroke="#800020" stroke-width="0.666667"/>
                                <path d="M17 1L1 17" stroke="#800020" stroke-width="0.666667"/>
                            </svg>
                        </button>
                        <p className="font-aboreto text-2xl md:text-[52px] text-center mt-3">HELP US TO BE <br className="md:hidden"/>BETTER</p>
                        <div className="w-full mt-[37px]">
                            <form onSubmit={handleSubmit}>
                            <div className="font-trap text-accent-1">
                                <p className="text-base md:text-2xl">*required</p>
                                <p className="text-[12px] md:text-[20px]">*perlu diisi</p>
                            </div>
                            <div className="mt-8">
                                <p className="font-trap text-[14px] md:text-2xl text-secondary-2">Name (will appear in review section)*</p>
                                <p className="font-trap text-[12px] md:text-[20px] text-[rgba(130,130,130,1)]">Nama (akan muncul di bagian ulasan produk)*</p>
                                <input onChange={(e: SyntheticEvent<HTMLInputElement>) => setName(e.currentTarget.value)} required className="w-full text-[14px] md:text-base mt-2 py-3 px-2 md:p-5 font-montserrat focus:border-accent-2 hover:border-accent-2 focus:outline-none text-[rgba(130,130,130,1)] font-medium border border-[rgba(58,58,58,0.3)] rounded" name="name" placeholder="Type your name here..." type="text" />
                            </div>
                            <div className="mt-8">
                                <p className="font-trap text-[14px] md:text-2xl text-secondary-2">Email*</p>
                                <p className="font-trap text-[12px] md:text-[20px] text-[rgba(130,130,130,1)]">Email*</p>
                                <input onChange={(e: SyntheticEvent<HTMLInputElement>) => setEmail(e.currentTarget.value)} required className="w-full text-[14px] md:text-base mt-2 py-3 px-2 md:p-5 font-montserrat focus:border-accent-2 hover:border-accent-2 focus:outline-none text-[rgba(130,130,130,1)] font-medium border border-[rgba(58,58,58,0.3)] rounded" name="email" placeholder="Type your email here..." type="email" />
                            </div>
                            <div className="mt-8">
                                <p className="font-trap text-[14px] md:text-2xl text-secondary-2">Is this your first purchase?*</p>
                                <p className="font-trap text-[12px] md:text-[20px] text-[rgba(130,130,130,1)]">Apakah ini pembelian pertama kamu?*</p>
                                <div className="flex">
                                    <div className="font-trap text-[14px] text-secondary-2 md:text-2xl flex items-center">
                                        <label className="radio-container cursor-pointer">
                                            <input required onChange={(e: SyntheticEvent<HTMLInputElement>) => setFirstPurchase(e.currentTarget.checked)} className="hidden" type="radio" name="purchase" id="purchaseYes" />
                                            <span className="block w-5 md:w-6 h-5 md:h-6 border border-[rgba(58,58,58,0.3)] "></span>
                                        </label>
                                        <label className="ml-2 cursor-pointer" htmlFor="purchaseYes">Yes <span className="text-[rgba(130,130,130,1)]">(Ya)</span></label>
                                    </div>
                                    <div className="font-trap ml-8 text-[14px] text-secondary-2 md:text-2xl flex items-center">
                                        <label className="radio-container cursor-pointer">
                                            <input required onChange={(e: SyntheticEvent<HTMLInputElement>) => setFirstPurchase(e.currentTarget.checked)} className="hidden" type="radio" name="purchase" id="purchaseNo" />
                                            <span className="block w-5 md:w-6 h-5 md:h-6 border border-[rgba(58,58,58,0.3)] "></span>
                                        </label>
                                        <label className="ml-2 cursor-pointer" htmlFor="purchaseNo">No <span className="text-[rgba(130,130,130,1)]">(Tidak)</span></label>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8">
                                <p className="font-trap text-[14px] md:text-2xl text-secondary-2">How do you hear and find out about us? *</p>
                                <p className="font-trap text-[12px] md:text-[20px] text-[rgba(130,130,130,1)]">Bagaimana kamu mendengar dan mengetahui tentang kami?*</p>
                                <select onChange={(e: SyntheticEvent<HTMLSelectElement>) => setHearUs(e.currentTarget.value)} name="origin" required className="w-full text-[14px] md:text-base mt-2 py-3 px-2 md:p-5 font-montserrat focus:border-accent-2 hover:border-accent-2 focus:outline-none text-[rgba(130,130,130,1)] font-medium border border-[rgba(58,58,58,0.3)] rounded">
                                    <option value="" defaultChecked>Select your answer</option>
                                    <option value="">testing</option>
                                </select>
                            </div>
                            <div className="mt-8">
                                <p className="font-trap text-[14px] md:text-2xl text-secondary-2">Things you dislike from the item(s) you purchased from us *</p>
                                <p className="font-trap text-[12px] md:text-[20px] text-[rgba(130,130,130,1)]">Apa hal yang kamu tidak suka dari baju yang kamu beli?*</p>
                                <input onChange={(e: SyntheticEvent<HTMLInputElement>) => setDislike(e.currentTarget.value)} name="dislike" required className="w-full text-[14px] md:text-base mt-2 py-3 px-2 md:p-5 font-montserrat focus:border-accent-2 hover:border-accent-2 focus:outline-none text-[rgba(130,130,130,1)] font-medium border border-[rgba(58,58,58,0.3)] rounded" placeholder="Type your answer" type="text" />
                            </div>
                            <div className="mt-8">
                                <p className="font-trap text-[14px] md:text-2xl text-secondary-2">Things you love from the item(s) you purchased from us*</p>
                                <p className="font-trap text-[12px] md:text-[20px] text-[rgba(130,130,130,1)]">Apa hal yang kamu suka dari baju yang kamu beli?*</p>
                                <input onChange={(e: SyntheticEvent<HTMLInputElement>) => setLove(e.currentTarget.value)} name="love" required className="w-full text-[14px] md:text-base mt-2 py-3 px-2 md:p-5 font-montserrat focus:border-accent-2 hover:border-accent-2 focus:outline-none text-[rgba(130,130,130,1)] font-medium border border-[rgba(58,58,58,0.3)] rounded" placeholder="Type your answer" type="text" />
                            </div>
                            <div className="mt-8">
                                <p className="font-trap text-[14px] md:text-2xl text-secondary-2">How does the fabric feel? How’s the fit? How does the item(s) make you feel? Tell us about it*</p>
                                <p className="font-trap text-[12px] md:text-[20px] text-[rgba(130,130,130,1)]">Bagaimana kainnya terasa dan terlihat? Apakah yang kamu rasakan ketika menggunakan baju itu? Ceritakan kepada kami*</p>
                                <input onChange={(e: SyntheticEvent<HTMLInputElement>) => setFabric(e.currentTarget.value)} name="fabric" required className="w-full text-[14px] md:text-base mt-2 py-3 px-2 md:p-5 font-montserrat focus:border-accent-2 hover:border-accent-2 focus:outline-none text-[rgba(130,130,130,1)] font-medium border border-[rgba(58,58,58,0.3)] rounded" placeholder="Type your answer" type="text" />
                            </div>
                            <div className="mt-8">
                                <p className="font-trap text-[14px] md:text-2xl text-secondary-2">Which products that you own?*</p>
                                <p className="font-trap text-[12px] md:text-[20px] text-[rgba(130,130,130,1)]">Pilih satu atau beberapa produk yang kamu beli*</p>
                                <div className="flex flex-col md:flex-row">
                                    <div className="font-trap text-[14px] text-secondary-2 md:text-2xl flex items-center">
                                        <input onChange={(e: SyntheticEvent<HTMLInputElement>) => setOmniaReviewState(e.currentTarget.checked)} className="w-5 md:w-6 h-5 md:h-6 border border-[rgba(58,58,58,0.3)] checked:accent-secondary-2 checkbox-custom cursor-pointer" type="checkbox" name="products" id="omnia" />
                                        <label className="ml-2 cursor-pointer" htmlFor="omnia">Omnia</label>
                                    </div>
                                    <div className="font-trap mt-2 md:mt-0 md:ml-8 text-[14px] text-secondary-2 md:text-2xl flex items-center">
                                        <input onChange={(e: SyntheticEvent<HTMLInputElement>) => setWeiyiReviewState(e.currentTarget.checked)} className="w-5 md:w-6 h-5 md:h-6 border border-[rgba(58,58,58,0.3)] checked:accent-secondary-2 checkbox-custom cursor-pointer" type="checkbox" name="products" id="weiyi" />
                                        <label className="ml-2 cursor-pointer" htmlFor="weiyi">Wei Yi</label>
                                    </div>
                                    <div className="font-trap mt-2 md:mt-0 md:ml-8 text-[14px] text-secondary-2 md:text-2xl flex items-center">
                                        <input onChange={(e: SyntheticEvent<HTMLInputElement>) => setCyanneReviewState(e.currentTarget.checked)} className="w-5 md:w-6 h-5 md:h-6 border border-[rgba(58,58,58,0.3)] checked:accent-secondary-2 checkbox-custom cursor-pointer" type="checkbox" name="products" id="cyanne" />
                                        <label className="ml-2 cursor-pointer" htmlFor="cyanne">Cyanne</label>
                                    </div>
                                </div>
                            </div>
                            {(omniaReviewState || cyanneReviewState || weiyiReviewState) && <div className="mt-8">
                                <p className="font-trap text-[14px] md:text-2xl text-secondary-2">Rate the item(s)*</p>
                                <p className="font-trap text-[12px] md:text-[20px] text-[rgba(130,130,130,1)]">Beri penilaian</p>
                                <div className="flex mt-2 flex-col md:flex-row">
                                    {omniaReviewState && <div className="flex items-center">
                                        <svg onClick={(e: SyntheticEvent<HTMLOrSVGElement>) => setOmniaReview(1)} className="cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.52482 4.83676C10.5736 2.2221 11.098 0.914764 11.9998 0.914764C12.9016 0.914764 13.426 2.2221 14.4748 4.83676L14.5236 4.95852C15.1161 6.43567 15.4124 7.17425 16.0162 7.62317C16.62 8.07209 17.4126 8.14307 18.9978 8.28504L19.2844 8.31071C21.8788 8.54306 23.176 8.65924 23.4536 9.48455C23.7312 10.3099 22.7678 11.1863 20.8411 12.9392L20.1981 13.5243C19.2227 14.4116 18.735 14.8553 18.5077 15.4368C18.4653 15.5453 18.4301 15.6564 18.4022 15.7695C18.2528 16.3757 18.3956 17.0194 18.6812 18.3066L18.7701 18.7073C19.295 21.0731 19.5575 22.256 19.0992 22.7662C18.928 22.9569 18.7055 23.0942 18.4582 23.1616C17.7966 23.3421 16.8573 22.5767 14.9787 21.046C13.7452 20.0408 13.1284 19.5382 12.4203 19.4251C12.1417 19.3806 11.8579 19.3806 11.5793 19.4251C10.8712 19.5382 10.2544 20.0408 9.02086 21.046C7.14226 22.5767 6.20295 23.3421 5.54135 23.1616C5.29413 23.0942 5.07158 22.9569 4.90035 22.7662C4.44211 22.256 4.70456 21.0731 5.22946 18.7073L5.31836 18.3066C5.60397 17.0194 5.74678 16.3757 5.59737 15.7695C5.5695 15.6564 5.53425 15.5453 5.49185 15.4368C5.26456 14.8553 4.77688 14.4116 3.80154 13.5243L3.1585 12.9392C1.23178 11.1863 0.268413 10.3099 0.545984 9.48455C0.823556 8.65924 2.12077 8.54306 4.71518 8.31071L5.00177 8.28504C6.58699 8.14307 7.3796 8.07209 7.9834 7.62317C8.5872 7.17425 8.88346 6.43567 9.47599 4.95851L9.52482 4.83676Z" fill={omniaReview > 0 ? "#BF9553" : ""} stroke="#3A3A3A" stroke-width="0.56"/>
                                        </svg>
                                        <svg onClick={(e: SyntheticEvent<HTMLOrSVGElement>) => setOmniaReview(2)} className="ml-1 cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.52482 4.83676C10.5736 2.2221 11.098 0.914764 11.9998 0.914764C12.9016 0.914764 13.426 2.2221 14.4748 4.83676L14.5236 4.95852C15.1161 6.43567 15.4124 7.17425 16.0162 7.62317C16.62 8.07209 17.4126 8.14307 18.9978 8.28504L19.2844 8.31071C21.8788 8.54306 23.176 8.65924 23.4536 9.48455C23.7312 10.3099 22.7678 11.1863 20.8411 12.9392L20.1981 13.5243C19.2227 14.4116 18.735 14.8553 18.5077 15.4368C18.4653 15.5453 18.4301 15.6564 18.4022 15.7695C18.2528 16.3757 18.3956 17.0194 18.6812 18.3066L18.7701 18.7073C19.295 21.0731 19.5575 22.256 19.0992 22.7662C18.928 22.9569 18.7055 23.0942 18.4582 23.1616C17.7966 23.3421 16.8573 22.5767 14.9787 21.046C13.7452 20.0408 13.1284 19.5382 12.4203 19.4251C12.1417 19.3806 11.8579 19.3806 11.5793 19.4251C10.8712 19.5382 10.2544 20.0408 9.02086 21.046C7.14226 22.5767 6.20295 23.3421 5.54135 23.1616C5.29413 23.0942 5.07158 22.9569 4.90035 22.7662C4.44211 22.256 4.70456 21.0731 5.22946 18.7073L5.31836 18.3066C5.60397 17.0194 5.74678 16.3757 5.59737 15.7695C5.5695 15.6564 5.53425 15.5453 5.49185 15.4368C5.26456 14.8553 4.77688 14.4116 3.80154 13.5243L3.1585 12.9392C1.23178 11.1863 0.268413 10.3099 0.545984 9.48455C0.823556 8.65924 2.12077 8.54306 4.71518 8.31071L5.00177 8.28504C6.58699 8.14307 7.3796 8.07209 7.9834 7.62317C8.5872 7.17425 8.88346 6.43567 9.47599 4.95851L9.52482 4.83676Z" fill={omniaReview > 1 ? "#BF9553" : ""} stroke="#3A3A3A" stroke-width="0.56"/>
                                        </svg>
                                        <svg onClick={(e: SyntheticEvent<HTMLOrSVGElement>) => setOmniaReview(3)} className="ml-1 cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.52482 4.83676C10.5736 2.2221 11.098 0.914764 11.9998 0.914764C12.9016 0.914764 13.426 2.2221 14.4748 4.83676L14.5236 4.95852C15.1161 6.43567 15.4124 7.17425 16.0162 7.62317C16.62 8.07209 17.4126 8.14307 18.9978 8.28504L19.2844 8.31071C21.8788 8.54306 23.176 8.65924 23.4536 9.48455C23.7312 10.3099 22.7678 11.1863 20.8411 12.9392L20.1981 13.5243C19.2227 14.4116 18.735 14.8553 18.5077 15.4368C18.4653 15.5453 18.4301 15.6564 18.4022 15.7695C18.2528 16.3757 18.3956 17.0194 18.6812 18.3066L18.7701 18.7073C19.295 21.0731 19.5575 22.256 19.0992 22.7662C18.928 22.9569 18.7055 23.0942 18.4582 23.1616C17.7966 23.3421 16.8573 22.5767 14.9787 21.046C13.7452 20.0408 13.1284 19.5382 12.4203 19.4251C12.1417 19.3806 11.8579 19.3806 11.5793 19.4251C10.8712 19.5382 10.2544 20.0408 9.02086 21.046C7.14226 22.5767 6.20295 23.3421 5.54135 23.1616C5.29413 23.0942 5.07158 22.9569 4.90035 22.7662C4.44211 22.256 4.70456 21.0731 5.22946 18.7073L5.31836 18.3066C5.60397 17.0194 5.74678 16.3757 5.59737 15.7695C5.5695 15.6564 5.53425 15.5453 5.49185 15.4368C5.26456 14.8553 4.77688 14.4116 3.80154 13.5243L3.1585 12.9392C1.23178 11.1863 0.268413 10.3099 0.545984 9.48455C0.823556 8.65924 2.12077 8.54306 4.71518 8.31071L5.00177 8.28504C6.58699 8.14307 7.3796 8.07209 7.9834 7.62317C8.5872 7.17425 8.88346 6.43567 9.47599 4.95851L9.52482 4.83676Z" fill={omniaReview > 2 ? "#BF9553" : ""} stroke="#3A3A3A" stroke-width="0.56"/>
                                        </svg>
                                        <svg onClick={(e: SyntheticEvent<HTMLOrSVGElement>) => setOmniaReview(4)} className="ml-1 cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.52482 4.83676C10.5736 2.2221 11.098 0.914764 11.9998 0.914764C12.9016 0.914764 13.426 2.2221 14.4748 4.83676L14.5236 4.95852C15.1161 6.43567 15.4124 7.17425 16.0162 7.62317C16.62 8.07209 17.4126 8.14307 18.9978 8.28504L19.2844 8.31071C21.8788 8.54306 23.176 8.65924 23.4536 9.48455C23.7312 10.3099 22.7678 11.1863 20.8411 12.9392L20.1981 13.5243C19.2227 14.4116 18.735 14.8553 18.5077 15.4368C18.4653 15.5453 18.4301 15.6564 18.4022 15.7695C18.2528 16.3757 18.3956 17.0194 18.6812 18.3066L18.7701 18.7073C19.295 21.0731 19.5575 22.256 19.0992 22.7662C18.928 22.9569 18.7055 23.0942 18.4582 23.1616C17.7966 23.3421 16.8573 22.5767 14.9787 21.046C13.7452 20.0408 13.1284 19.5382 12.4203 19.4251C12.1417 19.3806 11.8579 19.3806 11.5793 19.4251C10.8712 19.5382 10.2544 20.0408 9.02086 21.046C7.14226 22.5767 6.20295 23.3421 5.54135 23.1616C5.29413 23.0942 5.07158 22.9569 4.90035 22.7662C4.44211 22.256 4.70456 21.0731 5.22946 18.7073L5.31836 18.3066C5.60397 17.0194 5.74678 16.3757 5.59737 15.7695C5.5695 15.6564 5.53425 15.5453 5.49185 15.4368C5.26456 14.8553 4.77688 14.4116 3.80154 13.5243L3.1585 12.9392C1.23178 11.1863 0.268413 10.3099 0.545984 9.48455C0.823556 8.65924 2.12077 8.54306 4.71518 8.31071L5.00177 8.28504C6.58699 8.14307 7.3796 8.07209 7.9834 7.62317C8.5872 7.17425 8.88346 6.43567 9.47599 4.95851L9.52482 4.83676Z" fill={omniaReview > 3 ? "#BF9553" : ""} stroke="#3A3A3A" stroke-width="0.56"/>
                                        </svg>
                                        <svg onClick={(e: SyntheticEvent<HTMLOrSVGElement>) => setOmniaReview(5)} className="ml-1 cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.52482 4.83676C10.5736 2.2221 11.098 0.914764 11.9998 0.914764C12.9016 0.914764 13.426 2.2221 14.4748 4.83676L14.5236 4.95852C15.1161 6.43567 15.4124 7.17425 16.0162 7.62317C16.62 8.07209 17.4126 8.14307 18.9978 8.28504L19.2844 8.31071C21.8788 8.54306 23.176 8.65924 23.4536 9.48455C23.7312 10.3099 22.7678 11.1863 20.8411 12.9392L20.1981 13.5243C19.2227 14.4116 18.735 14.8553 18.5077 15.4368C18.4653 15.5453 18.4301 15.6564 18.4022 15.7695C18.2528 16.3757 18.3956 17.0194 18.6812 18.3066L18.7701 18.7073C19.295 21.0731 19.5575 22.256 19.0992 22.7662C18.928 22.9569 18.7055 23.0942 18.4582 23.1616C17.7966 23.3421 16.8573 22.5767 14.9787 21.046C13.7452 20.0408 13.1284 19.5382 12.4203 19.4251C12.1417 19.3806 11.8579 19.3806 11.5793 19.4251C10.8712 19.5382 10.2544 20.0408 9.02086 21.046C7.14226 22.5767 6.20295 23.3421 5.54135 23.1616C5.29413 23.0942 5.07158 22.9569 4.90035 22.7662C4.44211 22.256 4.70456 21.0731 5.22946 18.7073L5.31836 18.3066C5.60397 17.0194 5.74678 16.3757 5.59737 15.7695C5.5695 15.6564 5.53425 15.5453 5.49185 15.4368C5.26456 14.8553 4.77688 14.4116 3.80154 13.5243L3.1585 12.9392C1.23178 11.1863 0.268413 10.3099 0.545984 9.48455C0.823556 8.65924 2.12077 8.54306 4.71518 8.31071L5.00177 8.28504C6.58699 8.14307 7.3796 8.07209 7.9834 7.62317C8.5872 7.17425 8.88346 6.43567 9.47599 4.95851L9.52482 4.83676Z" fill={omniaReview > 4 ? "#BF9553" : ""} stroke="#3A3A3A" stroke-width="0.56"/>
                                        </svg>
                                        <p className="md:text-[20px] text-[rgba(130,130,130,1)] ml-1">(Omnia)</p>
                                    </div>}
                                    {weiyiReviewState && <div className={`flex ${omniaReviewState && "md:ml-6 mt-2 md:mt-0"} items-center`}>
                                        <svg onClick={(e: SyntheticEvent<HTMLOrSVGElement>) => setWeiyiReview(1)} className="cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.52482 4.83676C10.5736 2.2221 11.098 0.914764 11.9998 0.914764C12.9016 0.914764 13.426 2.2221 14.4748 4.83676L14.5236 4.95852C15.1161 6.43567 15.4124 7.17425 16.0162 7.62317C16.62 8.07209 17.4126 8.14307 18.9978 8.28504L19.2844 8.31071C21.8788 8.54306 23.176 8.65924 23.4536 9.48455C23.7312 10.3099 22.7678 11.1863 20.8411 12.9392L20.1981 13.5243C19.2227 14.4116 18.735 14.8553 18.5077 15.4368C18.4653 15.5453 18.4301 15.6564 18.4022 15.7695C18.2528 16.3757 18.3956 17.0194 18.6812 18.3066L18.7701 18.7073C19.295 21.0731 19.5575 22.256 19.0992 22.7662C18.928 22.9569 18.7055 23.0942 18.4582 23.1616C17.7966 23.3421 16.8573 22.5767 14.9787 21.046C13.7452 20.0408 13.1284 19.5382 12.4203 19.4251C12.1417 19.3806 11.8579 19.3806 11.5793 19.4251C10.8712 19.5382 10.2544 20.0408 9.02086 21.046C7.14226 22.5767 6.20295 23.3421 5.54135 23.1616C5.29413 23.0942 5.07158 22.9569 4.90035 22.7662C4.44211 22.256 4.70456 21.0731 5.22946 18.7073L5.31836 18.3066C5.60397 17.0194 5.74678 16.3757 5.59737 15.7695C5.5695 15.6564 5.53425 15.5453 5.49185 15.4368C5.26456 14.8553 4.77688 14.4116 3.80154 13.5243L3.1585 12.9392C1.23178 11.1863 0.268413 10.3099 0.545984 9.48455C0.823556 8.65924 2.12077 8.54306 4.71518 8.31071L5.00177 8.28504C6.58699 8.14307 7.3796 8.07209 7.9834 7.62317C8.5872 7.17425 8.88346 6.43567 9.47599 4.95851L9.52482 4.83676Z" fill={weiyiReview > 0 ? "#BF9553" : ""} stroke="#3A3A3A" stroke-width="0.56"/>
                                        </svg>
                                        <svg onClick={(e: SyntheticEvent<HTMLOrSVGElement>) => setWeiyiReview(2)} className="ml-1 cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.52482 4.83676C10.5736 2.2221 11.098 0.914764 11.9998 0.914764C12.9016 0.914764 13.426 2.2221 14.4748 4.83676L14.5236 4.95852C15.1161 6.43567 15.4124 7.17425 16.0162 7.62317C16.62 8.07209 17.4126 8.14307 18.9978 8.28504L19.2844 8.31071C21.8788 8.54306 23.176 8.65924 23.4536 9.48455C23.7312 10.3099 22.7678 11.1863 20.8411 12.9392L20.1981 13.5243C19.2227 14.4116 18.735 14.8553 18.5077 15.4368C18.4653 15.5453 18.4301 15.6564 18.4022 15.7695C18.2528 16.3757 18.3956 17.0194 18.6812 18.3066L18.7701 18.7073C19.295 21.0731 19.5575 22.256 19.0992 22.7662C18.928 22.9569 18.7055 23.0942 18.4582 23.1616C17.7966 23.3421 16.8573 22.5767 14.9787 21.046C13.7452 20.0408 13.1284 19.5382 12.4203 19.4251C12.1417 19.3806 11.8579 19.3806 11.5793 19.4251C10.8712 19.5382 10.2544 20.0408 9.02086 21.046C7.14226 22.5767 6.20295 23.3421 5.54135 23.1616C5.29413 23.0942 5.07158 22.9569 4.90035 22.7662C4.44211 22.256 4.70456 21.0731 5.22946 18.7073L5.31836 18.3066C5.60397 17.0194 5.74678 16.3757 5.59737 15.7695C5.5695 15.6564 5.53425 15.5453 5.49185 15.4368C5.26456 14.8553 4.77688 14.4116 3.80154 13.5243L3.1585 12.9392C1.23178 11.1863 0.268413 10.3099 0.545984 9.48455C0.823556 8.65924 2.12077 8.54306 4.71518 8.31071L5.00177 8.28504C6.58699 8.14307 7.3796 8.07209 7.9834 7.62317C8.5872 7.17425 8.88346 6.43567 9.47599 4.95851L9.52482 4.83676Z" fill={weiyiReview > 1 ? "#BF9553" : ""} stroke="#3A3A3A" stroke-width="0.56"/>
                                        </svg>
                                        <svg onClick={(e: SyntheticEvent<HTMLOrSVGElement>) => setWeiyiReview(3)} className="ml-1 cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.52482 4.83676C10.5736 2.2221 11.098 0.914764 11.9998 0.914764C12.9016 0.914764 13.426 2.2221 14.4748 4.83676L14.5236 4.95852C15.1161 6.43567 15.4124 7.17425 16.0162 7.62317C16.62 8.07209 17.4126 8.14307 18.9978 8.28504L19.2844 8.31071C21.8788 8.54306 23.176 8.65924 23.4536 9.48455C23.7312 10.3099 22.7678 11.1863 20.8411 12.9392L20.1981 13.5243C19.2227 14.4116 18.735 14.8553 18.5077 15.4368C18.4653 15.5453 18.4301 15.6564 18.4022 15.7695C18.2528 16.3757 18.3956 17.0194 18.6812 18.3066L18.7701 18.7073C19.295 21.0731 19.5575 22.256 19.0992 22.7662C18.928 22.9569 18.7055 23.0942 18.4582 23.1616C17.7966 23.3421 16.8573 22.5767 14.9787 21.046C13.7452 20.0408 13.1284 19.5382 12.4203 19.4251C12.1417 19.3806 11.8579 19.3806 11.5793 19.4251C10.8712 19.5382 10.2544 20.0408 9.02086 21.046C7.14226 22.5767 6.20295 23.3421 5.54135 23.1616C5.29413 23.0942 5.07158 22.9569 4.90035 22.7662C4.44211 22.256 4.70456 21.0731 5.22946 18.7073L5.31836 18.3066C5.60397 17.0194 5.74678 16.3757 5.59737 15.7695C5.5695 15.6564 5.53425 15.5453 5.49185 15.4368C5.26456 14.8553 4.77688 14.4116 3.80154 13.5243L3.1585 12.9392C1.23178 11.1863 0.268413 10.3099 0.545984 9.48455C0.823556 8.65924 2.12077 8.54306 4.71518 8.31071L5.00177 8.28504C6.58699 8.14307 7.3796 8.07209 7.9834 7.62317C8.5872 7.17425 8.88346 6.43567 9.47599 4.95851L9.52482 4.83676Z" fill={weiyiReview > 2 ? "#BF9553" : ""} stroke="#3A3A3A" stroke-width="0.56"/>
                                        </svg>
                                        <svg onClick={(e: SyntheticEvent<HTMLOrSVGElement>) => setWeiyiReview(4)} className="ml-1 cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.52482 4.83676C10.5736 2.2221 11.098 0.914764 11.9998 0.914764C12.9016 0.914764 13.426 2.2221 14.4748 4.83676L14.5236 4.95852C15.1161 6.43567 15.4124 7.17425 16.0162 7.62317C16.62 8.07209 17.4126 8.14307 18.9978 8.28504L19.2844 8.31071C21.8788 8.54306 23.176 8.65924 23.4536 9.48455C23.7312 10.3099 22.7678 11.1863 20.8411 12.9392L20.1981 13.5243C19.2227 14.4116 18.735 14.8553 18.5077 15.4368C18.4653 15.5453 18.4301 15.6564 18.4022 15.7695C18.2528 16.3757 18.3956 17.0194 18.6812 18.3066L18.7701 18.7073C19.295 21.0731 19.5575 22.256 19.0992 22.7662C18.928 22.9569 18.7055 23.0942 18.4582 23.1616C17.7966 23.3421 16.8573 22.5767 14.9787 21.046C13.7452 20.0408 13.1284 19.5382 12.4203 19.4251C12.1417 19.3806 11.8579 19.3806 11.5793 19.4251C10.8712 19.5382 10.2544 20.0408 9.02086 21.046C7.14226 22.5767 6.20295 23.3421 5.54135 23.1616C5.29413 23.0942 5.07158 22.9569 4.90035 22.7662C4.44211 22.256 4.70456 21.0731 5.22946 18.7073L5.31836 18.3066C5.60397 17.0194 5.74678 16.3757 5.59737 15.7695C5.5695 15.6564 5.53425 15.5453 5.49185 15.4368C5.26456 14.8553 4.77688 14.4116 3.80154 13.5243L3.1585 12.9392C1.23178 11.1863 0.268413 10.3099 0.545984 9.48455C0.823556 8.65924 2.12077 8.54306 4.71518 8.31071L5.00177 8.28504C6.58699 8.14307 7.3796 8.07209 7.9834 7.62317C8.5872 7.17425 8.88346 6.43567 9.47599 4.95851L9.52482 4.83676Z" fill={weiyiReview > 3 ? "#BF9553" : ""} stroke="#3A3A3A" stroke-width="0.56"/>
                                        </svg>
                                        <svg onClick={(e: SyntheticEvent<HTMLOrSVGElement>) => setWeiyiReview(5)} className="ml-1 cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.52482 4.83676C10.5736 2.2221 11.098 0.914764 11.9998 0.914764C12.9016 0.914764 13.426 2.2221 14.4748 4.83676L14.5236 4.95852C15.1161 6.43567 15.4124 7.17425 16.0162 7.62317C16.62 8.07209 17.4126 8.14307 18.9978 8.28504L19.2844 8.31071C21.8788 8.54306 23.176 8.65924 23.4536 9.48455C23.7312 10.3099 22.7678 11.1863 20.8411 12.9392L20.1981 13.5243C19.2227 14.4116 18.735 14.8553 18.5077 15.4368C18.4653 15.5453 18.4301 15.6564 18.4022 15.7695C18.2528 16.3757 18.3956 17.0194 18.6812 18.3066L18.7701 18.7073C19.295 21.0731 19.5575 22.256 19.0992 22.7662C18.928 22.9569 18.7055 23.0942 18.4582 23.1616C17.7966 23.3421 16.8573 22.5767 14.9787 21.046C13.7452 20.0408 13.1284 19.5382 12.4203 19.4251C12.1417 19.3806 11.8579 19.3806 11.5793 19.4251C10.8712 19.5382 10.2544 20.0408 9.02086 21.046C7.14226 22.5767 6.20295 23.3421 5.54135 23.1616C5.29413 23.0942 5.07158 22.9569 4.90035 22.7662C4.44211 22.256 4.70456 21.0731 5.22946 18.7073L5.31836 18.3066C5.60397 17.0194 5.74678 16.3757 5.59737 15.7695C5.5695 15.6564 5.53425 15.5453 5.49185 15.4368C5.26456 14.8553 4.77688 14.4116 3.80154 13.5243L3.1585 12.9392C1.23178 11.1863 0.268413 10.3099 0.545984 9.48455C0.823556 8.65924 2.12077 8.54306 4.71518 8.31071L5.00177 8.28504C6.58699 8.14307 7.3796 8.07209 7.9834 7.62317C8.5872 7.17425 8.88346 6.43567 9.47599 4.95851L9.52482 4.83676Z" fill={weiyiReview > 4 ? "#BF9553" : ""} stroke="#3A3A3A" stroke-width="0.56"/>
                                        </svg>
                                        <p className="md:text-[20px] text-[rgba(130,130,130,1)] ml-1">(Wei Yi)</p>
                                    </div>}
                                    {cyanneReviewState && <div className={`flex ${(omniaReviewState || weiyiReviewState) && "md:ml-6 mt-2 md:mt-0"} items-center`}>
                                        <svg onClick={(e: SyntheticEvent<HTMLOrSVGElement>) => setCyanneReview(1)} className="cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.52482 4.83676C10.5736 2.2221 11.098 0.914764 11.9998 0.914764C12.9016 0.914764 13.426 2.2221 14.4748 4.83676L14.5236 4.95852C15.1161 6.43567 15.4124 7.17425 16.0162 7.62317C16.62 8.07209 17.4126 8.14307 18.9978 8.28504L19.2844 8.31071C21.8788 8.54306 23.176 8.65924 23.4536 9.48455C23.7312 10.3099 22.7678 11.1863 20.8411 12.9392L20.1981 13.5243C19.2227 14.4116 18.735 14.8553 18.5077 15.4368C18.4653 15.5453 18.4301 15.6564 18.4022 15.7695C18.2528 16.3757 18.3956 17.0194 18.6812 18.3066L18.7701 18.7073C19.295 21.0731 19.5575 22.256 19.0992 22.7662C18.928 22.9569 18.7055 23.0942 18.4582 23.1616C17.7966 23.3421 16.8573 22.5767 14.9787 21.046C13.7452 20.0408 13.1284 19.5382 12.4203 19.4251C12.1417 19.3806 11.8579 19.3806 11.5793 19.4251C10.8712 19.5382 10.2544 20.0408 9.02086 21.046C7.14226 22.5767 6.20295 23.3421 5.54135 23.1616C5.29413 23.0942 5.07158 22.9569 4.90035 22.7662C4.44211 22.256 4.70456 21.0731 5.22946 18.7073L5.31836 18.3066C5.60397 17.0194 5.74678 16.3757 5.59737 15.7695C5.5695 15.6564 5.53425 15.5453 5.49185 15.4368C5.26456 14.8553 4.77688 14.4116 3.80154 13.5243L3.1585 12.9392C1.23178 11.1863 0.268413 10.3099 0.545984 9.48455C0.823556 8.65924 2.12077 8.54306 4.71518 8.31071L5.00177 8.28504C6.58699 8.14307 7.3796 8.07209 7.9834 7.62317C8.5872 7.17425 8.88346 6.43567 9.47599 4.95851L9.52482 4.83676Z" fill={cyanneReview > 0 ? "#BF9553" : ""} stroke="#3A3A3A" stroke-width="0.56"/>
                                        </svg>
                                        <svg onClick={(e: SyntheticEvent<HTMLOrSVGElement>) => setCyanneReview(2)} className="ml-1 cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.52482 4.83676C10.5736 2.2221 11.098 0.914764 11.9998 0.914764C12.9016 0.914764 13.426 2.2221 14.4748 4.83676L14.5236 4.95852C15.1161 6.43567 15.4124 7.17425 16.0162 7.62317C16.62 8.07209 17.4126 8.14307 18.9978 8.28504L19.2844 8.31071C21.8788 8.54306 23.176 8.65924 23.4536 9.48455C23.7312 10.3099 22.7678 11.1863 20.8411 12.9392L20.1981 13.5243C19.2227 14.4116 18.735 14.8553 18.5077 15.4368C18.4653 15.5453 18.4301 15.6564 18.4022 15.7695C18.2528 16.3757 18.3956 17.0194 18.6812 18.3066L18.7701 18.7073C19.295 21.0731 19.5575 22.256 19.0992 22.7662C18.928 22.9569 18.7055 23.0942 18.4582 23.1616C17.7966 23.3421 16.8573 22.5767 14.9787 21.046C13.7452 20.0408 13.1284 19.5382 12.4203 19.4251C12.1417 19.3806 11.8579 19.3806 11.5793 19.4251C10.8712 19.5382 10.2544 20.0408 9.02086 21.046C7.14226 22.5767 6.20295 23.3421 5.54135 23.1616C5.29413 23.0942 5.07158 22.9569 4.90035 22.7662C4.44211 22.256 4.70456 21.0731 5.22946 18.7073L5.31836 18.3066C5.60397 17.0194 5.74678 16.3757 5.59737 15.7695C5.5695 15.6564 5.53425 15.5453 5.49185 15.4368C5.26456 14.8553 4.77688 14.4116 3.80154 13.5243L3.1585 12.9392C1.23178 11.1863 0.268413 10.3099 0.545984 9.48455C0.823556 8.65924 2.12077 8.54306 4.71518 8.31071L5.00177 8.28504C6.58699 8.14307 7.3796 8.07209 7.9834 7.62317C8.5872 7.17425 8.88346 6.43567 9.47599 4.95851L9.52482 4.83676Z" fill={cyanneReview > 1 ? "#BF9553" : ""} stroke="#3A3A3A" stroke-width="0.56"/>
                                        </svg>
                                        <svg onClick={(e: SyntheticEvent<HTMLOrSVGElement>) => setCyanneReview(3)} className="ml-1 cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.52482 4.83676C10.5736 2.2221 11.098 0.914764 11.9998 0.914764C12.9016 0.914764 13.426 2.2221 14.4748 4.83676L14.5236 4.95852C15.1161 6.43567 15.4124 7.17425 16.0162 7.62317C16.62 8.07209 17.4126 8.14307 18.9978 8.28504L19.2844 8.31071C21.8788 8.54306 23.176 8.65924 23.4536 9.48455C23.7312 10.3099 22.7678 11.1863 20.8411 12.9392L20.1981 13.5243C19.2227 14.4116 18.735 14.8553 18.5077 15.4368C18.4653 15.5453 18.4301 15.6564 18.4022 15.7695C18.2528 16.3757 18.3956 17.0194 18.6812 18.3066L18.7701 18.7073C19.295 21.0731 19.5575 22.256 19.0992 22.7662C18.928 22.9569 18.7055 23.0942 18.4582 23.1616C17.7966 23.3421 16.8573 22.5767 14.9787 21.046C13.7452 20.0408 13.1284 19.5382 12.4203 19.4251C12.1417 19.3806 11.8579 19.3806 11.5793 19.4251C10.8712 19.5382 10.2544 20.0408 9.02086 21.046C7.14226 22.5767 6.20295 23.3421 5.54135 23.1616C5.29413 23.0942 5.07158 22.9569 4.90035 22.7662C4.44211 22.256 4.70456 21.0731 5.22946 18.7073L5.31836 18.3066C5.60397 17.0194 5.74678 16.3757 5.59737 15.7695C5.5695 15.6564 5.53425 15.5453 5.49185 15.4368C5.26456 14.8553 4.77688 14.4116 3.80154 13.5243L3.1585 12.9392C1.23178 11.1863 0.268413 10.3099 0.545984 9.48455C0.823556 8.65924 2.12077 8.54306 4.71518 8.31071L5.00177 8.28504C6.58699 8.14307 7.3796 8.07209 7.9834 7.62317C8.5872 7.17425 8.88346 6.43567 9.47599 4.95851L9.52482 4.83676Z" fill={cyanneReview > 2 ? "#BF9553" : ""} stroke="#3A3A3A" stroke-width="0.56"/>
                                        </svg>
                                        <svg onClick={(e: SyntheticEvent<HTMLOrSVGElement>) => setCyanneReview(4)} className="ml-1 cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.52482 4.83676C10.5736 2.2221 11.098 0.914764 11.9998 0.914764C12.9016 0.914764 13.426 2.2221 14.4748 4.83676L14.5236 4.95852C15.1161 6.43567 15.4124 7.17425 16.0162 7.62317C16.62 8.07209 17.4126 8.14307 18.9978 8.28504L19.2844 8.31071C21.8788 8.54306 23.176 8.65924 23.4536 9.48455C23.7312 10.3099 22.7678 11.1863 20.8411 12.9392L20.1981 13.5243C19.2227 14.4116 18.735 14.8553 18.5077 15.4368C18.4653 15.5453 18.4301 15.6564 18.4022 15.7695C18.2528 16.3757 18.3956 17.0194 18.6812 18.3066L18.7701 18.7073C19.295 21.0731 19.5575 22.256 19.0992 22.7662C18.928 22.9569 18.7055 23.0942 18.4582 23.1616C17.7966 23.3421 16.8573 22.5767 14.9787 21.046C13.7452 20.0408 13.1284 19.5382 12.4203 19.4251C12.1417 19.3806 11.8579 19.3806 11.5793 19.4251C10.8712 19.5382 10.2544 20.0408 9.02086 21.046C7.14226 22.5767 6.20295 23.3421 5.54135 23.1616C5.29413 23.0942 5.07158 22.9569 4.90035 22.7662C4.44211 22.256 4.70456 21.0731 5.22946 18.7073L5.31836 18.3066C5.60397 17.0194 5.74678 16.3757 5.59737 15.7695C5.5695 15.6564 5.53425 15.5453 5.49185 15.4368C5.26456 14.8553 4.77688 14.4116 3.80154 13.5243L3.1585 12.9392C1.23178 11.1863 0.268413 10.3099 0.545984 9.48455C0.823556 8.65924 2.12077 8.54306 4.71518 8.31071L5.00177 8.28504C6.58699 8.14307 7.3796 8.07209 7.9834 7.62317C8.5872 7.17425 8.88346 6.43567 9.47599 4.95851L9.52482 4.83676Z" fill={cyanneReview > 3 ? "#BF9553" : ""} stroke="#3A3A3A" stroke-width="0.56"/>
                                        </svg>
                                        <svg onClick={(e: SyntheticEvent<HTMLOrSVGElement>) => setCyanneReview(5)} className="ml-1 cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.52482 4.83676C10.5736 2.2221 11.098 0.914764 11.9998 0.914764C12.9016 0.914764 13.426 2.2221 14.4748 4.83676L14.5236 4.95852C15.1161 6.43567 15.4124 7.17425 16.0162 7.62317C16.62 8.07209 17.4126 8.14307 18.9978 8.28504L19.2844 8.31071C21.8788 8.54306 23.176 8.65924 23.4536 9.48455C23.7312 10.3099 22.7678 11.1863 20.8411 12.9392L20.1981 13.5243C19.2227 14.4116 18.735 14.8553 18.5077 15.4368C18.4653 15.5453 18.4301 15.6564 18.4022 15.7695C18.2528 16.3757 18.3956 17.0194 18.6812 18.3066L18.7701 18.7073C19.295 21.0731 19.5575 22.256 19.0992 22.7662C18.928 22.9569 18.7055 23.0942 18.4582 23.1616C17.7966 23.3421 16.8573 22.5767 14.9787 21.046C13.7452 20.0408 13.1284 19.5382 12.4203 19.4251C12.1417 19.3806 11.8579 19.3806 11.5793 19.4251C10.8712 19.5382 10.2544 20.0408 9.02086 21.046C7.14226 22.5767 6.20295 23.3421 5.54135 23.1616C5.29413 23.0942 5.07158 22.9569 4.90035 22.7662C4.44211 22.256 4.70456 21.0731 5.22946 18.7073L5.31836 18.3066C5.60397 17.0194 5.74678 16.3757 5.59737 15.7695C5.5695 15.6564 5.53425 15.5453 5.49185 15.4368C5.26456 14.8553 4.77688 14.4116 3.80154 13.5243L3.1585 12.9392C1.23178 11.1863 0.268413 10.3099 0.545984 9.48455C0.823556 8.65924 2.12077 8.54306 4.71518 8.31071L5.00177 8.28504C6.58699 8.14307 7.3796 8.07209 7.9834 7.62317C8.5872 7.17425 8.88346 6.43567 9.47599 4.95851L9.52482 4.83676Z" fill={cyanneReview > 4 ? "#BF9553" : ""} stroke="#3A3A3A" stroke-width="0.56"/>
                                        </svg>
                                        <p className="md:text-[20px] text-[rgba(130,130,130,1)] ml-1">(Cyanne)</p>
                                    </div>}
                                </div>
                            </div>}
                            <div className="mt-8">
                                <p className="font-trap text-[14px] md:text-2xl text-secondary-2">Post this review anonymously *</p>
                                <p className="font-trap text-[12px] md:text-[20px] text-[rgba(130,130,130,1)]">Posting ulasan ini secara anonimus*</p>
                                <div className="flex">
                                    <div className="font-trap text-[14px] text-secondary-2 md:text-2xl flex items-center">
                                        <label className="radio-container cursor-pointer">
                                            <input onChange={(e: SyntheticEvent<HTMLInputElement>) => setAnonymous(e.currentTarget.checked)} required className="hidden" type="radio" name="anonymous" id="anonymousYes" />
                                            <span className="block w-5 md:w-6 h-5 md:h-6 border border-[rgba(58,58,58,0.3)] "></span>
                                        </label>
                                        <label className="ml-2 cursor-pointer" htmlFor="anonymousYes">Yes <span className="text-[rgba(130,130,130,1)]">(Ya)</span></label>
                                    </div>
                                    <div className="font-trap ml-8 text-[14px] text-secondary-2 md:text-2xl flex items-center">
                                        <label className="radio-container cursor-pointer">
                                            <input onChange={(e: SyntheticEvent<HTMLInputElement>) => setAnonymous(e.currentTarget.checked)} required className="hidden" type="radio" name="anonymous" id="anonymousNo" />
                                            <span className="block w-5 md:w-6 h-5 md:h-6 border border-[rgba(58,58,58,0.3)] "></span>
                                        </label>
                                        <label className="ml-2 cursor-pointer" htmlFor="anonymousNo">No <span className="text-[rgba(130,130,130,1)]">(Tidak)</span></label>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8">
                                <p className="font-trap text-[14px] md:text-2xl text-secondary-2">Any requests or general comments for us?</p>
                                <p className="font-trap text-[12px] md:text-[20px] text-[rgba(130,130,130,1)]">Ada permintaan atau komentar umum lainnya untuk kami?*</p>
                                <input onChange={(e: SyntheticEvent<HTMLInputElement>) => setRequest(e.currentTarget.value)} name="request" className="w-full text-[14px] md:text-base mt-2 py-3 px-2 md:p-5 font-montserrat focus:border-accent-2 hover:border-accent-2 focus:outline-none text-[rgba(130,130,130,1)] font-medium border border-[rgba(58,58,58,0.3)] rounded" placeholder="Type your answer" type="text" />
                            </div>
                            <button type="submit" className="p-[10px] text-center w-full mt-[37px] text-[14px] md:text-2xl text-accent-2 border border-accent-2 rounded hover:border-opacity-30">
                                Share My Review
                            </button>
                            </form>
                        </div>
                    </div>
                </div>}
            </div>
        </>
    )
}