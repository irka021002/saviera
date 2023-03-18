import HomepageCTA from "../components/homepage/HomepageCTA"
import ProductGallery from '../components/homepage/ProductGallery';
import Benefit from '../components/homepage/Benefit';
import InstagramWidget from '../components/homepage/InstagramWidget';
import PromoCTA from '../components/homepage/PromoCTA';
import HeroBanner from '../components/homepage/HeroBanner';
import axios from "axios";
import { useEffect,useState } from "react";
import useCookies from "react-cookie/cjs/useCookies";
interface CTA{
    title: string;
    description: string;
    background: string;
}
interface InstagramWidget{
    image: string;
    url: string;
}
export default function Homepage(){
    const [cookies, setCookie] = useCookies(['access-token','refresh-token'])
    const [heroPic,setHeroPic] = useState<Array<string>>([])
    const [cta, setCta] = useState<CTA>({title: "",description: "", background: ""})
    const [instaPic, setInstaPic] = useState<Array<InstagramWidget>>([])
    const [omniaPic, setOmniaPic] = useState("")
    const [weiyiPic, setWeiyiPic] = useState("")
    const [cyannePic, setCyannePic] = useState("")
    useEffect(() => {
        if(cookies["access-token"]){
            axios.post(
                `${import.meta.env.VITE_MONGOPOINT}/action/find`,
                {
                    "dataSource": "Cluster0",
                    "database": "saviera",
                    "collection": "page",
                    "sort": {
                        "_id": -1
                    },
                    "limit": 1
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${cookies["access-token"]}`
                    }
                }
            )
                .then(v => {
                    if(v.status = 201){
                        setInstaPic(v.data.documents[0].homepage.instagram)
                        setHeroPic(v.data.documents[0].homepage.hero)
                        setCta(v.data.documents[0].homepage.cta)
                        setOmniaPic(v.data.documents[0].homepage.omniaImage)
                        setWeiyiPic(v.data.documents[0].homepage.weiyiImage)
                        setCyannePic(v.data.documents[0].homepage.cyanneImage)
                    }
                })
            return;
        }
        if(cookies["refresh-token"] && !cookies["access-token"]){
            axios.post(
                "https://realm.mongodb.com/api/client/v2.0/auth/session",
                {},
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${cookies["refresh-token"]}`
                    }
                }
            )
                .then(v => {
                    setCookie("access-token", v.data.access_token, {maxAge: 25*60})
                    axios.post(
                        `${import.meta.env.VITE_MONGOPOINT}/action/find`,
                        {
                            "dataSource": "Cluster0",
                            "database": "saviera",
                            "collection": "page",
                            "sort": {
                                "_id": -1
                            },
                            "limit": 1
                        },
                        {
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": `Bearer ${cookies["access-token"]}`
                            }
                        }
                    )
                        .then(v => {
                            if(v.status = 201){
                                setInstaPic(v.data.documents[0].homepage.instagram)
                                setHeroPic(v.data.documents[0].homepage.hero)
                                setCta(v.data.documents[0].homepage.cta)
                                setOmniaPic(v.data.documents[0].homepage.omniaImage)
                                setWeiyiPic(v.data.documents[0].homepage.weiyiImage)
                                setCyannePic(v.data.documents[0].homepage.cyanneImage)
                            }
                        })
                })

        }
    },[cookies["access-token"],cookies["refresh-token"]])
    return(
        <>
            <HeroBanner heroPic={heroPic} />
            <HomepageCTA />
            <PromoCTA cta={cta} />
            <ProductGallery omniaPic={omniaPic} cyannePic={cyannePic} weiyiPic={weiyiPic} />
            <Benefit />
            <InstagramWidget instaPic={instaPic} />
        </>
    )
}