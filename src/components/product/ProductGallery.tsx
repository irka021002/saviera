interface ProductGalleryProps{
    pic: string[]
}
export default function ProductGallery({pic}:ProductGalleryProps){
    let handlePreview = (e: any) => {
        const productPreview = document.getElementById("productPreview") as HTMLImageElement
        if(productPreview){
            console.log(e)
            productPreview.src = e.target.src
        }
    }
    return(
        <div className="col-span-6 md:col-span-4">
            <div className="w-full aspect-[384/517]">
                <img id="productPreview" className="w-full h-full" src={pic[0]} />
            </div>
            <div className="w-full flex flex-wrap justify-between">
                {
                    pic.map(v => {
                        return(
                            <img onClick={handlePreview} className="w-[78px] aspect-[26/27] mt-5 cursor-pointer" src={v} />
                        )
                    })
                }
            </div>
        </div>
    )
}