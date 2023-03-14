import { useState, useEffect } from 'react';
interface ArchetypesCarousel{
    image: string;
    text: string;
}
interface ArchetypesInfoProps{
    carousel: Array<ArchetypesCarousel>;
    afterTable: string;
}
export default function ArchetypesInfo({carousel,afterTable}:ArchetypesInfoProps){
    const [animateHeader, setAnimateHeader] = useState("translate-y-full opacity-0")
    const [animateCarousel, setAnimateCarousel] = useState("-translate-x-full opacity-0")
    const [animateTableText, setAnimateTableText] = useState("-translate-y-full opacity-0")
    const [animateTable, setAnimateTable] = useState("translate-x-full opacity-0")
    const [animatePlayListImage, setAnimatePlayListImage] = useState("translate-y-full opacity-0")
    const [animatePlayList, setAnimatePlayList] = useState("max-h-0 py-0")

    const observerHeader = new IntersectionObserver(entries => entries.forEach(entry => {if(entry.isIntersecting) setAnimateHeader("translate-y-0 opacity-100")}))
    const observerCarousel = new IntersectionObserver(entries => entries.forEach(entry => {if(entry.isIntersecting) setAnimateCarousel("translate-x-0 opacity-100")}))
    const observerTable = new IntersectionObserver(entries => entries.forEach(entry => {if(entry.isIntersecting) {setAnimateTableText("translate-y-0 opacity-100");setAnimateTable("translate-x-0 opacity-100")}}))
    const observerPlayList = new IntersectionObserver(entries => entries.forEach(entry => {if(entry.isIntersecting) {setAnimatePlayListImage("translate-y-0 opacity-100");setAnimatePlayList("max-h-[2000px] py-[135px]")}}))

    useEffect(() => {
        const elementHeader = document.getElementById("headerWrapper")
        const elmentCarousel = document.getElementById("carouselArch")
        const elementTable = document.getElementById("tableWrapper")
        const elementPlayList = document.getElementById("playListWrapper")

        if(elementHeader) observerHeader.observe(elementHeader)
        if(elmentCarousel) observerCarousel.observe(elmentCarousel)
        if(elementTable) observerTable.observe(elementTable)
        if(elementPlayList) observerPlayList.observe(elementPlayList)

        return () => {
            if(elementHeader) observerHeader.unobserve(elementHeader)
            if(elmentCarousel) observerCarousel.unobserve(elmentCarousel)
            if(elementTable) observerTable.unobserve(elementTable)
            if(elementPlayList) observerPlayList.unobserve(elementPlayList)
        }
    },[])

    return(
        <>
            <div className="pt-20 md:pb-[472px] bg-primary-2 justify-center grid grid-cols-6 gap-[16px] md:grid-cols-[repeat(12,minmax(0,78px))] md:gap-[24px] px-6 md:px-0">
                <div id="headerWrapper" className={`col-span-6 md:col-span-12`}>
                    <div className={`text-center text-secondary-2 ${animateHeader} transition-all duration-700 ease-in-out`}>
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
                    <div id="carouselArch" className={`${animateCarousel} transition-all duration-700 ease-in-out carousel slide relative`} data-bs-ride="carousel">
                        <div className="carousel-inner relative aspect-[104/59] w-full overflow-hidden">
                            {  carousel &&
                                carousel.map((v,i) => {
                                    return(
                                        <div key={"archetypesCarousel"+i} className={i == 0 ? "carousel-item active relative float-left w-full aspect-[104/59]" : "carousel-item relative float-left w-full aspect-[104/59]"}>
                                            <div className="bg-[rgba(0,0,0,0.3)] absolute w-full h-full flex justify-center items-center">
                                                <h2 className="text-center text-primary-2 font-montserrat text-[20px] md:text-[64px] font-normal">{v.text}</h2>
                                            </div>
                                            <img
                                                src={v.image}
                                                className="block w-full aspect-[104/59]"
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
                            data-bs-target="#carouselArch"
                            data-bs-slide="prev"
                        >
                            <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                            className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                            type="button"
                            data-bs-target="#carouselArch"
                            data-bs-slide="next"
                        >
                            <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    <div id='tableWrapper' className='mt-20'>
                        <p className={`${animateTableText} transition-all duration-700 ease-in-out text-secondary-2 font-trap text-xl leading-[150%] text-center`}>
                            The collection provides essential staples that are versatile and purposeful. 
                            <br/>
                            Wear it for business meetings, for a casual office look, or on the weekends. 
                            <br/><br/>
                            Below is information of materials, trims, and packaging used in our collection:
                        </p>
                        <table className={`${animateTable} transition-all duration-700 ease-in-out w-10/12 m-auto text-secondary-2 mt-8`}>
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
            <div id='playListWrapper' className={`${animatePlayList} transition-all duration-700 ease-in-out w-full hidden justify-center md:grid grid-cols-6 gap-[16px] md:grid-cols-[repeat(12,minmax(0,78px))] md:gap-[24px] px-6 md:px-0 aspect-[1443/1006] bg-secondary-2`}>
                <div className="col-span-12 flex flex-col items-center justify-center">
                    <img className={`${animatePlayListImage} transition-all duration-700 ease-in-out w-full aspect-video mt-[-470px]`} src={afterTable} alt="" />
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