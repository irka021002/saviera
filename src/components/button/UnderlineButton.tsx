interface UnderlineButtonProps{
    src: string;
    text: string;
};
export default function UnderlineButton({src,text}:UnderlineButtonProps){
    return(
        <>
            <a className="font-montserrat text-base text-secondary-2 underline flex">{ text }<img className="ml-2" width={24} src={src}/></a>
        </>
    )
};