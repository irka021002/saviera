import Saviera from "../../assets/image/savieraco.png"
export default function SavForm(){
    return(
        <div className="justify-center grid grid-cols-[repeat(6,minmax(0,32px))] gap-[16px] md:grid-cols-[repeat(12,minmax(0,78px))] md:gap-[24px] bg-primary-2">
            <div className="col-span-12 py-[80px]">
                <div className="flex flex-col items-center">
                    <p className="font-trap text-2xl leading-[150%] text-secondary-2 text-center">
                        <span className="font-bold">ARCHETYPES</span> collection provides essential staples that are versatile and purposeful. <br/><br/>Curated in minimalistic earth tone, all-size, breathable, and effortlessly chic.<br/><br/>Please help us to improve by leaving your review. As a new small brand, your feedback means a lot!<br/><br/><span className="font-bold">PS: Kamu bisa tinggalkan ulasan dalam bahasa Indonesia</span>
                    </p>
                    <button className="border-accent-2 mt-[90px] border text-accent-2 rounded font-montserrat text-[32px] font-medium py-[10px] px-[190px] w-fit">
                        CLICK HERE!
                    </button>
                </div>
                <div className="mt-20">
                    <p className="font-trap text-2xl text-center leading-[150%] py-6 bg-accent-1 text-primary-2">
                        Use <span className="font-bold">#SAVTOWEAR #SAVVYSISSY</span> on social media and <span className="font-bold">tag us.</span>
                        <br/>Get a special <span className="font-bold">20k IDR cashback</span> (we will contact you!)
                    </p>
                    <p className="my-20 font-trap text-2xl text-center leading-[150%] text-secondary-2">
                        Scroll to understand the item(s) you just owned. 
                        <br/>Tell a story about it, and generate discussions with your community!
                    </p>
                </div>
                <div className="mb-20">
                    <div className="p-6 bg-cream-2 font-montserrat text-secondary-2">
                        <h2 className="text-[32px] font-bold">
                            Care Instruction
                        </h2>
                        <p className="text-2xl">
                            Find how to take care of your beloved staple so it will be with you for a longer time.
                        </p>
                    </div>
                    <div className="flex p-5 text-2xl font-montserrat justify-between items-center">
                        <button className="text-accent-1 rounded border border-secondary-2 py-[10px] px-[125px]">
                            Omnia
                        </button>
                        <span className="w-[1px] h-[38px] border border-secondary-1"></span>
                        <button className="text-accent-2 rounded border border-secondary-2 py-[10px] px-[125px]">
                            Cyanne
                        </button>
                        <span className="w-[1px] h-[38px] border border-secondary-1"></span>
                        <button className="text-accent-3 rounded border border-secondary-2 py-[10px] px-[125px]">
                            Wei Yi
                        </button>
                    </div>
                </div>
                <div>
                    <div className="p-6 bg-cream-2 font-montserrat text-secondary-2">
                        <h2 className="text-[32px] font-bold">
                            Eco-Packaging
                        </h2>
                        <p className="text-2xl">
                            Know how to repurpose, reuse and recycle your order packaging.
                        </p>
                    </div>
                    <div className="mt-8">
                        <img className="m-auto" src={Saviera} alt="Saviera Co" />
                    </div>
                </div>
                <div className="px-5 mt-[72px]">
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
        </div>
    )
}