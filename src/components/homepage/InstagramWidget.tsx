export default function InstagramWidget(){
    return(
        <div className="pt-20 pb-[160px] bg-primary-2">
            <div className="justify-center grid grid-cols-6 gap-[16px] px-6 md:px-0 md:grid-cols-[repeat(12,minmax(0,78px))] md:gap-[24px]">
                <div className="col-span-6 md:col-span-12 grid-cols-3 grid md:grid-cols-4 gap-[3px]">
                    <div className="bg-[#b9b9b9] aspect-square"></div>
                    <div className="bg-[#c5c5c5] aspect-square"></div>
                    <div className="bg-[#b9b9b9] aspect-square"></div>
                    <div className="bg-[#c5c5c5] aspect-square"></div>
                    <div className="bg-[#c5c5c5] aspect-square"></div>
                    <div className="bg-[#b9b9b9] aspect-square"></div>
                    <div className="bg-[#c5c5c5] aspect-square hidden md:block"></div>
                    <div className="bg-[#b9b9b9] aspect-square hidden md:block"></div>
                </div>
            </div>
        </div>
    )
}