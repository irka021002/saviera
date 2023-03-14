import AboutBrand from "../components/aboutus/AboutBrand"
import SavieraAbout from '../components/aboutus/SavieraAbout';
import StatusQuo from "../components/aboutus/StatusQuo";
import OurSentiment from '../components/aboutus/OurSentiment';
import Value from "../components/aboutus/Value";
import useCookies from "react-cookie/cjs/useCookies";
import axios from "axios";
import { useEffect, useState } from 'react';
interface StatusQuo{
    title: string;
    description: string;
    background: string;
}
interface OurSentiment{
    thumbnail: string;
    icon: string;
    sentiment: string;
    sentimentPoint: Array<string>;
}
export default function AboutUs(){
    const [cookies, setCookie] = useCookies(['access-token','refresh-token'])
    const [aboutHero, setAboutHero] = useState("")
    const [aboutSaviera, setAboutSaviera] = useState("")
    const [statusQuo, setStatusQuo] = useState<StatusQuo>({background: "", title: "", description: ""})
    const [ourSentiment, setOurSentiment] = useState<Array<OurSentiment>>([])
    const [sentimentParagraph, setSentimentParagraph] = useState("")
    useEffect(() => {
        document.title = "About Saviera.co"
    },[])
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
                        setAboutSaviera(v.data.documents[0].aboutus.aboutSaviera)
                        setStatusQuo(v.data.documents[0].aboutus.statusQuo)
                        setOurSentiment(v.data.documents[0].aboutus.ourSentiment)
                        setSentimentParagraph(v.data.documents[0].aboutus.sentimentParagraph)
                        setAboutHero(v.data.documents[0].aboutus.aboutHeroImage)
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
                                setAboutSaviera(v.data.documents[0].aboutus.aboutSaviera)
                                setStatusQuo(v.data.documents[0].aboutus.statusQuo)
                                setOurSentiment(v.data.documents[0].aboutus.ourSentiment)
                                setSentimentParagraph(v.data.documents[0].aboutus.sentimentParagraph)
                                setAboutHero(v.data.documents[0].aboutus.aboutHeroImage)
                            }
                        })
                })

        }
    },[cookies["access-token"],cookies["refresh-token"]])
    return(
        <>
            <AboutBrand aboutHero={aboutHero} />
            <SavieraAbout aboutSaviera={aboutSaviera} />
            <StatusQuo statusQuo={statusQuo} />
            <OurSentiment ourSentiment={ourSentiment} sentimentParagraph={sentimentParagraph} />
            <Value />
        </>
    )
}