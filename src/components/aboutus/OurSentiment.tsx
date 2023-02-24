import People from "../../assets/icon/people.svg"
import Earth from "../../assets/icon/earth.svg"
import Bag from "../../assets/icon/bag.svg"
export default function OurSentiment(){
    return(
        <div>
            <div className="pt-20 bg-primary-2 justify-center grid grid-cols-6 md:grid-cols-[repeat(12,minmax(0,78px))] md:gap-[24px] md:gap-y-10 px-6 md:px-0">
                <div className="flex col-span-6 md:col-span-12 flex-col md:flex-row w-full">
                    <p className="py-4 px-[10px] bg-secondary-2 text-primary-2 font-aboreto text-[32px] md:text-4xl leading-[135%] text-center">
                        OUR<br />SENTIMENT
                    </p>
                    <p className="grow py-[29px] px-6 md:text-2xl bg-accent-1 h-full text-center leading-[150%] text-primary-2 font-trap">
                        Everything that we do here, we always reflect on the three things:<br/>The People, The Planet, and The Fashion Industry.
                    </p>
                </div>
                <div id="carouselSentiment" className="mt-10 block md:hidden col-span-6 carousel slide relative aspect-[36/41] md:aspect-auto" data-bs-ride="carousel">
                    <div className="carousel-indicators flex justify-center p-0 brown-indicators">
                        <button
                            type="button"
                            data-bs-target="#carouselSentiment"
                            data-bs-slide-to="0"
                            className="active"
                            aria-current="true"
                            aria-label="Slide 1"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselSentiment"
                            data-bs-slide-to="1"
                            aria-label="Slide 2"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselSentiment"
                            data-bs-slide-to="2"
                            aria-label="Slide 3"
                        ></button>
                    </div>
                    <div className="carousel-inner relative w-full overflow-hidden">
                        <div className="carousel-item active relative float-left w-full ">
                            <div className="bg-[url('/image/homepage/promocta.png')] w-full aspect-[485/332]">
                                <div className="bg-[rgba(0,0,0,0.3)] w-full h-full flex flex-col justify-center items-center">
                                    <img width={60} height={60} src={People} alt="People Icon" />
                                    <p className="text-center text-primary-2 text-[32px] font-montserrat leading-[135%]">THE PEOPLE</p>
                                </div>
                            </div>
                            <div className="bg-white h-full p-3 grow w-full flex items-center justify-center flex-col">
                                <ol className="list-decimal list-inside text-secondary-2 leading-[150%]">
                                    <li>Vital to support the local economy by sourcing locally and manufacturing our products in Indonesia.</li>
                                    <li>We collaborate with our entrusted Cut, Make, and Trim partner, Arunika. They accept low manufacturing order quantity, ensuring efficient ways of cutting to minimize fabric waste and treat their employees fairly.</li>
                                    <li>We committed to being involved in local discussions and communities that serve the same value as us: closing the sustainability gap, supporting slow fashion, responsible consumption, and eco-conscious efforts.</li>
                                </ol>
                            </div>
                        </div>
                        <div className="carousel-item relative float-left w-full">
                            <div className="bg-[url('/image/homepage/promocta.png')] w-full aspect-[485/332]">
                                <div className="bg-[rgba(0,0,0,0.3)] w-full h-full flex flex-col justify-center items-center">
                                    <img width={60} height={60} src={Earth} alt="Earth Icon" />
                                    <p className="text-center text-primary-2 text-[32px] font-montserrat leading-[135%]">THE EARTH</p>
                                </div>
                            </div>
                            <div className="bg-white h-full p-3 grow w-full flex items-center justify-center flex-col">
                                <ol className="list-decimal list-inside text-secondary-2 leading-[150%]">
                                    <li>We must use organic, less harmful, durable, and responsible materials. Here are our favorite options: Any natural fibers (eg. linen, cotton), organic cotton, organic linen, green-certified lyocell, green-certified modal, made of natural dye, handwoven, deadstock natural fibers (cotton, linen, silk).</li>
                                    <li>Our packaging is eco-friendly and purposeful. It meant for you to exercise a less-waste lifestyle and be creative to repurpose, reuse and recycle (know more from the QC Code attached to your Thank You card).</li>
                                    <li>By producing small runs of every piece and imposing a pre-order basis should demand arise, we intend to avoid overproducing.</li>
                                </ol>
                            </div>
                        </div>
                        <div className="carousel-item relative float-left w-full">
                            <div className="bg-[url('/image/homepage/promocta.png')] w-full aspect-[485/332]">
                                <div className="bg-[rgba(0,0,0,0.3)] w-full h-full flex flex-col justify-center items-center">
                                    <img width={60} height={60} src={Bag} alt="Bag Icon" />
                                    <p className="text-center text-primary-2 text-[32px] font-montserrat leading-[135%]">THE FASHION<br/>INDUSTRY</p>
                                </div>
                            </div>
                            <div className="bg-white h-full p-3 grow w-full flex items-center justify-center flex-col">
                                <ol className="list-decimal list-inside text-secondary-2 leading-[150%]">
                                    <li>We are limiting the drops in each collection as a slow fashion brand.</li>
                                    <li>We are not relying on heavy and direct sales promotions (such as discounts, flash sales, and garage sales) to shift the overconsumption behavior. We educate about value per use and conscious consumption.</li>
                                    <li>While maintaining the highest levels of quality, we also impose a strict product returns policy.</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 hidden md:flex">
                    <div className="bg-[url('/image/homepage/promocta.png')] w-2/5 aspect-[485/332]">
                        <div className="bg-[rgba(0,0,0,0.3)] w-full h-full flex flex-col justify-center items-center">
                            <img width={60} height={60} src={People} alt="People Icon" />
                            <p className="text-center text-primary-2 text-[32px] font-montserrat leading-[135%]">THE PEOPLE</p>
                        </div>
                    </div>
                    <div className="bg-white h-full px-5 grow w-3/5 flex items-center justify-center flex-col">
                        <ol className="list-decimal list-inside text-secondary-2 leading-[150%]">
                            <li>Vital to support the local economy by sourcing locally and manufacturing our products in Indonesia.</li>
                            <li>We collaborate with our entrusted Cut, Make, and Trim partner, Arunika. They accept low manufacturing order quantity, ensuring efficient ways of cutting to minimize fabric waste and treat their employees fairly.</li>
                            <li>We committed to being involved in local discussions and communities that serve the same value as us: closing the sustainability gap, supporting slow fashion, responsible consumption, and eco-conscious efforts.</li>
                        </ol>
                    </div>
                </div>
                <div className="col-span-12 hidden md:flex">
                    <div className="bg-white h-full px-5 grow w-3/5 flex items-center justify-center flex-col">
                        <ol className="list-decimal list-inside text-secondary-2 leading-[150%]">
                            <li>We must use organic, less harmful, durable, and responsible materials. Here are our favorite options: Any natural fibers (eg. linen, cotton), organic cotton, organic linen, green-certified lyocell, green-certified modal, made of natural dye, handwoven, deadstock natural fibers (cotton, linen, silk).</li>
                            <li>Our packaging is eco-friendly and purposeful. It meant for you to exercise a less-waste lifestyle and be creative to repurpose, reuse and recycle (know more from the QC Code attached to your Thank You card).</li>
                            <li>By producing small runs of every piece and imposing a pre-order basis should demand arise, we intend to avoid overproducing.</li>
                        </ol>
                    </div>
                    <div className="bg-[url('/image/homepage/promocta.png')] w-2/5 aspect-[485/332]">
                        <div className="bg-[rgba(0,0,0,0.3)] w-full h-full flex flex-col justify-center items-center">
                            <img width={60} height={60} src={Earth} alt="Earth Icon" />
                            <p className="text-center text-primary-2 text-[32px] font-montserrat leading-[135%]">THE EARTH</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 hidden md:flex">
                    <div className="bg-[url('/image/homepage/promocta.png')] w-2/5 aspect-[485/332]">
                        <div className="bg-[rgba(0,0,0,0.3)] w-full h-full flex flex-col justify-center items-center">
                            <img width={60} height={60} src={Bag} alt="Bag Icon" />
                            <p className="text-center text-primary-2 text-[32px] font-montserrat leading-[135%]">THE FASHION<br/>INDUSTRY</p>
                        </div>
                    </div>
                    <div className="bg-white h-full px-5 grow w-3/5 flex items-center justify-center flex-col">
                        <ol className="list-decimal list-inside text-secondary-2 leading-[150%]">
                            <li>We are limiting the drops in each collection as a slow fashion brand.</li>
                            <li>We are not relying on heavy and direct sales promotions (such as discounts, flash sales, and garage sales) to shift the overconsumption behavior. We educate about value per use and conscious consumption.</li>
                            <li>While maintaining the highest levels of quality, we also impose a strict product returns policy.</li>
                        </ol>
                    </div>
                </div>
            </div>
            <div className="text-center px-6 md:px-0 py-20 text-2xl leading-[150%] bg-primary-2">
                Continuance of active exploration, discoveries of eco-conscious innovation, and collaboration
                <br/>with all stakeholders aligned with our aspiration to <span className="font-bold">reduce our environmental impact.</span>
                <br/>Thus, a step closer to <span className="font-bold">closing the sustainability gap,</span> at last, <span className="font-bold">reshaping the fashion industry.</span>
            </div>
        </div>
    )
}