import { useEffect, useState } from 'react';
import ArchetypesInfo from '../components/archetypes/ArchetypesInfo';
import useCookies from "react-cookie/cjs/useCookies";
import axios from 'axios';
interface ArchetypesCarousel{
    image: string;
    text: string;
}
export default function Archetypes(){
    useEffect(() => {
        document.title = "Vol 1. Archetypes Initial Collection - Saviera.co"
    },[])
    const [cookies, setCookie] = useCookies(['access-token','refresh-token'])
    const [archetypesCarousel, setArchetypesCarousel] = useState<Array<ArchetypesCarousel>>([])
    const [imageAfterTable, setImageAfterTable] = useState("")
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
                        setArchetypesCarousel(v.data.documents[0].archetypes.carousel)
                        setImageAfterTable(v.data.documents[0].archetypes.afterTable)
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
                                setArchetypesCarousel(v.data.documents[0].archetypes.carousel)
                                setImageAfterTable(v.data.documents[0].archetypes.afterTable)
                            }
                        })
                })

        }
    },[cookies["access-token"],cookies["refresh-token"]])
    return(
        <>
            <ArchetypesInfo carousel={archetypesCarousel} afterTable={imageAfterTable} />
        </>
    )
}