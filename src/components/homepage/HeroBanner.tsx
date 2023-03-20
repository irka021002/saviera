interface HeroBannerProps{
    heroPic: Array<string>;
}
export default function Props({heroPic}:HeroBannerProps){
    return(
        <div id="carouselHero" className="carousel slide relative mt-[-80px] md:mt-[-100px] aspect-[36/41] md:aspect-auto" data-bs-ride="carousel">
            <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                {
                    heroPic.map((v,i) => {
                        return(
                            <button
                                data-bs-target="#carouselHero"
                                data-bs-slide-to={i}
                                className={`${i == 0 ? "active" : ""}`}
                                aria-current={`${i == 0 ? "true" : "false"}`}
                                aria-label={`${"Slide " + (i+1)}`}
                                key={i}
                            ></button> 
                        )
                    })
                }
            </div>
            <div className="carousel-inner relative w-full overflow-hidden">
                {
                    heroPic.length == 0 ?
                    <div className={`carousel-item active relative float-left w-full`}>
                        <div className="bg-black absolute w-full h-full opacity-30"></div>
                        <img
                            src="/image/homepage/grayBg.png"
                            className="block w-full aspect-[36/41] md:aspect-auto"
                            alt="..."
                        />
                    </div>
                    :
                    heroPic.map((v,i) => {
                        return(
                            <div key={i} className={`carousel-item ${i == 0 ? "active" : ""} relative float-left w-full`}>
                                <div className="bg-black absolute w-full h-full opacity-30"></div>
                                <img
                                    src={v}
                                    className="block w-full aspect-[36/41] md:aspect-auto"
                                    alt="..."
                                />
                            </div>
                        )
                    })
                }
            </div>
            <button
                className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                type="button"
                data-bs-target="#carouselHero"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                type="button"
                data-bs-target="#carouselHero"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}