import { useEffect } from "react"
import SavForm from "../components/savtowear/SavForm"
import HeroBanner from "../components/savtowear/HeroBanner"
export default function SavToWear(){
    useEffect(() => {
        document.title = "Especially For You - Saviera.co"
    },[])
    return(
        <>
            <HeroBanner />
            <SavForm />
        </>
    )
}