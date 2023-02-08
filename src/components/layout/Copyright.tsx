import moment from "moment"
export default function Copyright(){
    return(
        <div className="font-medium bg-cream-1 w-full h-[72px] flex justify-center items-center text-secondary-2 font-montserrat text-base">
            Saviera &#169; {moment().format("YYYY")}
        </div>
    )
}