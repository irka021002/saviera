export default function StatusQuo(){
    return(
        <div className="w-full h-fit bg-primary-2">
            <div className="w-full h-fit flex">
                <div className="w-1/2 bg-[url('/image/homepage/promocta.png')] aspect-[8/7] bg-no-repeat">
                    <div className="bg-black w-full h-full opacity-60"></div>
                </div>
                <div className="absolute right-0 left-0 content-center h-full justify-center grid grid-cols-[repeat(6,minmax(0,32px))] gap-[16px] md:grid-cols-[repeat(12,minmax(0,78px))] md:gap-[24px]">
                    <div className="p-10 col-span-8 col-start-5 bg-white text-secondary-2">
                        <h2 className="font-aboreto text-[40px] ">CHANGING THE STATUS QUO</h2>
                        <p className="mt-[52px] leading-[150%]">
                            <span className="font-bold">SAVIERA</span> was born <span className="font-bold">out of the fear of doing nothing</span> to <span className="font-bold">close the sustainability gap.</span> We are confident that we are just <span className="font-bold">getting started and getting better.</span>
                            <br /> <br />
                            We challenge current affairs where <span className="font-bold">overproduction</span> and <span className="font-bold">consumerism are evident</span> in the <span className="font-bold">fashion industry in</span> Indonesia.
                            <br /> <br />
                            We acknowledge the complexity of the stakeholders involved and factors incorporated from the end-to-end process. 
                            <br /> <br />
                            <span className="font-bold">We nurture the understanding of sustainability</span> by adopting <span className="font-bold">the triple bottom line</span> (the People, Planet, Profit) concept to exercise a <span className="font-bold">greener business model.</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}