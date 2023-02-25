export default function ArchetypesInfo(){
    return(
        <>
            <div className="pt-20 md:pb-[472px] bg-primary-2 justify-center grid grid-cols-6 gap-[16px] md:grid-cols-[repeat(12,minmax(0,78px))] md:gap-[24px] px-6 md:px-0">
                <div className="col-span-6 md:col-span-12">
                    <div className="text-center text-secondary-2 ">
                        <h1 className="font-aboreto text-[52px]">
                            VOL 01. ARCHETYPES
                        </h1>
                        <p className="mt-8 flex flex-col-reverse items-center py-10 font-trap text-2xl leading-[150%] before:h-[1px] before:w-5/6 before:mt-10 before:content-[''] before:border-b before:border-secondary-1">
                            <span className="mt-7">Like an Opera with an Overture, Archetypes are the commencement of our <span className="font-bold">limited initial collection.</span></span>
                            ARCHETYPES inspired by and represent collective individuals that are: 
                            <br />
                            Original, Confident, and Self-compassionate.
                        </p>
                    </div>
                    <div className="py-[80px]">
                        <div id="carouselHero" className="carousel slide relative" data-bs-ride="carousel">
                            <div className="carousel-inner relative aspect-[104/59] w-full overflow-hidden">
                                <div className="carousel-item active relative float-left w-full aspect-[104/59]">
                                    <div className="bg-[rgba(0,0,0,0.3)] absolute w-full h-full flex justify-center items-center">
                                        <h2 className="text-center text-primary-2 font-montserrat text-[20px] md:text-[64px] font-normal">Minimalistic</h2>
                                    </div>
                                    <img
                                        src="/image/homepage/promocta.png"
                                        className="block w-full aspect-[104/59]"
                                        alt="..."
                                    />
                                </div>
                                <div className="carousel-item relative float-left w-full">
                                    <img
                                        src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
                                        className="block w-full"
                                        alt="..."
                                    />
                                    <div className="carousel-caption hidden md:block absolute text-center">
                                        <h5 className="text-xl">Second slide label</h5>
                                        <p>Some representative placeholder content for the second slide.</p>
                                    </div>
                                </div>
                                <div className="carousel-item relative float-left w-full">
                                    <img
                                        src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
                                        className="block w-full"
                                        alt="..."
                                    />
                                    <div className="carousel-caption hidden md:block absolute text-center">
                                        <h5 className="text-xl">Third slide label</h5>
                                        <p>Some representative placeholder content for the third slide.</p>
                                    </div>
                                </div>
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
                    </div>
                    <div>
                        <p className="text-secondary-2 font-trap text-xl leading-[150%] text-center">
                            The collection provides essential staples that are versatile and purposeful. 
                            <br/>
                            Wear it for business meetings, for a casual office look, or on the weekends. 
                            <br/><br/>
                            Below is information of materials, trims, and packaging used in our collection:
                        </p>
                        <table className="w-10/12 m-auto text-secondary-2 mt-8">
                            <thead className="bg-cream-2 font-trap leading-[150%] text-xl">
                                <th className="p-5 w-1/2">
                                    Materials, Trims and Packaging
                                </th>
                                <th className="p-5 w-1/2">
                                    Manufactured in / Made in / Sourced from
                                </th>
                            </thead>
                            <tbody className="text-secondary-2 font-trap">
                                <tr>
                                    <td className="py-[10px] px-5 border border-secondary-2">100% organic cotton</td>
                                    <td className="py-[10px] px-5 text-center border border-secondary-2">Bandung</td>
                                </tr>
                                <tr>
                                    <td className="py-[10px] px-5 border border-secondary-2">Pure linen</td>
                                    <td className="py-[10px] px-5 text-center border border-secondary-2">Jakarta</td>
                                </tr>
                                <tr>
                                    <td className="py-[10px] px-5 border border-secondary-2">Pure cotton deadstock</td>
                                    <td className="py-[10px] px-5 text-center border border-secondary-2">Jakarta</td>
                                </tr>
                                <tr>
                                    <td className="py-[10px] px-5 border border-secondary-2">Clothing label made from cotton</td>
                                    <td className="py-[10px] px-5 text-center border border-secondary-2">Bojenegoro</td>
                                </tr>
                                <tr>
                                    <td className="py-[10px] px-5 border border-secondary-2">Hang tag made from recycled paper</td>
                                    <td className="py-[10px] px-5 text-center border border-secondary-2">Jakarta</td>
                                </tr>
                                <tr>
                                    <td className="py-[10px] px-5 border border-secondary-2">Poly mailer bag is oxo-biodegradable</td>
                                    <td className="py-[10px] px-5 text-center border border-secondary-2">Sukoharjo</td>
                                </tr>
                                <tr>
                                    <td className="py-[10px] px-5 border border-secondary-2">Thank you card made from repurposed sketching paper and hand-painted by MS</td>
                                    <td className="py-[10px] px-5 text-center border border-secondary-2">Jakarta</td>
                                </tr>
                                <tr>
                                    <td className="py-[10px] px-5 border border-secondary-2">Cut, trimmed and manufactured by Arunika</td>
                                    <td className="py-[10px] px-5 text-center border border-secondary-2">Jakarta</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="w-full hidden justify-center md:grid py-[135px] grid-cols-6 gap-[16px] md:grid-cols-[repeat(12,minmax(0,78px))] md:gap-[24px] px-6 md:px-0 aspect-[1443/1006] bg-secondary-2">
                <div className="col-span-12 flex flex-col items-center justify-center">
                    <img className="w-full aspect-video mt-[-470px]" src="/image/homepage/promocta.png" alt="" />
                    <div className="w-4/5 border border-primary-2 h-[1px] my-20"></div>
                    <div className="w-full">
                        <p className="font-montserrat text-[30px] text-primary-1 text-center mb-10">Playlist to accompany your day</p>
                        <iframe src="https://open.spotify.com/embed/playlist/0q4jLDoBlFmj9ry2gyRFMo?utm_source=generator" width="100%" height="352" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                    </div>
                </div>
            </div>
        </>
    )
}