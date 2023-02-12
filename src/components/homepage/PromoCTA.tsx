export default function PromoCTA(){
    return(
        <div className="bg-[url(/image/homepage/promocta.png)] bg-clip-border">
            <div className="justify-center grid grid-cols-[repeat(4,minmax(0,78px))] md:grid-cols-[repeat(12,minmax(0,78px))] gap-[24px]">
                <div className="col-span-5 p-[60px] text-secondary-2 bg-[#f2f2f2] md:mt-[180px] md:mb-[190px]">
                    <h2 className="text-2xl font-aboreto">PROMO CTA</h2>
                    <p className="mt-10">Desc for CTA</p>
                </div>
            </div>
        </div>
    )
}