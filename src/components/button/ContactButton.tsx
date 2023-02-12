interface ContactButtonProps{
    src: string;
    text: string;
    alt: string;
    href: string;
};
export default function UnderlineButton({src,text,alt,href}:ContactButtonProps){
    return(
        <>
            <a className="w-full py-[13px] border mb-[35px] border-solid border-accent-2 rounded flex justify-center content-center text-accent-2" href={href}><img height={20} className="mr-3" src={src} alt={alt} />{text}</a>
        </>
    )
};