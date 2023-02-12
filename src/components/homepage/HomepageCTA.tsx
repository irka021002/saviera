import ArrowRightRed from "../../assets/icon/arrowRightRed.svg"
export default function HomepageCTA(){
    return(
        <div className="py-10">
            <div className="justify-center grid grid-cols-[repeat(4,minmax(0,78px))] md:grid-cols-[repeat(12,minmax(0,78px))] gap-[24px]">
                <div className="col-span-12 flex items-center flex-col text-secondary-2">
                    <h2 className="font-aboreto text-4xl text-center">
                        OPTIMUM COMFORT MEETS VERSATILITY
                    </h2>
                    <p className="text-justify max-w-[800px] mt-5 mb-8">
                        SAVIERA is an eco-conscious fashion brand that provides size-inclusive, timeless and versatile fashion staples for anyone who cares about what they wear and how their clothes are made in an era of modern conscious consumption.
                    </p>
                    <a className="flex font-montserrat text-accent-1 font-medium mb-36" href="">MORE OF OUR STORY <img className="ml-2" src={ArrowRightRed} alt="Arrow Icon" /></a>
                </div>
            </div>
        </div>
    )
}