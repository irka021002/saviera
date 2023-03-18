interface ProductGalleryProps{
    pic: string[]
}
import React, { useState,useEffect } from "react"
export default function ProductGallery({pic}:ProductGalleryProps){
    const [imageIndex, setImageIndex] = useState(0)
    let handlePreview = (e: React.SyntheticEvent<HTMLImageElement>) => {
        const productPreview = document.getElementById("productPreview") as HTMLImageElement
        if(productPreview && e.currentTarget.dataset["id"]){
            productPreview.src = e.currentTarget.src
            setImageIndex(parseInt(e.currentTarget.dataset["id"]))
        }
    }
    useEffect(() => {
        setImageIndex(0)
    },[pic])
    let [animate, setAnimate] = useState("-translate-x-full opacity-0")
    const handleNext = (e: React.SyntheticEvent<HTMLButtonElement>) => {
        const productPreview = document.getElementById("productPreview") as HTMLImageElement
        if(imageIndex < pic.length-1 && productPreview){
            productPreview.src = pic[imageIndex+1]
            setImageIndex(imageIndex+1)
        }else{
            setImageIndex(0)
            productPreview.src = pic[0]
        }
    }
    const handlePrev = (e: React.SyntheticEvent<HTMLButtonElement>) => {
        const productPreview = document.getElementById("productPreview") as HTMLImageElement
        if(imageIndex > 0 && productPreview){
            productPreview.src = pic[imageIndex-1]
            setImageIndex(imageIndex-1)
        }else{
            productPreview.src = pic[pic.length-1]
            setImageIndex(pic.length-1)
        }
    }
    useEffect(() => {
        setAnimate("translate-x-0 opacity-100")
    },[])
    return(
        <div className={`${animate} trasition-all duration-1000 ease-in-out col-span-6 md:col-span-4`}>
            <div className="w-full aspect-[384/517] relative">
                <img id="productPreview" className="w-full h-full object-contain" src={pic[0]} />
                <div className="absolute top-0 right-0 flex w-full h-full justify-between">
                    <button onClick={handlePrev} className="text-2xl">
                        &lt;
                    </button>
                    <button onClick={handleNext} className="text-2xl">
                        &gt;
                    </button>
                </div>
            </div>
            <div className="w-full flex flex-wrap justify-start gap-x-6">
                {
                    pic.map((v,i) => {
                        return(
                            <img key={"product"+i} data-id={i} onClick={handlePreview} className="w-[78px] aspect-[26/27] mt-5 cursor-pointer object-contain" src={v} />
                        )
                    })
                }
            </div>
        </div>
    )
}