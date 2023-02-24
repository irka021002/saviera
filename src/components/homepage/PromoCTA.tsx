interface CTA{
    title: string;
    description: string;
}
interface CTAProps{
    cta: CTA;
}
export default function PromoCTA({cta}:CTAProps){
    return(
        <div className="bg-[url(/image/homepage/promocta.png)] bg-clip-border aspect-[360/323] md:aspect-auto flex md:block justify-center items-center">
            <div className="md:hidden p-3 text-secondary-2 bg-[#f2f2f2] md:mt-[180px] md:mb-[190px] w-4/5 h-fit">
                <h2 className="text-2xl font-aboreto">{cta.title}</h2>
                <p className="mt-3 md:mt-10">{cta.description}</p>
            </div>
            <div className="hidden justify-center md:grid grid-cols-6 gap-[16px] md:grid-cols-[repeat(12,minmax(0,78px))] md:gap-[24px]">
                <div className="col-span-5 p-[60px] text-secondary-2 bg-[#f2f2f2] md:mt-[180px] md:mb-[190px]">
                    <h2 className="text-2xl font-aboreto">{cta.title}</h2>
                    <p className="mt-10">{cta.description}</p>
                </div>
            </div>
        </div>
    )
}