interface ContactButtonProps{
    src: string;
    text: string;
    alt: string;
    href: string;
    className?: string;
    target?: string
};
export default function UnderlineButton({src,text,alt,href,target}:ContactButtonProps){
    return(
        <>
            <a target={target} className="w-full py-[13px] hover:border-opacity-30 border mb-[35px] border-solid border-accent-2 rounded justify-center content-center text-accent-2 hidden md:flex" href={href}><img height={20} className="mr-3" src={src} alt={alt} />{text}</a>
        </>
    )
};