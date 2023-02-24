interface InstagramWidgetProps{
    instaPic: Array<string>;
}
export default function InstagramWidget({instaPic}: InstagramWidgetProps){
    return(
        <div className="pt-20 pb-[160px] bg-primary-2">
            <div className="justify-center grid grid-cols-6 gap-[16px] px-6 md:px-0 md:grid-cols-[repeat(12,minmax(0,78px))] md:gap-[24px]">
                <div className="col-span-6 md:col-span-12 grid-cols-3 hidden md:grid md:grid-cols-4 gap-[3px]">
                    {
                        instaPic.length > 0 && instaPic.slice(0,8).map((v,i) => {
                            return(
                                <div key={i} className="aspect-square" style={{backgroundImage: `url(${v})`}}></div>
                            )   
                        })
                    }
                </div>
                <div className="col-span-6 md:col-span-12 grid-cols-3 grid md:hidden md:grid-cols-4 gap-[3px]">
                    {
                        instaPic.length > 0 && instaPic.slice(0,6).map((v,i) => {
                            return(
                                <div key={i} className="aspect-square" style={{backgroundImage: `url(${v})`}}></div>
                            )   
                        })
                    }
                </div>
            </div>
        </div>
    )
}