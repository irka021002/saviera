export default function InstagramWidget(){
    return(
        <div className="pt-20 pb-[160px]">
            <div className="justify-center grid grid-cols-[repeat(4,minmax(0,78px))] md:grid-cols-[repeat(12,minmax(0,78px))] gap-[24px]">
                <div className="col-span-12 grid grid-cols-4 gap-[3px]">
                    <div className="bg-[#b9b9b9] aspect-square"></div>
                    <div className="bg-[#c5c5c5] aspect-square"></div>
                    <div className="bg-[#b9b9b9] aspect-square"></div>
                    <div className="bg-[#c5c5c5] aspect-square"></div>
                    <div className="bg-[#c5c5c5] aspect-square"></div>
                    <div className="bg-[#b9b9b9] aspect-square"></div>
                    <div className="bg-[#c5c5c5] aspect-square"></div>
                    <div className="bg-[#b9b9b9] aspect-square"></div>
                </div>
            </div>
        </div>
    )
}