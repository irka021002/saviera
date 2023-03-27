import React, { useState, useEffect } from 'react';
interface Review{
    anonymous: Boolean;
    name: string;
    message: string;
    products: Array<string>;
    rates: any;
}
interface ProductDetailProps{
    prodTitle: string;
    prodDesc: string;
    reviews: Array<Review> | undefined;
    product: string;
    prodInstruction: Array<string>;
    prodDetails: Array<string>;
    behindPiece: string;
    sizeFit: Array<string>;
    sizeNotes: string;
    madeClothesDesc: string;
    madeClothesImg: string;
    prodColors: { [key: string]: any; };
    setProductImage: React.Dispatch<React.SetStateAction<Array<string>>>;
    productLink: string;
    productPrice?: number;
}
export default function ProductDetail({prodTitle,prodDesc,reviews,product,prodInstruction,prodDetails,behindPiece,sizeFit,sizeNotes,madeClothesDesc,madeClothesImg,prodColors,setProductImage,productLink,productPrice}:ProductDetailProps){
    const [sizeDetail, setSizeDetail] = useState(false)
    const [details, setDetails] = useState(false)
    const [instruction, setInstruction] = useState(false)
    const [wmc, setWMC] = useState(false)
    const [animate, setAnimate] = useState("translate-x-full opacity-0")
    const productRate = reviews != undefined && reviews.length > 0 ? Math.ceil(reviews.reduce((prev, val) => { return prev + val.rates[product] },0)/reviews.length) : 0
    const handleSize = (e: React.SyntheticEvent<HTMLButtonElement>) => {
        const sd = document.getElementById("sizeDetail")
        if(sd){
            if(!sizeDetail){
                sd.style.maxHeight = "500px"
                sd.style.paddingTop = "12px"
                sd.style.paddingBottom = "12px"
                setSizeDetail(true)
                return;
            }
            sd.style.maxHeight = "0px"
            sd.style.paddingTop = "0px"
            sd.style.paddingBottom = "0px"
            setSizeDetail(false)
        }
    }
    const handleDetails = (e: React.SyntheticEvent<HTMLButtonElement>) => {
        const sd = document.getElementById("details")
        if(sd){
            if(!details){
                sd.style.maxHeight = "500px"
                sd.style.paddingTop = "12px"
                sd.style.paddingBottom = "12px"
                setDetails(true)
                return;
            }
            sd.style.maxHeight = "0px"
            sd.style.paddingTop = "0px"
            sd.style.paddingBottom = "0px"
            setDetails(false)
        }
    }
    const handleInstruction = (e: React.SyntheticEvent<HTMLButtonElement>) => {
        const sd = document.getElementById("instruction")
        if(sd){
            if(!instruction){
                sd.style.maxHeight = "500px"
                sd.style.paddingTop = "12px"
                sd.style.paddingBottom = "12px"
                setInstruction(true)
                return;
            }
            sd.style.maxHeight = "0px"
            sd.style.paddingTop = "0px"
            sd.style.paddingBottom = "0px"
            setInstruction(false)
        }
    }
    const handleWMC = (e: React.SyntheticEvent<HTMLButtonElement>) => {
        const sd = document.getElementById("wmc")
        if(sd){
            if(!wmc){
                sd.style.maxHeight = "2000px"
                sd.style.paddingTop = "12px"
                sd.style.paddingBottom = "12px"
                setWMC(true)
                return;
            }
            sd.style.maxHeight = "0px"
            sd.style.paddingTop = "0px"
            sd.style.paddingBottom = "0px"
            setWMC(false)
        }
    }
    useEffect(() => {
        setAnimate("translate-x-0 opacity-100")
    },[])
    return(
        <div className={`${animate} transition-all duration-1000 ease-in-out col-span-6 md:col-span-8 mb-[130px]`}>
            <div className="w-full p-8 border border-secondary-1">
                <h1 className="font-aboreto text-[52px] text-center leading-[135%]">{prodTitle}</h1>
                <p className="font-trap leading-[150%] mt-5" dangerouslySetInnerHTML={{__html: prodDesc}}></p>
                {productPrice && <p className='font-trap leading-[150%] mt-2 text-center text-xl'>Rp {(new Intl.NumberFormat('en-US')).format(productPrice)}</p>}
                {   Object.keys(prodColors).length !== 0  &&
                    <div className='mt-5'>
                        <p className='font-trap text-base'>Available colors:</p>
                        <div className='flex mt-3 gap-6'>
                            {  
                                Object.keys(prodColors).map(key => {
                                    return(
                                        <button key={key} onClick={(e: React.SyntheticEvent<HTMLButtonElement>) => setProductImage(prodColors[key][1])}>
                                            <div className='flex flex-col justify-center items-center'>
                                                <span className='w-[40px] h-[40px] rounded-full' style={{backgroundColor: prodColors[key][0], border: prodColors[key][0] == "#FFFFFF" ||  prodColors[key][0] == "#fbfcfd" ? "1px solid rgba(0, 0, 0, 0.28)" : ""}} />
                                                <p className='font-trap text-sm mt-1'>{key}</p>
                                            </div>
                                        </button>
                                    )
                                })
                            }
                        </div>
                    </div>
                }
                <div className="mt-5 flex flex-col md:flex-row items-center md:items-start">
                    { (reviews && reviews.length > 0) &&
                        <div className="flex mr-5">
                            { 
                                [...Array(productRate)].map((v,i) => {
                                    return(
                                        <svg key={"reviewStarFill" + i} className={i != 4 ? "mr-1" : ""} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.5248 8.83679C14.5736 6.22213 15.098 4.91479 15.9998 4.91479C16.9016 4.91479 17.426 6.22213 18.4748 8.83679L18.5236 8.95855C19.1161 10.4357 19.4124 11.1743 20.0162 11.6232C20.62 12.0721 21.4126 12.1431 22.9978 12.2851L23.2844 12.3107C25.8788 12.5431 27.176 12.6593 27.4536 13.4846C27.7312 14.3099 26.7678 15.1863 24.8411 16.9393L24.1981 17.5243C23.2227 18.4117 22.735 18.8553 22.5077 19.4368C22.4653 19.5453 22.4301 19.6564 22.4022 19.7695C22.2528 20.3757 22.3956 21.0194 22.6812 22.3067L22.7701 22.7074C23.295 25.0731 23.5575 26.256 23.0992 26.7663C22.928 26.9569 22.7055 27.0942 22.4582 27.1616C21.7966 27.3422 20.8573 26.5768 18.9787 25.046C17.7452 24.0408 17.1284 23.5382 16.4203 23.4252C16.1417 23.3807 15.8579 23.3807 15.5793 23.4252C14.8712 23.5382 14.2544 24.0408 13.0209 25.046C11.1423 26.5768 10.203 27.3422 9.54135 27.1616C9.29413 27.0942 9.07158 26.9569 8.90035 26.7663C8.44211 26.256 8.70456 25.0731 9.22946 22.7074L9.31836 22.3067C9.60397 21.0194 9.74678 20.3757 9.59737 19.7695C9.5695 19.6564 9.53426 19.5453 9.49186 19.4368C9.26456 18.8553 8.77688 18.4117 7.80154 17.5243L7.1585 16.9393C5.23178 15.1863 4.26841 14.3099 4.54598 13.4846C4.82356 12.6593 6.12077 12.5431 8.71518 12.3107L9.00177 12.2851C10.587 12.1431 11.3796 12.0721 11.9834 11.6232C12.5872 11.1743 12.8835 10.4357 13.476 8.95855L13.5248 8.83679Z" fill="#BF9553" stroke="#3A3A3A" strokeWidth="0.56"/>
                                        </svg>
                                    )
                                })
                            }
                            { 
                                [...Array(5-productRate)].map((v,i) => {
                                    return(
                                        <svg key={"reviewStarUnfill" + i} className={i != 4 ? "mr-1" : ""} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.5248 8.83679C14.5736 6.22213 15.098 4.91479 15.9998 4.91479C16.9016 4.91479 17.426 6.22213 18.4748 8.83679L18.5236 8.95855C19.1161 10.4357 19.4124 11.1743 20.0162 11.6232C20.62 12.0721 21.4126 12.1431 22.9978 12.2851L23.2844 12.3107C25.8788 12.5431 27.176 12.6593 27.4536 13.4846C27.7312 14.3099 26.7678 15.1863 24.8411 16.9393L24.1981 17.5243C23.2227 18.4117 22.735 18.8553 22.5077 19.4368C22.4653 19.5453 22.4301 19.6564 22.4022 19.7695C22.2528 20.3757 22.3956 21.0194 22.6812 22.3067L22.7701 22.7074C23.295 25.0731 23.5575 26.256 23.0992 26.7663C22.928 26.9569 22.7055 27.0942 22.4582 27.1616C21.7966 27.3422 20.8573 26.5768 18.9787 25.046C17.7452 24.0408 17.1284 23.5382 16.4203 23.4252C16.1417 23.3807 15.8579 23.3807 15.5793 23.4252C14.8712 23.5382 14.2544 24.0408 13.0209 25.046C11.1423 26.5768 10.203 27.3422 9.54135 27.1616C9.29413 27.0942 9.07158 26.9569 8.90035 26.7663C8.44211 26.256 8.70456 25.0731 9.22946 22.7074L9.31836 22.3067C9.60397 21.0194 9.74678 20.3757 9.59737 19.7695C9.5695 19.6564 9.53425 19.5453 9.49185 19.4368C9.26456 18.8553 8.77688 18.4117 7.80154 17.5243L7.1585 16.9393C5.23178 15.1863 4.26841 14.3099 4.54598 13.4846C4.82356 12.6593 6.12077 12.5431 8.71518 12.3107L9.00177 12.2851C10.587 12.1431 11.3796 12.0721 11.9834 11.6232C12.5872 11.1743 12.8835 10.4357 13.476 8.95855L13.5248 8.83679Z" stroke="#3A3A3A" strokeWidth="0.56"/>
                                        </svg>
                                    )
                                })
                            }
                        </div>
                    }
                    {   reviews != undefined && reviews.length > 0 ? 
                        <a href='#review' className="flex items-center font-montserrat font-medium mt-3 md:mt-0 leading-[150%] text-secondary-1">
                            WHAT THEY SAY
                            <svg className="ml-2" width="25" height="12" viewBox="0 0 25 12" fill="none" xmlns="htta://www.w3.org/2000/svg">
                                <path d="M1 6H24.5M24.5 6L19.5 1M24.5 6L19.5 11" stroke="#BF9553" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </a>
                        :
                        <span></span>
                    }
                </div>
                <a target="_blank" href={productLink} className="block text-center hover:border-opacity-30 mt-8 border border-accent-2 rounded w-full p-[10px] fant-montserrat font-medium leading-[150%] text-accent-2">
                    OWN THIS ITEM
                </a>
            </div>
            <div className="w-full mt-[60px]">
                <h2 className="p-3 flex justify-between items-center font-montserrat text-secondary-2 font-bold text-xl md:text-3xl bg-cream-1">
                    Size & fit
                    <button onClick={handleSize}>
                        { !sizeDetail ?
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 8L16 24" stroke="#222222" strokeWidth="0.64" strokeLinecap="square" strokeLinejoin="round"/>
                                <path d="M24 16L8 16" stroke="#222222" strokeWidth="0.64" strokeLinecap="square" strokeLinejoin="round"/>
                            </svg>
                            :
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24 16L8 16" stroke="#222222" strokeWidth="0.64" strokeLinecap="square" strokeLinejoin="round"/>
                            </svg>
                        }
                    </button>
                </h2>
                <div id="sizeDetail" className="mt-3 font-trap text-base bg-cream-1 text-secondary-2 overflow-hidden transition-[max-height,padding] ease-linear px-3 duration-1000" style={{maxHeight: "0px", paddingTop: "0px", paddingBottom: "0px"}}>
                    <ul className="list-disc ml-[20px]">
                        {sizeFit.map((v,i) => <li key={"sizeDetialList"+i}>{v}</li>)}
                    </ul>
                    <br />
                    <span className='font-bold'>{sizeNotes}</span>
                </div>
            </div>
            <div className="w-full mt-10">
                <h2 className="p-3 flex justify-between items-center font-montserrat text-secondary-2 font-bold text-xl md:text-3xl bg-cream-1">
                    Details
                    <button onClick={handleDetails}>
                        { !details ?
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 8L16 24" stroke="#222222" strokeWidth="0.64" strokeLinecap="square" strokeLinejoin="round"/>
                                <path d="M24 16L8 16" stroke="#222222" strokeWidth="0.64" strokeLinecap="square" strokeLinejoin="round"/>
                            </svg>
                            :
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24 16L8 16" stroke="#222222" strokeWidth="0.64" strokeLinecap="square" strokeLinejoin="round"/>
                            </svg>
                        }
                    </button>
                </h2>
                <div id='details' className="mt-3 px-3 font-trap text-xl bg-cream-1 text-secondary-2 overflow-hidden transition-[max-height,padding] ease-linear duration-1000" style={{maxHeight: "0px", paddingTop: "0px", paddingBottom: "0px"}}>
                    <ul className="list-disc list-inside text-base">
                        {
                            prodDetails && prodDetails.map((v,i) => {
                                return(<li key={"detials"+i}>{v}</li>)
                            })
                        }
                    </ul>
                </div>
            </div>
            <div className="w-full mt-10">
                <h2 className="p-3 font-montserrat flex justify-between items-center text-secondary-2 font-bold text-xl md:text-3xl bg-cream-1">
                    Care Instruction
                    <button onClick={handleInstruction}>
                        { !instruction ?
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 8L16 24" stroke="#222222" strokeWidth="0.64" strokeLinecap="square" strokeLinejoin="round"/>
                                <path d="M24 16L8 16" stroke="#222222" strokeWidth="0.64" strokeLinecap="square" strokeLinejoin="round"/>
                            </svg>
                            :
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24 16L8 16" stroke="#222222" strokeWidth="0.64" strokeLinecap="square" strokeLinejoin="round"/>
                            </svg>
                        }
                    </button>
                </h2>
                <div id='instruction' className="mt-3 px-3 font-trap text-xl bg-cream-1 text-secondary-2 overflow-hidden transition-[max-height,padding] ease-linear duration-1000" style={{maxHeight: "0px", paddingTop: "0px", paddingBottom: "0px"}}>
                    <ul className="list-disc ml-[20px] text-base">
                        {
                            prodInstruction && prodInstruction.map((v,i) => {
                                return(<li key={"intruction"+i}>{v}</li>)
                            })
                        }
                    </ul>
                </div>
            </div>
            <div className="w-full mt-10">
                <h2 className="p-3 font-montserrat flex justify-between items-center text-secondary-2 font-bold text-xl md:text-3xl bg-cream-1">
                    Who made my clothes?
                    <button onClick={handleWMC}>
                        { !wmc ?
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 8L16 24" stroke="#222222" strokeWidth="0.64" strokeLinecap="square" strokeLinejoin="round"/>
                                <path d="M24 16L8 16" stroke="#222222" strokeWidth="0.64" strokeLinecap="square" strokeLinejoin="round"/>
                            </svg>
                            :
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24 16L8 16" stroke="#222222" strokeWidth="0.64" strokeLinecap="square" strokeLinejoin="round"/>
                            </svg>
                        }
                    </button>
                </h2>
                <div id='wmc' className="mt-3 px-3 font-trap text-xl bg-cream-1 text-secondary-2 flex flex-col md:flex-row overflow-hidden transition-[max-height,padding] ease-linear duration-1000" style={{maxHeight: "0px", paddingTop: "0px", paddingBottom: "0px"}}>
                    <div className="w-full md:w-7/12 aspect-[192/119] bg-contain bg-center bg-no-repeat" style={{backgroundImage: `url(${madeClothesImg})`}}></div>
                    <div className="w-full md:w-5/12 py-[27px] px-[34px]">
                        <p className="font-trap text-base text-secondary-2 leading-[150%]" dangerouslySetInnerHTML={{__html: madeClothesDesc}}></p>
                    </div>
                </div>
            </div>
            <div className="w-full mt-10">
                <h2 className="font-montserrat font-bold text-xl md:text-3xl text-secondary-2 leading-[135%]">Behind this piece</h2>
                <p className="mt-3 font-trap leading-[150%]" dangerouslySetInnerHTML={{__html: behindPiece}} />
            </div>
            {   reviews != undefined && reviews.length > 0 ?
                <div id='review' className="relative mt-10">
                    <h2 className="font-montserrat font-bold text-xl md:text-3xl text-secondary-2 leading-[135%]">What They Talked About</h2>
                    <div className="w-full mt-3 overflow-x-auto scrollbar-hide md:hidden">
                        <div className="w-fit flex">
                            {
                                reviews && reviews.map((v: Review) => {
                                        return(
                                            <div key={"reviewMobile" + v.name} className="px-5 min-w-[330px] min-h-[175px] py-[17px] border border-secondary-2 w-[200px] mr-6">
                                                <p className="font-montserrat leading-[135%]">{v.anonymous ? "Anonymous" : v.name}</p>
                                                <div className="flex mt-1">
                                                    {
                                                        [...Array(v.rates[product])].map((item,i) => {
                                                            return(
                                                                <svg key={"mobileStarFill" + i + v.name} className={i != 4 ? "mr-1" : ""} width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M13.5248 8.83679C14.5736 6.22213 15.098 4.91479 15.9998 4.91479C16.9016 4.91479 17.426 6.22213 18.4748 8.83679L18.5236 8.95855C19.1161 10.4357 19.4124 11.1743 20.0162 11.6232C20.62 12.0721 21.4126 12.1431 22.9978 12.2851L23.2844 12.3107C25.8788 12.5431 27.176 12.6593 27.4536 13.4846C27.7312 14.3099 26.7678 15.1863 24.8411 16.9393L24.1981 17.5243C23.2227 18.4117 22.735 18.8553 22.5077 19.4368C22.4653 19.5453 22.4301 19.6564 22.4022 19.7695C22.2528 20.3757 22.3956 21.0194 22.6812 22.3067L22.7701 22.7074C23.295 25.0731 23.5575 26.256 23.0992 26.7663C22.928 26.9569 22.7055 27.0942 22.4582 27.1616C21.7966 27.3422 20.8573 26.5768 18.9787 25.046C17.7452 24.0408 17.1284 23.5382 16.4203 23.4252C16.1417 23.3807 15.8579 23.3807 15.5793 23.4252C14.8712 23.5382 14.2544 24.0408 13.0209 25.046C11.1423 26.5768 10.203 27.3422 9.54135 27.1616C9.29413 27.0942 9.07158 26.9569 8.90035 26.7663C8.44211 26.256 8.70456 25.0731 9.22946 22.7074L9.31836 22.3067C9.60397 21.0194 9.74678 20.3757 9.59737 19.7695C9.5695 19.6564 9.53426 19.5453 9.49186 19.4368C9.26456 18.8553 8.77688 18.4117 7.80154 17.5243L7.1585 16.9393C5.23178 15.1863 4.26841 14.3099 4.54598 13.4846C4.82356 12.6593 6.12077 12.5431 8.71518 12.3107L9.00177 12.2851C10.587 12.1431 11.3796 12.0721 11.9834 11.6232C12.5872 11.1743 12.8835 10.4357 13.476 8.95855L13.5248 8.83679Z" fill="#BF9553" stroke="#3A3A3A" strokeWidth="0.56"/>
                                                                </svg>
                                                            )
                                                        })
                                                    }
                                                    {
                                                        [...Array((5-v.rates[product]))].map((item,i) => {
                                                            return(
                                                                <svg key={"mobileStarUnfill" + i + v.name} className={i != 4 ? "mr-1" : ""} width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M13.5248 8.83679C14.5736 6.22213 15.098 4.91479 15.9998 4.91479C16.9016 4.91479 17.426 6.22213 18.4748 8.83679L18.5236 8.95855C19.1161 10.4357 19.4124 11.1743 20.0162 11.6232C20.62 12.0721 21.4126 12.1431 22.9978 12.2851L23.2844 12.3107C25.8788 12.5431 27.176 12.6593 27.4536 13.4846C27.7312 14.3099 26.7678 15.1863 24.8411 16.9393L24.1981 17.5243C23.2227 18.4117 22.735 18.8553 22.5077 19.4368C22.4653 19.5453 22.4301 19.6564 22.4022 19.7695C22.2528 20.3757 22.3956 21.0194 22.6812 22.3067L22.7701 22.7074C23.295 25.0731 23.5575 26.256 23.0992 26.7663C22.928 26.9569 22.7055 27.0942 22.4582 27.1616C21.7966 27.3422 20.8573 26.5768 18.9787 25.046C17.7452 24.0408 17.1284 23.5382 16.4203 23.4252C16.1417 23.3807 15.8579 23.3807 15.5793 23.4252C14.8712 23.5382 14.2544 24.0408 13.0209 25.046C11.1423 26.5768 10.203 27.3422 9.54135 27.1616C9.29413 27.0942 9.07158 26.9569 8.90035 26.7663C8.44211 26.256 8.70456 25.0731 9.22946 22.7074L9.31836 22.3067C9.60397 21.0194 9.74678 20.3757 9.59737 19.7695C9.5695 19.6564 9.53425 19.5453 9.49185 19.4368C9.26456 18.8553 8.77688 18.4117 7.80154 17.5243L7.1585 16.9393C5.23178 15.1863 4.26841 14.3099 4.54598 13.4846C4.82356 12.6593 6.12077 12.5431 8.71518 12.3107L9.00177 12.2851C10.587 12.1431 11.3796 12.0721 11.9834 11.6232C12.5872 11.1743 12.8835 10.4357 13.476 8.95855L13.5248 8.83679Z" stroke="#3A3A3A" strokeWidth="0.56"/>
                                                                </svg>
                                                            )
                                                        })
                                                    }
                                                </div>
                                                <p className="font-trap text-[14px] mt-3 text-justify">
                                                    {v.message || ""}
                                                </p>
                                            </div>
                                        )
                                    })
                            }
                        </div>
                    </div>
                    <div id="carouselReview" className="carousel slide relative w-full mt-3 md:flex hidden" data-bs-ride="carousel">
                        <div className="justify-center items-center flex mr-6">
                            <button
                                className="carousel-control-prev w-fit border rounded-full border-secondary-2 py-[10px] px-[13px] p-0 text-center hover:outline-none hover:no-underline focus:outline-none focus:no-underline"
                                type="button"
                                data-bs-target="#carouselReview"
                                data-bs-slide="prev"
                            >
                                <svg width="8" height="15" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.99902 13.2804L0.999023 7.28043L6.99902 1.28043" stroke="#3A3A3A" strokeWidth="1.62732" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                        </div>
                        <div className="carousel-inner relative w-full overflow-hidden">
                            <div className="carousel-item active relative float-left w-full">
                                {
                                    reviews && [...Array(Math.ceil(reviews.length/2))].map((v,i) => {
                                        return(
                                            <div key={"reviewGroup" + i} className="w-full flex justify-between">
                                                {
                                                    reviews.splice(0,2).map((v: Review) => {
                                                        return(
                                                            <div key={"reviewDesktop" + v.name} className="px-5 py-[17px] min-w-[330px] min-h-[175px] border border-secondary-2 max-w-xs">
                                                                <p className="font-montserrat leading-[135%]">{v.anonymous ? "anonymous" : v.name}</p>
                                                                <div className="flex mt-1">
                                                                    {
                                                                        [...Array(v.rates[product])].map((item,i) => {
                                                                            return(
                                                                                <svg key={"desktopStarFill" + i + v.name} className={i != 4 ? "mr-1": ""} width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                    <path d="M13.5248 8.83679C14.5736 6.22213 15.098 4.91479 15.9998 4.91479C16.9016 4.91479 17.426 6.22213 18.4748 8.83679L18.5236 8.95855C19.1161 10.4357 19.4124 11.1743 20.0162 11.6232C20.62 12.0721 21.4126 12.1431 22.9978 12.2851L23.2844 12.3107C25.8788 12.5431 27.176 12.6593 27.4536 13.4846C27.7312 14.3099 26.7678 15.1863 24.8411 16.9393L24.1981 17.5243C23.2227 18.4117 22.735 18.8553 22.5077 19.4368C22.4653 19.5453 22.4301 19.6564 22.4022 19.7695C22.2528 20.3757 22.3956 21.0194 22.6812 22.3067L22.7701 22.7074C23.295 25.0731 23.5575 26.256 23.0992 26.7663C22.928 26.9569 22.7055 27.0942 22.4582 27.1616C21.7966 27.3422 20.8573 26.5768 18.9787 25.046C17.7452 24.0408 17.1284 23.5382 16.4203 23.4252C16.1417 23.3807 15.8579 23.3807 15.5793 23.4252C14.8712 23.5382 14.2544 24.0408 13.0209 25.046C11.1423 26.5768 10.203 27.3422 9.54135 27.1616C9.29413 27.0942 9.07158 26.9569 8.90035 26.7663C8.44211 26.256 8.70456 25.0731 9.22946 22.7074L9.31836 22.3067C9.60397 21.0194 9.74678 20.3757 9.59737 19.7695C9.5695 19.6564 9.53426 19.5453 9.49186 19.4368C9.26456 18.8553 8.77688 18.4117 7.80154 17.5243L7.1585 16.9393C5.23178 15.1863 4.26841 14.3099 4.54598 13.4846C4.82356 12.6593 6.12077 12.5431 8.71518 12.3107L9.00177 12.2851C10.587 12.1431 11.3796 12.0721 11.9834 11.6232C12.5872 11.1743 12.8835 10.4357 13.476 8.95855L13.5248 8.83679Z" fill="#BF9553" stroke="#3A3A3A" strokeWidth="0.56"/>
                                                                                </svg>
                                                                            )
                                                                        })
                                                                    }
                                                                    {
                                                                        [...Array(5-v.rates[product])].map((item,i) => {
                                                                            return(
                                                                                <svg key={"desktopStarUnfill" + i + v.name} width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                    <path d="M13.5248 8.83679C14.5736 6.22213 15.098 4.91479 15.9998 4.91479C16.9016 4.91479 17.426 6.22213 18.4748 8.83679L18.5236 8.95855C19.1161 10.4357 19.4124 11.1743 20.0162 11.6232C20.62 12.0721 21.4126 12.1431 22.9978 12.2851L23.2844 12.3107C25.8788 12.5431 27.176 12.6593 27.4536 13.4846C27.7312 14.3099 26.7678 15.1863 24.8411 16.9393L24.1981 17.5243C23.2227 18.4117 22.735 18.8553 22.5077 19.4368C22.4653 19.5453 22.4301 19.6564 22.4022 19.7695C22.2528 20.3757 22.3956 21.0194 22.6812 22.3067L22.7701 22.7074C23.295 25.0731 23.5575 26.256 23.0992 26.7663C22.928 26.9569 22.7055 27.0942 22.4582 27.1616C21.7966 27.3422 20.8573 26.5768 18.9787 25.046C17.7452 24.0408 17.1284 23.5382 16.4203 23.4252C16.1417 23.3807 15.8579 23.3807 15.5793 23.4252C14.8712 23.5382 14.2544 24.0408 13.0209 25.046C11.1423 26.5768 10.203 27.3422 9.54135 27.1616C9.29413 27.0942 9.07158 26.9569 8.90035 26.7663C8.44211 26.256 8.70456 25.0731 9.22946 22.7074L9.31836 22.3067C9.60397 21.0194 9.74678 20.3757 9.59737 19.7695C9.5695 19.6564 9.53425 19.5453 9.49185 19.4368C9.26456 18.8553 8.77688 18.4117 7.80154 17.5243L7.1585 16.9393C5.23178 15.1863 4.26841 14.3099 4.54598 13.4846C4.82356 12.6593 6.12077 12.5431 8.71518 12.3107L9.00177 12.2851C10.587 12.1431 11.3796 12.0721 11.9834 11.6232C12.5872 11.1743 12.8835 10.4357 13.476 8.95855L13.5248 8.83679Z" stroke="#3A3A3A" strokeWidth="0.56"/>
                                                                                </svg>
                                                                            )
                                                                        })
                                                                    }
                                                                </div>
                                                                <p className="font-trap text-[14px] mt-3 text-justify">
                                                                    {v.message || ""}
                                                                </p>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="justify-center items-center flex ml-6">
                            <button
                                className="carousel-control-next w-fit border rounded-full border-secondary-2 py-[10px] px-[13px] p-0 text-center hover:outline-none hover:no-underline focus:outline-none focus:no-underline"
                                type="button"
                                data-bs-target="#carouselReview"
                                data-bs-slide="next"
                            >
                                <svg width="8" height="15" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.963868 13.2804L6.96387 7.28043L0.963868 1.28043" stroke="#3A3A3A" strokeWidth="1.62732" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                :
                <div></div>
            }
        </div>
    )
}