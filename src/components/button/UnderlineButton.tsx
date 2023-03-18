interface UnderlineButtonProps{
    src: string;
    text: string;
    href?: string;
    target?: string;
};
export default function UnderlineButton({src,text,href,target}:UnderlineButtonProps){
    return(
        <>
            <a target={target} className="font-montserrat text-base text-secondary-2 underline flex" href={href}>{ text }<img className="ml-2" width={24} src={src}/></a>
        </>
    )
};