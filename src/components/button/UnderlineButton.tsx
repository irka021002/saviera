interface UnderlineButtonProps{
    src: string;
    text: string;
    href?: string;
};
export default function UnderlineButton({src,text,href}:UnderlineButtonProps){
    return(
        <>
            <a className="font-montserrat text-base text-secondary-2 underline flex" href={href}>{ text }<img className="ml-2" width={24} src={src}/></a>
        </>
    )
};