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
                    <div className="flex p-5 text-2xl font-montserrat justify-between">
                        <button className="text-accent-1 rounded border border-secondary-2 py-[10px] px-[125px]">
                            Omnia
                        </button>
                        <button className="text-accent-2 rounded border border-secondary-2 py-[10px] px-[125px]">
                            Cyanne
                        </button>
                        <button className="text-accent-3 rounded border border-secondary-2 py-[10px] px-[125px]">
                            Wei Yi
                        </button>
                    </div>
                </div>
                <div className="">
                    <div className="p-6 bg-cream-2 font-montserrat text-secondary-2">
                        <h2 className="text-[32px] font-bold">
                            Eco-Packaging
                        </h2>
                        <p className="text-2xl">
                            Know how to repurpose, reuse and recycle your order packaging.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}