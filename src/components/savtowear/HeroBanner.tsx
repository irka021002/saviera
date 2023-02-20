export default function HeroBanner(){
    return(
        <div className="bg-[url(/image/savtowear/hero.png)] px-6 md:px-0 aspect-[130/253] bg-cover md:bg-auto bg-no-repeat md:aspect-[720/281] mt-[-80px] md:mt-[-100px] text-center flex flex-col justify-center">
            <h1 className="font-aboreto text-[40px] leading-[135%] text-secondary-2">
                YAY!<br className="md:hidden" /> YOU HAVE MADE IT!
            </h1>
            <p className="font-trap text-2xl leading-[150%] mt-10 text-secondary-2">
                You have intentionally chosen a small step toward your own <br/> conscious fashion staple movement
                <br/>through our very first collection, <span className="font-bold">Archetypes.</span>
            </p>
        </div>
    )
}