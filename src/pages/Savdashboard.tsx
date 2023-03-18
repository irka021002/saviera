import { useState, useEffect } from 'react';
import axios from 'axios';
import useCookies from "react-cookie/cjs/useCookies";
interface CTA{
    title: string;
    description: string;
    background: string;
}
interface StatusQuo{
    title: string;
    description: string;
    background: string;
}
interface ArchetypesCarousel{
    image: string;
    text: string;
}
interface OurSentiment{
    thumbnail: string;
    icon: string;
    sentiment: string;
    sentimentPoint: Array<string>;
}
interface InstagramWidget{
    image: string;
    url: string;
}
export default function Savdashboard(){
    useEffect(() => {
        document.title = "Saviera Dashboard"
    },[])
    const [cookies, setCookie] = useCookies(['access-token','refresh-token'])
    const [heroPicFile, setHeroPicFile] = useState<File>(new File([""], "filename"))
    const [selectedHeroPic,setSelectedHeroPic] = useState("")
    const [sentimentThumbnail, setSentimentThumbnail] = useState<File>(new File([""], "filename"))
    const [sentimentThumbnailPic, setSentimentThumbnailPic] = useState("")
    const [sentimentIcon, setSentimentIcon] = useState<File>(new File([""], "filename"))
    const [sentimentIconPic, setSentimentIconPic] = useState("")
    const [sentimentText, setSentimentText] = useState("")
    const [sentimentPoint, setSentimentPoint] = useState("")
    const [instaPicFile, setInstaPicFile] = useState<File>(new File([""], "filename"))
    const [selectedInstaPic,setSelectedInstaPic] = useState("")
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [urlPostIG, setUrlPostIg] = useState("")
    const [archetypesImage, setArchetypesImage] = useState<File>(new File([""], "filename"))
    const [archetypesImagePic, setArchetypesImagePic] = useState("")
    const [archetypesText, setArchetypesText] = useState("")
    const [archtypeImageAfterTable, setArchetypesImageAfterTable] = useState("")
    const [aboutHeroPic, setAboutHeroPic] = useState("") // for database
    const [archetypesCarousel, setArchetypesCarousel] = useState<Array<ArchetypesCarousel>>([]) // for database
    const [instaPic, setInstaPic] = useState<Array<InstagramWidget>>([]) // for database
    const [aboutSaviera, setAboutSaviera] = useState("")  // for database
    const [omniaPic, setOmniaPic] = useState("")  // for database
    const [weiyiPic, setWeiyiPic] = useState("")  // for database
    const [cyannePic, setCyannePic] = useState("")  // for database
    const [heroPic,setHeroPic] = useState<Array<string>>([]) // for database
    const [cta, setCta] = useState<CTA>({title: "",description: "",background: ""}) // for database
    const [sentimentParagraph, setSentimentParagraph] = useState("") // for database
    const [ourSentiment, setOurSentiment] = useState<Array<OurSentiment>>([]) // for database
    const [statusQuo, setStatusQuo] = useState<StatusQuo>({title: "",description: "", background: ""}) // for database
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
                        setAboutSaviera(v.data.documents[0].aboutus.aboutSaviera)
                        setStatusQuo(v.data.documents[0].aboutus.statusQuo)
                        setOurSentiment(v.data.documents[0].aboutus.ourSentiment)
                        setSentimentParagraph(v.data.documents[0].aboutus.sentimentParagraph)
                        setAboutHeroPic(v.data.documents[0].aboutus.aboutHeroImage)
                        setArchetypesCarousel(v.data.documents[0].archetypes.carousel)
                        setArchetypesImageAfterTable(v.data.documents[0].archetypes.afterTable)
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
                                setAboutSaviera(v.data.documents[0].aboutus.aboutSaviera)
                                setStatusQuo(v.data.documents[0].aboutus.statusQuo)
                                setOurSentiment(v.data.documents[0].aboutus.ourSentiment)
                                setSentimentParagraph(v.data.documents[0].aboutus.sentimentParagraph)
                                setAboutHeroPic(v.data.documents[0].aboutus.aboutHeroImage)
                                setArchetypesCarousel(v.data.documents[0].archetypes.carousel)
                                setArchetypesImageAfterTable(v.data.documents[0].archetypes.afterTable)
                            }
                        })
                })
        }
    },[])
    const handleLogin = (e:React.SyntheticEvent<HTMLButtonElement>) => {
        const username = (document.getElementById("username") as HTMLInputElement)
        const password = (document.getElementById("password") as HTMLInputElement)
        if(username && password){
            setIsLoggedIn(username.value == import.meta.env.VITE_DASHUSER && password.value == import.meta.env.VITE_DASHPASS)
        }
    }
    const handleRemovePic = (e:React.SyntheticEvent<HTMLButtonElement>) => {
        if(e.currentTarget.dataset['id']){
            setHeroPic(heroPic.filter((v,i) => i !== Number(e.currentTarget.dataset['id'])))
        }
    }
    const handleRemoveOurSentiment = (e:React.SyntheticEvent<HTMLButtonElement>) => {
        if(e.currentTarget.dataset['id']){
            setOurSentiment(ourSentiment.filter((v,i) => i !== Number(e.currentTarget.dataset['id'])))
        }
    }
    const handleSelectPic = (e:React.SyntheticEvent<HTMLInputElement>) => {
        if(e.currentTarget.files){
            setSelectedHeroPic(URL.createObjectURL(e.currentTarget.files[0]))
            setHeroPicFile(e.currentTarget.files[0])
        }
    }
    const handleSelectSentimentThumbnail = (e:React.SyntheticEvent<HTMLInputElement>) => {
        if(e.currentTarget.files){
            setSentimentThumbnailPic(URL.createObjectURL(e.currentTarget.files[0]))
            setSentimentThumbnail(e.currentTarget.files[0])
        }
    }
    const handleSelectSentimentIcon = (e:React.SyntheticEvent<HTMLInputElement>) => {
        if(e.currentTarget.files){
            setSentimentIconPic(URL.createObjectURL(e.currentTarget.files[0]))
            setSentimentIcon(e.currentTarget.files[0])
        }
    }
    const handleAddPic = (e:React.SyntheticEvent<HTMLButtonElement>) => {
        if(selectedHeroPic){
            const fr = new FileReader()
            fr.readAsDataURL(heroPicFile)
            fr.onloadend = (ev: ProgressEvent<FileReader>) => {
                if(fr && fr.result != undefined && typeof(fr.result) === 'string'){
                    let data = new FormData()
                    data.set('key',import.meta.env.VITE_IMGBBAPI)
                    data.set('image', fr.result.split(",")[1])
                    axios.post(
                        'https://api.imgbb.com/1/upload',
                        data
                    )
                        .then(v => {
                            setHeroPic([...heroPic,v.data.data.display_url])
                        })
                }
            }
            setSelectedHeroPic("")
            setHeroPicFile(new File([""], "filename"))
        }
    }
    const handleRemoveInstaPic = (e:React.SyntheticEvent<HTMLButtonElement>) => {
        if(e.currentTarget.dataset['id']){
            setInstaPic(instaPic.filter((v,i) => i !== Number(e.currentTarget.dataset['id'])))
        }
    }
    const handleSelectInstaPic = (e:React.SyntheticEvent<HTMLInputElement>) => {
        if(e.currentTarget.files){
            setSelectedInstaPic(URL.createObjectURL(e.currentTarget.files[0]))
            setInstaPicFile(e.currentTarget.files[0])
        }
    }
    const handleAddInstaPic = (e:React.SyntheticEvent<HTMLButtonElement>) => {
        if(selectedInstaPic){
            const fr = new FileReader()
            fr.readAsDataURL(instaPicFile)
            fr.onloadend = (ev: ProgressEvent<FileReader>) => {
                if(fr && fr.result != undefined && typeof(fr.result) === 'string'){
                    let data = new FormData()
                    data.set('key',import.meta.env.VITE_IMGBBAPI)
                    data.set('image', fr.result.split(",")[1])
                    axios.post(
                        'https://api.imgbb.com/1/upload',
                        data
                    )
                        .then(v => {
                            setInstaPic([...instaPic,{image: v.data.data.display_url, url: urlPostIG}])
                            setUrlPostIg("")
                        })
                }
            }
            setSelectedInstaPic("")
            setInstaPicFile(new File([""], "filename"))
        }
    }
    const handleCTATitle = (e:React.SyntheticEvent<HTMLInputElement>) => {
        setCta({...cta,title: e.currentTarget.value})
    }
    const handleSentimentText = (e:React.SyntheticEvent<HTMLInputElement>) => {
        setSentimentText(e.currentTarget.value)
    }
    const handleCTADesc = (e:React.SyntheticEvent<HTMLTextAreaElement>) => {
        setCta({...cta,description: e.currentTarget.value})
    }
    const handleAboutSaviera = (e:React.SyntheticEvent<HTMLTextAreaElement>) => {
        setAboutSaviera(e.currentTarget.value)
    }
    const handleSentimentPoint = (e:React.SyntheticEvent<HTMLTextAreaElement>) => {
        setSentimentPoint(e.currentTarget.value)
    }
    const handleStatusQuoTitle = (e:React.SyntheticEvent<HTMLInputElement>) => {
        setStatusQuo({...statusQuo,title: e.currentTarget.value})
    }
    const handleStatusQuoDesc = (e:React.SyntheticEvent<HTMLTextAreaElement>) => {
        setStatusQuo({...statusQuo,description: e.currentTarget.value})
    }
    const handleSimpan = (e:React.SyntheticEvent<HTMLButtonElement>) => {
        if(cookies["access-token"]){
            axios.post(
                `${import.meta.env.VITE_MONGOPOINT}/action/insertOne`,
                {
                    "dataSource": "Cluster0",
                    "database": "saviera",
                    "collection": "page",
                    "document": {
                        homepage: {
                            hero: heroPic,
                            cta: cta,
                            instagram: instaPic,
                            omniaImage: omniaPic,
                            weiyiImage: weiyiPic,
                            cyanneImage: cyannePic
                        },
                        aboutus: {
                            aboutHeroImage: aboutHeroPic,
                            aboutSaviera: aboutSaviera,
                            statusQuo: statusQuo,
                            ourSentiment: ourSentiment,
                            sentimentParagraph: sentimentParagraph
                        },
                        archetypes: {
                            carousel: archetypesCarousel,
                            afterTable: archtypeImageAfterTable
                        }
                    }
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
                        window.location.href = "/"
                        return;
                    }
                    alert(v.statusText)
                })
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
                        `${import.meta.env.VITE_MONGOPOINT}/action/insertOne`,
                        {
                            "dataSource": "Cluster0",
                            "database": "saviera",
                            "collection": "page",
                            "document": {
                                homepage: {
                                    hero: heroPic,
                                    cta: cta,
                                    instagram: instaPic,
                                    omniaImage: omniaPic,
                                    weiyiImage: weiyiPic,
                                    cyanneImage: cyannePic
                                },
                                aboutus: {
                                    aboutSaviera: aboutSaviera,
                                    statusQuo: statusQuo,
                                    ourSentiment: ourSentiment,
                                    sentimentParagraph: sentimentParagraph
                                },
                                archetypes: {
                                    carousel: archetypesCarousel,
                                    afterTable: archtypeImageAfterTable
                                }
                            }
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
                                window.location.href = "/"
                                return;
                            }
                            alert(v.statusText)
                        })
                })
        }
    }
    const handleSentimentParagraph = (e:React.SyntheticEvent<HTMLTextAreaElement>) => {
        setSentimentParagraph(e.currentTarget.value)
    }
    const handleAddSentiment = (e:React.SyntheticEvent<HTMLButtonElement>) => {
        if(sentimentIcon && sentimentThumbnail){
            const fr1 = new FileReader()
            const fr2 = new FileReader()
            fr1.readAsDataURL(sentimentThumbnail)
            fr1.onloadend = (ev: ProgressEvent<FileReader>) => {
                if(fr1 && fr1.result != undefined && typeof(fr1.result) === 'string'){
                    let data = new FormData()
                    data.set('key',import.meta.env.VITE_IMGBBAPI)
                    data.set('image', fr1.result.split(",")[1])
                    axios.post(
                        'https://api.imgbb.com/1/upload',
                        data
                    )
                        .then(v1 => {
                            setSentimentThumbnailPic(v1.data.data.display_url)
                            fr2.readAsDataURL(sentimentIcon)
                            fr2.onloadend = (ev: ProgressEvent<FileReader>) => {
                                if(fr2 && fr2.result != undefined && typeof(fr2.result) === 'string'){
                                    let data = new FormData()
                                    data.set('key',import.meta.env.VITE_IMGBBAPI)
                                    data.set('image', fr2.result.split(",")[1])
                                    axios.post(
                                        'https://api.imgbb.com/1/upload',
                                        data
                                    )
                                        .then(v2 => {
                                            setSentimentIconPic(v2.data.data.display_url)
                                            setOurSentiment([...ourSentiment,{thumbnail: v1.data.data.display_url, icon: v2.data.data.display_url, sentiment: sentimentText, sentimentPoint: sentimentPoint.split(";") }])
                                            setSentimentIcon(new File([""], "filename"))
                                            setSentimentThumbnail(new File([""], "filename"))
                                            setSentimentIconPic("")
                                            setSentimentThumbnailPic("")
                                            setSentimentPoint("")
                                            setSentimentText("")
                                        })
                                }
                            }
                        })
                }
            }
        }
    }
    const handleAboutHeroImage = (e:React.SyntheticEvent<HTMLInputElement>) => {
        const fr = new FileReader()
        if(e.currentTarget.files){
            fr.readAsDataURL(e.currentTarget.files[0])
            fr.onloadend = (ev: ProgressEvent<FileReader>) => {
                if(fr && fr.result != undefined && typeof(fr.result) === 'string'){
                    let data = new FormData()
                    data.set('key',import.meta.env.VITE_IMGBBAPI)
                    data.set('image', fr.result.split(",")[1])
                    axios.post(
                        'https://api.imgbb.com/1/upload',
                        data
                    )
                        .then(v => {
                            setAboutHeroPic(v.data.data.display_url)
                        })
                }
            }
        }
    }
    const handleStatusQuoImage = (e:React.SyntheticEvent<HTMLInputElement>) => {
        const fr = new FileReader()
        if(e.currentTarget.files){
            fr.readAsDataURL(e.currentTarget.files[0])
            fr.onloadend = (ev: ProgressEvent<FileReader>) => {
                if(fr && fr.result != undefined && typeof(fr.result) === 'string'){
                    let data = new FormData()
                    data.set('key',import.meta.env.VITE_IMGBBAPI)
                    data.set('image', fr.result.split(",")[1])
                    axios.post(
                        'https://api.imgbb.com/1/upload',
                        data
                    )
                        .then(v => {
                            setStatusQuo({...statusQuo,background: v.data.data.display_url})
                        })
                }
            }
        }
    }
    const handleCTAImage = (e:React.SyntheticEvent<HTMLInputElement>) => {
        const fr = new FileReader()
        if(e.currentTarget.files){
            fr.readAsDataURL(e.currentTarget.files[0])
            fr.onloadend = (ev: ProgressEvent<FileReader>) => {
                if(fr && fr.result != undefined && typeof(fr.result) === 'string'){
                    let data = new FormData()
                    data.set('key',import.meta.env.VITE_IMGBBAPI)
                    data.set('image', fr.result.split(",")[1])
                    axios.post(
                        'https://api.imgbb.com/1/upload',
                        data
                    )
                        .then(v => {
                            setCta({...cta,background: v.data.data.display_url})
                        })
                }
            }
        }
    }
    const handleUrlPostIg = (e:React.SyntheticEvent<HTMLInputElement>) => {
        setUrlPostIg(e.currentTarget.value)
    }
    const handleArchetypeImagePic = (e:React.SyntheticEvent<HTMLInputElement>) => {
        if(e.currentTarget.files){
            setArchetypesImagePic(URL.createObjectURL(e.currentTarget.files[0]))
            setArchetypesImage(e.currentTarget.files[0])
        }
    }
    const handleArchetypesAfterTableImage = (e:React.SyntheticEvent<HTMLInputElement>) => {
        const fr = new FileReader()
        if(e.currentTarget.files){
            fr.readAsDataURL(e.currentTarget.files[0])
            fr.onloadend = (ev: ProgressEvent<FileReader>) => {
                if(fr && fr.result != undefined && typeof(fr.result) === 'string'){
                    let data = new FormData()
                    data.set('key',import.meta.env.VITE_IMGBBAPI)
                    data.set('image', fr.result.split(",")[1])
                    axios.post(
                        'https://api.imgbb.com/1/upload',
                        data
                    )
                        .then(v => {
                            setArchetypesImageAfterTable(v.data.data.display_url)
                        })
                }
            }
        }
    }
    const handleArchetypesAddCarousel = (e:React.SyntheticEvent<HTMLButtonElement>) => {
        if(archetypesImage){
            const fr = new FileReader()
            fr.readAsDataURL(archetypesImage)
            fr.onloadend = (ev: ProgressEvent<FileReader>) => {
                if(fr && fr.result != undefined && typeof(fr.result) === 'string'){
                    let data = new FormData()
                    data.set('key',import.meta.env.VITE_IMGBBAPI)
                    data.set('image', fr.result.split(",")[1])
                    axios.post(
                        'https://api.imgbb.com/1/upload',
                        data
                    )
                        .then(v => {
                            setArchetypesCarousel([...archetypesCarousel,{image: v.data.data.display_url, text: archetypesText}])
                        })
                }
            }
            setArchetypesImagePic("")
            setArchetypesImage(new File([""], "filename"))
            setArchetypesText("")
        }
    }
    const handleArchetypesText = (e:React.SyntheticEvent<HTMLInputElement>) => {
        setArchetypesText(e.currentTarget.value)
    }
    const handleRemoveArchetypesCarousel = (e:React.SyntheticEvent<HTMLButtonElement>) => {
        if(e.currentTarget.dataset['id']){
            setArchetypesCarousel(archetypesCarousel.filter((v,i) => i !== Number(e.currentTarget.dataset['id'])))
        }
    }
    const handleOmniaImage = (e:React.SyntheticEvent<HTMLInputElement>) => {
        const fr = new FileReader()
        if(e.currentTarget.files){
            fr.readAsDataURL(e.currentTarget.files[0])
            fr.onloadend = (ev: ProgressEvent<FileReader>) => {
                if(fr && fr.result != undefined && typeof(fr.result) === 'string'){
                    let data = new FormData()
                    data.set('key',import.meta.env.VITE_IMGBBAPI)
                    data.set('image', fr.result.split(",")[1])
                    axios.post(
                        'https://api.imgbb.com/1/upload',
                        data
                    )
                        .then(v => {
                            setOmniaPic(v.data.data.display_url)
                        })
                }
            }
        }
    }
    const handleWeiyiImage = (e:React.SyntheticEvent<HTMLInputElement>) => {
        const fr = new FileReader()
        if(e.currentTarget.files){
            fr.readAsDataURL(e.currentTarget.files[0])
            fr.onloadend = (ev: ProgressEvent<FileReader>) => {
                if(fr && fr.result != undefined && typeof(fr.result) === 'string'){
                    let data = new FormData()
                    data.set('key',import.meta.env.VITE_IMGBBAPI)
                    data.set('image', fr.result.split(",")[1])
                    axios.post(
                        'https://api.imgbb.com/1/upload',
                        data
                    )
                        .then(v => {
                            setWeiyiPic(v.data.data.display_url)
                        })
                }
            }
        }
    }
    const handleCyanneImage = (e:React.SyntheticEvent<HTMLInputElement>) => {
        const fr = new FileReader()
        if(e.currentTarget.files){
            fr.readAsDataURL(e.currentTarget.files[0])
            fr.onloadend = (ev: ProgressEvent<FileReader>) => {
                if(fr && fr.result != undefined && typeof(fr.result) === 'string'){
                    let data = new FormData()
                    data.set('key',import.meta.env.VITE_IMGBBAPI)
                    data.set('image', fr.result.split(",")[1])
                    axios.post(
                        'https://api.imgbb.com/1/upload',
                        data
                    )
                        .then(v => {
                            setCyannePic(v.data.data.display_url)
                        })
                }
            }
        }
    }
    return(
        <>
            <div className="max-w-[1440px] m-auto py-10 bg-primary-2 font-montserrat px-6">
                <h1 className="text-4xl font-bold text-center">Saviera Dashboard</h1>
                {
                    isLoggedIn ?
                        <div className="mt-5">
                            <h2 className="text-3xl font-bold">Homepage</h2>
                            <div className="mt-2 ml-4">
                                <h3 className="text-2xl font-bold">Hero Banner 36:41</h3>
                                {heroPic.map((v,i) => {
                                    return(
                                        <div key={i} className="w-2/5 mt-1 flex aspect-video">
                                            <img className="rounded" src={v} alt="" />
                                            <button data-id={i} onClick={handleRemovePic} className="text-4xl p-2 ml-3 text-rose-600 ">
                                                x
                                            </button>
                                        </div>
                                    )
                                })}
                                <div className="mt-5 flex">
                                    <input onChange={handleSelectPic} id="chooseHero" className="hidden" type="file" accept=".jpg,.jpeg,.png" />
                                    <label className="p-2 w-2/5 aspect-video bg-slate-200 bg-contain bg-no-repeat rounded font-bold flex justify-center items-center cursor-pointer" htmlFor="chooseHero" style={{backgroundImage: `URL('${selectedHeroPic}')`}}>
                                        <svg className="mr-2" width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.5 15.2292C11.8021 15.2292 12.909 14.7736 13.8208 13.8625C14.7319 12.9507 15.1875 11.8438 15.1875 10.5417C15.1875 9.23958 14.7319 8.13264 13.8208 7.22083C12.909 6.30972 11.8021 5.85417 10.5 5.85417C9.19791 5.85417 8.09097 6.30972 7.17916 7.22083C6.26805 8.13264 5.8125 9.23958 5.8125 10.5417C5.8125 11.8438 6.26805 12.9507 7.17916 13.8625C8.09097 14.7736 9.19791 15.2292 10.5 15.2292ZM10.5 14.1875L9.35416 11.6875L6.85416 10.5417L9.35416 9.39583L10.5 6.89583L11.6458 9.39583L14.1458 10.5417L11.6458 11.6875L10.5 14.1875ZM2.16666 18.875C1.59374 18.875 1.10347 18.6712 0.695828 18.2635C0.287495 17.8552 0.0833282 17.3646 0.0833282 16.7917V4.29167C0.0833282 3.71875 0.287495 3.22847 0.695828 2.82083C1.10347 2.4125 1.59374 2.20833 2.16666 2.20833H5.44791L7.375 0.125H13.625L15.5521 2.20833H18.8333C19.4062 2.20833 19.8969 2.4125 20.3052 2.82083C20.7128 3.22847 20.9167 3.71875 20.9167 4.29167V16.7917C20.9167 17.3646 20.7128 17.8552 20.3052 18.2635C19.8969 18.6712 19.4062 18.875 18.8333 18.875H2.16666ZM18.8333 16.7917V4.29167H14.6146L12.7135 2.20833H8.28645L6.38541 4.29167H2.16666V16.7917H18.8333Z" fill="#767676"/>
                                        </svg>
                                        Pilih Gambar
                                    </label>
                                    <button onClick={handleAddPic} className="text-4xl p-2 ml-3 text-rose-600 ">
                                        +
                                    </button>
                                </div>
                            </div>
                            <div className="mt-2 ml-4">
                                <h3 className="text-2xl font-bold">CTA</h3>
                                <div className="flex flex-col ml-2">
                                    <label>CTA Background 360:323</label>
                                    <div className='mt-1 w-full'>
                                        <input onChange={handleCTAImage} id="chooseCTAImage" className="hidden" type="file" accept=".jpg,.jpeg,.png" />
                                        <label className="p-2 w-2/5 aspect-video bg-slate-200 bg-contain bg-no-repeat rounded font-bold flex justify-center items-center cursor-pointer" htmlFor="chooseCTAImage" style={{backgroundImage: `URL('${cta.background}')`}}>
                                            <svg className="mr-2" width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.5 15.2292C11.8021 15.2292 12.909 14.7736 13.8208 13.8625C14.7319 12.9507 15.1875 11.8438 15.1875 10.5417C15.1875 9.23958 14.7319 8.13264 13.8208 7.22083C12.909 6.30972 11.8021 5.85417 10.5 5.85417C9.19791 5.85417 8.09097 6.30972 7.17916 7.22083C6.26805 8.13264 5.8125 9.23958 5.8125 10.5417C5.8125 11.8438 6.26805 12.9507 7.17916 13.8625C8.09097 14.7736 9.19791 15.2292 10.5 15.2292ZM10.5 14.1875L9.35416 11.6875L6.85416 10.5417L9.35416 9.39583L10.5 6.89583L11.6458 9.39583L14.1458 10.5417L11.6458 11.6875L10.5 14.1875ZM2.16666 18.875C1.59374 18.875 1.10347 18.6712 0.695828 18.2635C0.287495 17.8552 0.0833282 17.3646 0.0833282 16.7917V4.29167C0.0833282 3.71875 0.287495 3.22847 0.695828 2.82083C1.10347 2.4125 1.59374 2.20833 2.16666 2.20833H5.44791L7.375 0.125H13.625L15.5521 2.20833H18.8333C19.4062 2.20833 19.8969 2.4125 20.3052 2.82083C20.7128 3.22847 20.9167 3.71875 20.9167 4.29167V16.7917C20.9167 17.3646 20.7128 17.8552 20.3052 18.2635C19.8969 18.6712 19.4062 18.875 18.8333 18.875H2.16666ZM18.8333 16.7917V4.29167H14.6146L12.7135 2.20833H8.28645L6.38541 4.29167H2.16666V16.7917H18.8333Z" fill="#767676"/>
                                            </svg>
                                            Pilih Gambar
                                        </label>
                                    </div>
                                </div>
                                <div className="flex flex-col ml-2 mt-2">
                                    <label htmlFor="ctaTitle">CTA Title</label>
                                    <input onChange={handleCTATitle} className="p-2 rounded w-2/5 mt-1" type="text" id="ctaTitle" value={cta.title} placeholder="CTA Title" />
                                </div>
                                <div className="flex flex-col ml-2 mt-2">
                                    <label htmlFor="ctaDesc">CTA Description</label>
                                    <textarea onChange={handleCTADesc} cols={2} className="p-2 rounded w-2/5 mt-1" id="ctaDesc" value={cta.description} placeholder="CTA Title" />
                                </div>
                            </div>
                            <div className="mt-2 ml-4">
                                <h3 className="text-2xl font-bold">Product Picture (Mengikuti aspect ratio asli gambar)</h3>
                                <div className="flex flex-col ml-2">
                                    <label>Omnia</label>
                                    <div className='mt-1 w-full'>
                                        <input onChange={handleOmniaImage} id="chooseOmniaImage" className="hidden" type="file" accept=".jpg,.jpeg,.png" />
                                        <label className="p-2 w-2/5 aspect-video bg-slate-200 bg-contain bg-no-repeat rounded font-bold flex justify-center items-center cursor-pointer" htmlFor="chooseOmniaImage" style={{backgroundImage: `URL('${omniaPic}')`}}>
                                            <svg className="mr-2" width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.5 15.2292C11.8021 15.2292 12.909 14.7736 13.8208 13.8625C14.7319 12.9507 15.1875 11.8438 15.1875 10.5417C15.1875 9.23958 14.7319 8.13264 13.8208 7.22083C12.909 6.30972 11.8021 5.85417 10.5 5.85417C9.19791 5.85417 8.09097 6.30972 7.17916 7.22083C6.26805 8.13264 5.8125 9.23958 5.8125 10.5417C5.8125 11.8438 6.26805 12.9507 7.17916 13.8625C8.09097 14.7736 9.19791 15.2292 10.5 15.2292ZM10.5 14.1875L9.35416 11.6875L6.85416 10.5417L9.35416 9.39583L10.5 6.89583L11.6458 9.39583L14.1458 10.5417L11.6458 11.6875L10.5 14.1875ZM2.16666 18.875C1.59374 18.875 1.10347 18.6712 0.695828 18.2635C0.287495 17.8552 0.0833282 17.3646 0.0833282 16.7917V4.29167C0.0833282 3.71875 0.287495 3.22847 0.695828 2.82083C1.10347 2.4125 1.59374 2.20833 2.16666 2.20833H5.44791L7.375 0.125H13.625L15.5521 2.20833H18.8333C19.4062 2.20833 19.8969 2.4125 20.3052 2.82083C20.7128 3.22847 20.9167 3.71875 20.9167 4.29167V16.7917C20.9167 17.3646 20.7128 17.8552 20.3052 18.2635C19.8969 18.6712 19.4062 18.875 18.8333 18.875H2.16666ZM18.8333 16.7917V4.29167H14.6146L12.7135 2.20833H8.28645L6.38541 4.29167H2.16666V16.7917H18.8333Z" fill="#767676"/>
                                            </svg>
                                            Pilih Gambar
                                        </label>
                                    </div>
                                </div>
                                <div className="flex flex-col ml-2">
                                    <label>Wei Yi</label>
                                    <div className='mt-1 w-full'>
                                        <input onChange={handleWeiyiImage} id="chooseWeiyiImage" className="hidden" type="file" accept=".jpg,.jpeg,.png" />
                                        <label className="p-2 w-2/5 aspect-video bg-slate-200 bg-contain bg-no-repeat rounded font-bold flex justify-center items-center cursor-pointer" htmlFor="chooseWeiyiImage" style={{backgroundImage: `URL('${weiyiPic}')`}}>
                                            <svg className="mr-2" width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.5 15.2292C11.8021 15.2292 12.909 14.7736 13.8208 13.8625C14.7319 12.9507 15.1875 11.8438 15.1875 10.5417C15.1875 9.23958 14.7319 8.13264 13.8208 7.22083C12.909 6.30972 11.8021 5.85417 10.5 5.85417C9.19791 5.85417 8.09097 6.30972 7.17916 7.22083C6.26805 8.13264 5.8125 9.23958 5.8125 10.5417C5.8125 11.8438 6.26805 12.9507 7.17916 13.8625C8.09097 14.7736 9.19791 15.2292 10.5 15.2292ZM10.5 14.1875L9.35416 11.6875L6.85416 10.5417L9.35416 9.39583L10.5 6.89583L11.6458 9.39583L14.1458 10.5417L11.6458 11.6875L10.5 14.1875ZM2.16666 18.875C1.59374 18.875 1.10347 18.6712 0.695828 18.2635C0.287495 17.8552 0.0833282 17.3646 0.0833282 16.7917V4.29167C0.0833282 3.71875 0.287495 3.22847 0.695828 2.82083C1.10347 2.4125 1.59374 2.20833 2.16666 2.20833H5.44791L7.375 0.125H13.625L15.5521 2.20833H18.8333C19.4062 2.20833 19.8969 2.4125 20.3052 2.82083C20.7128 3.22847 20.9167 3.71875 20.9167 4.29167V16.7917C20.9167 17.3646 20.7128 17.8552 20.3052 18.2635C19.8969 18.6712 19.4062 18.875 18.8333 18.875H2.16666ZM18.8333 16.7917V4.29167H14.6146L12.7135 2.20833H8.28645L6.38541 4.29167H2.16666V16.7917H18.8333Z" fill="#767676"/>
                                            </svg>
                                            Pilih Gambar
                                        </label>
                                    </div>
                                </div>
                                <div className="flex flex-col ml-2">
                                    <label>Cyanne</label>
                                    <div className='mt-1 w-full'>
                                        <input onChange={handleCyanneImage} id="chooseCyanneImage" className="hidden" type="file" accept=".jpg,.jpeg,.png" />
                                        <label className="p-2 w-2/5 aspect-video bg-slate-200 bg-contain bg-no-repeat rounded font-bold flex justify-center items-center cursor-pointer" htmlFor="chooseCyanneImage" style={{backgroundImage: `URL('${cyannePic}')`}}>
                                            <svg className="mr-2" width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.5 15.2292C11.8021 15.2292 12.909 14.7736 13.8208 13.8625C14.7319 12.9507 15.1875 11.8438 15.1875 10.5417C15.1875 9.23958 14.7319 8.13264 13.8208 7.22083C12.909 6.30972 11.8021 5.85417 10.5 5.85417C9.19791 5.85417 8.09097 6.30972 7.17916 7.22083C6.26805 8.13264 5.8125 9.23958 5.8125 10.5417C5.8125 11.8438 6.26805 12.9507 7.17916 13.8625C8.09097 14.7736 9.19791 15.2292 10.5 15.2292ZM10.5 14.1875L9.35416 11.6875L6.85416 10.5417L9.35416 9.39583L10.5 6.89583L11.6458 9.39583L14.1458 10.5417L11.6458 11.6875L10.5 14.1875ZM2.16666 18.875C1.59374 18.875 1.10347 18.6712 0.695828 18.2635C0.287495 17.8552 0.0833282 17.3646 0.0833282 16.7917V4.29167C0.0833282 3.71875 0.287495 3.22847 0.695828 2.82083C1.10347 2.4125 1.59374 2.20833 2.16666 2.20833H5.44791L7.375 0.125H13.625L15.5521 2.20833H18.8333C19.4062 2.20833 19.8969 2.4125 20.3052 2.82083C20.7128 3.22847 20.9167 3.71875 20.9167 4.29167V16.7917C20.9167 17.3646 20.7128 17.8552 20.3052 18.2635C19.8969 18.6712 19.4062 18.875 18.8333 18.875H2.16666ZM18.8333 16.7917V4.29167H14.6146L12.7135 2.20833H8.28645L6.38541 4.29167H2.16666V16.7917H18.8333Z" fill="#767676"/>
                                            </svg>
                                            Pilih Gambar
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-2 ml-4">
                                <h3 className="text-2xl font-bold">Instagram Picture 1:1</h3>
                                {instaPic.map((v,i) => {
                                    return(
                                        <div key={i} className="w-full mt-1 flex">
                                            <a href={v.url} className='w-1/5'>
                                                <img className="rounded aspect-square" src={v.image} alt="" />
                                            </a>
                                            <button data-id={i} onClick={handleRemoveInstaPic} className="text-4xl p-2 ml-3 text-rose-600 ">
                                                x
                                            </button>
                                        </div>
                                    )
                                })}
                                <div className="mt-5 flex">
                                    <div className='w-1/5'>
                                        <input onChange={handleSelectInstaPic} id="chooseInsta" className="hidden" type="file" accept=".jpg,.jpeg,.png" />
                                        <label className="p-2 w-full aspect-square bg-slate-200 bg-contain bg-no-repeat rounded font-bold flex justify-center items-center cursor-pointer" htmlFor="chooseInsta" style={{backgroundImage: `URL('${selectedInstaPic}')`}}>
                                            <svg className="mr-2" width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.5 15.2292C11.8021 15.2292 12.909 14.7736 13.8208 13.8625C14.7319 12.9507 15.1875 11.8438 15.1875 10.5417C15.1875 9.23958 14.7319 8.13264 13.8208 7.22083C12.909 6.30972 11.8021 5.85417 10.5 5.85417C9.19791 5.85417 8.09097 6.30972 7.17916 7.22083C6.26805 8.13264 5.8125 9.23958 5.8125 10.5417C5.8125 11.8438 6.26805 12.9507 7.17916 13.8625C8.09097 14.7736 9.19791 15.2292 10.5 15.2292ZM10.5 14.1875L9.35416 11.6875L6.85416 10.5417L9.35416 9.39583L10.5 6.89583L11.6458 9.39583L14.1458 10.5417L11.6458 11.6875L10.5 14.1875ZM2.16666 18.875C1.59374 18.875 1.10347 18.6712 0.695828 18.2635C0.287495 17.8552 0.0833282 17.3646 0.0833282 16.7917V4.29167C0.0833282 3.71875 0.287495 3.22847 0.695828 2.82083C1.10347 2.4125 1.59374 2.20833 2.16666 2.20833H5.44791L7.375 0.125H13.625L15.5521 2.20833H18.8333C19.4062 2.20833 19.8969 2.4125 20.3052 2.82083C20.7128 3.22847 20.9167 3.71875 20.9167 4.29167V16.7917C20.9167 17.3646 20.7128 17.8552 20.3052 18.2635C19.8969 18.6712 19.4062 18.875 18.8333 18.875H2.16666ZM18.8333 16.7917V4.29167H14.6146L12.7135 2.20833H8.28645L6.38541 4.29167H2.16666V16.7917H18.8333Z" fill="#767676"/>
                                            </svg>
                                            Pilih Gambar
                                        </label>
                                        <input type="text" className="p-2 rounded w-full mt-2" onChange={handleUrlPostIg} value={urlPostIG} placeholder='URL Instagram' />
                                    </div>
                                    <button onClick={handleAddInstaPic} className="text-4xl p-2 ml-3 text-rose-600 ">
                                        +
                                    </button>
                                </div>
                            </div>
                            <h2 className="text-3xl font-bold mt-5">About Us</h2>
                            <div className="mt-2 ml-4">
                                <h3 className="text-2xl font-bold">About Hero Image 36:41</h3>
                                <input onChange={handleAboutHeroImage} id="chooseAboutHero" className="hidden" type="file" accept=".jpg,.jpeg,.png" />
                                <label className="p-2 w-2/5 aspect-video bg-slate-200 bg-contain bg-no-repeat rounded font-bold flex justify-center items-center cursor-pointer" htmlFor="chooseAboutHero" style={{backgroundImage: `URL('${aboutHeroPic}')`}}>
                                    <svg className="mr-2" width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.5 15.2292C11.8021 15.2292 12.909 14.7736 13.8208 13.8625C14.7319 12.9507 15.1875 11.8438 15.1875 10.5417C15.1875 9.23958 14.7319 8.13264 13.8208 7.22083C12.909 6.30972 11.8021 5.85417 10.5 5.85417C9.19791 5.85417 8.09097 6.30972 7.17916 7.22083C6.26805 8.13264 5.8125 9.23958 5.8125 10.5417C5.8125 11.8438 6.26805 12.9507 7.17916 13.8625C8.09097 14.7736 9.19791 15.2292 10.5 15.2292ZM10.5 14.1875L9.35416 11.6875L6.85416 10.5417L9.35416 9.39583L10.5 6.89583L11.6458 9.39583L14.1458 10.5417L11.6458 11.6875L10.5 14.1875ZM2.16666 18.875C1.59374 18.875 1.10347 18.6712 0.695828 18.2635C0.287495 17.8552 0.0833282 17.3646 0.0833282 16.7917V4.29167C0.0833282 3.71875 0.287495 3.22847 0.695828 2.82083C1.10347 2.4125 1.59374 2.20833 2.16666 2.20833H5.44791L7.375 0.125H13.625L15.5521 2.20833H18.8333C19.4062 2.20833 19.8969 2.4125 20.3052 2.82083C20.7128 3.22847 20.9167 3.71875 20.9167 4.29167V16.7917C20.9167 17.3646 20.7128 17.8552 20.3052 18.2635C19.8969 18.6712 19.4062 18.875 18.8333 18.875H2.16666ZM18.8333 16.7917V4.29167H14.6146L12.7135 2.20833H8.28645L6.38541 4.29167H2.16666V16.7917H18.8333Z" fill="#767676"/>
                                    </svg>
                                    Pilih Gambar
                                </label>
                            </div>
                            <div className="mt-2 ml-4">
                                <h3 className="text-2xl font-bold">About Saviera</h3>
                                <div className="flex flex-col ml-2 mt-2">
                                    <label htmlFor="aboutSaviera">About Saviera</label>
                                    <textarea onChange={handleAboutSaviera} cols={2} className="p-2 rounded w-2/5 mt-1" id="aboutSaviera" value={aboutSaviera} placeholder="About Saviera" />
                                </div>
                            </div>
                            <div className="mt-2 ml-4">
                                <h3 className="text-2xl font-bold">Status Quo</h3>
                                <div className="flex flex-col ml-2">
                                    <label>Status Quo Background 10:11</label>
                                    <div className='mt-1 w-full'>
                                        <input onChange={handleStatusQuoImage} id="chooseStatusQuoImage" className="hidden" type="file" accept=".jpg,.jpeg,.png" />
                                        <label className="p-2 w-2/5 aspect-video bg-slate-200 bg-contain bg-no-repeat rounded font-bold flex justify-center items-center cursor-pointer" htmlFor="chooseStatusQuoImage" style={{backgroundImage: `URL('${statusQuo.background}')`}}>
                                            <svg className="mr-2" width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.5 15.2292C11.8021 15.2292 12.909 14.7736 13.8208 13.8625C14.7319 12.9507 15.1875 11.8438 15.1875 10.5417C15.1875 9.23958 14.7319 8.13264 13.8208 7.22083C12.909 6.30972 11.8021 5.85417 10.5 5.85417C9.19791 5.85417 8.09097 6.30972 7.17916 7.22083C6.26805 8.13264 5.8125 9.23958 5.8125 10.5417C5.8125 11.8438 6.26805 12.9507 7.17916 13.8625C8.09097 14.7736 9.19791 15.2292 10.5 15.2292ZM10.5 14.1875L9.35416 11.6875L6.85416 10.5417L9.35416 9.39583L10.5 6.89583L11.6458 9.39583L14.1458 10.5417L11.6458 11.6875L10.5 14.1875ZM2.16666 18.875C1.59374 18.875 1.10347 18.6712 0.695828 18.2635C0.287495 17.8552 0.0833282 17.3646 0.0833282 16.7917V4.29167C0.0833282 3.71875 0.287495 3.22847 0.695828 2.82083C1.10347 2.4125 1.59374 2.20833 2.16666 2.20833H5.44791L7.375 0.125H13.625L15.5521 2.20833H18.8333C19.4062 2.20833 19.8969 2.4125 20.3052 2.82083C20.7128 3.22847 20.9167 3.71875 20.9167 4.29167V16.7917C20.9167 17.3646 20.7128 17.8552 20.3052 18.2635C19.8969 18.6712 19.4062 18.875 18.8333 18.875H2.16666ZM18.8333 16.7917V4.29167H14.6146L12.7135 2.20833H8.28645L6.38541 4.29167H2.16666V16.7917H18.8333Z" fill="#767676"/>
                                            </svg>
                                            Pilih Gambar
                                        </label>
                                    </div>
                                </div>
                                <div className="flex flex-col ml-2">
                                    <label htmlFor="quoTitle">Status Quo Title</label>
                                    <input onChange={handleStatusQuoTitle} className="p-2 rounded w-2/5 mt-1" type="text" id="quoTitle" value={statusQuo.title} placeholder="Status Quo Title" />
                                </div>
                                <div className="flex flex-col ml-2 mt-2">
                                    <label htmlFor="quoDesc">Status Quo Description</label>
                                    <textarea onChange={handleStatusQuoDesc} cols={2} className="p-2 rounded w-2/5 mt-1" id="quoDesc" value={statusQuo.description} placeholder="Status Quo Description" />
                                </div>
                            </div>
                            <div className="mt-2 ml-4">
                                <h3 className="text-2xl font-bold">Our Sentiment 485:332</h3>
                                <div className='w-full'>
                                    {ourSentiment.map((v,i) => {
                                        return(
                                            <div key={"ourSentiment"+i} className='flex mb-2'>
                                                <div className='flex items-center w-2/5'>
                                                    <div className="w-2/5 aspect-square" style={{backgroundImage: `url(${v.thumbnail})`}}>
                                                        <div className="bg-[rgba(0,0,0,0.3)] w-full h-full flex flex-col justify-center items-center">
                                                            <img width={60} height={60} src={v.icon} alt="Icon" />
                                                            <p className="text-center text-primary-2 text-[32px] font-montserrat leading-[135%]">{v.sentiment}</p>
                                                        </div>
                                                    </div>
                                                    <div className="bg-white h-full px-5 grow w-3/5 flex items-center justify-center font-trap flex-col">
                                                        <ol className="list-decimal list-inside text-secondary-2 leading-[150%]">
                                                            {v.sentimentPoint.map(v => <li key={v + i}>{v}</li>)}
                                                        </ol>
                                                    </div>
                                                </div>
                                                <button data-id={i} onClick={handleRemoveOurSentiment} className="text-4xl p-2 ml-3 text-rose-600 ">
                                                    x
                                                </button>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className='w-full flex'>
                                    <div className='w-2/5'>
                                        <div className='flex w-full'>
                                            <input onChange={handleSelectSentimentThumbnail} id="chooseSentimentThumbnail" className="hidden" type="file" accept=".jpg,.jpeg,.png" />
                                            <label className="p-2 w-1/2 aspect-square bg-slate-200 bg-contain bg-no-repeat rounded font-bold flex justify-center items-center cursor-pointer" htmlFor="chooseSentimentThumbnail" style={{backgroundImage: `URL('${sentimentThumbnailPic}')`}}>
                                                <svg className="mr-2" width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10.5 15.2292C11.8021 15.2292 12.909 14.7736 13.8208 13.8625C14.7319 12.9507 15.1875 11.8438 15.1875 10.5417C15.1875 9.23958 14.7319 8.13264 13.8208 7.22083C12.909 6.30972 11.8021 5.85417 10.5 5.85417C9.19791 5.85417 8.09097 6.30972 7.17916 7.22083C6.26805 8.13264 5.8125 9.23958 5.8125 10.5417C5.8125 11.8438 6.26805 12.9507 7.17916 13.8625C8.09097 14.7736 9.19791 15.2292 10.5 15.2292ZM10.5 14.1875L9.35416 11.6875L6.85416 10.5417L9.35416 9.39583L10.5 6.89583L11.6458 9.39583L14.1458 10.5417L11.6458 11.6875L10.5 14.1875ZM2.16666 18.875C1.59374 18.875 1.10347 18.6712 0.695828 18.2635C0.287495 17.8552 0.0833282 17.3646 0.0833282 16.7917V4.29167C0.0833282 3.71875 0.287495 3.22847 0.695828 2.82083C1.10347 2.4125 1.59374 2.20833 2.16666 2.20833H5.44791L7.375 0.125H13.625L15.5521 2.20833H18.8333C19.4062 2.20833 19.8969 2.4125 20.3052 2.82083C20.7128 3.22847 20.9167 3.71875 20.9167 4.29167V16.7917C20.9167 17.3646 20.7128 17.8552 20.3052 18.2635C19.8969 18.6712 19.4062 18.875 18.8333 18.875H2.16666ZM18.8333 16.7917V4.29167H14.6146L12.7135 2.20833H8.28645L6.38541 4.29167H2.16666V16.7917H18.8333Z" fill="#767676"/>
                                                </svg>
                                                Pilih Thumbnail
                                            </label>
                                            <input onChange={handleSelectSentimentIcon} id="chooseSentimentIcon" className="hidden" type="file" accept=".jpg,.jpeg,.png" />
                                            <label className="p-2 w-1/2 ml-1 aspect-square bg-slate-200 bg-contain bg-no-repeat rounded font-bold flex justify-center items-center cursor-pointer" htmlFor="chooseSentimentIcon" style={{backgroundImage: `URL('${sentimentIconPic}')`}}>
                                                <svg className="mr-2" width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10.5 15.2292C11.8021 15.2292 12.909 14.7736 13.8208 13.8625C14.7319 12.9507 15.1875 11.8438 15.1875 10.5417C15.1875 9.23958 14.7319 8.13264 13.8208 7.22083C12.909 6.30972 11.8021 5.85417 10.5 5.85417C9.19791 5.85417 8.09097 6.30972 7.17916 7.22083C6.26805 8.13264 5.8125 9.23958 5.8125 10.5417C5.8125 11.8438 6.26805 12.9507 7.17916 13.8625C8.09097 14.7736 9.19791 15.2292 10.5 15.2292ZM10.5 14.1875L9.35416 11.6875L6.85416 10.5417L9.35416 9.39583L10.5 6.89583L11.6458 9.39583L14.1458 10.5417L11.6458 11.6875L10.5 14.1875ZM2.16666 18.875C1.59374 18.875 1.10347 18.6712 0.695828 18.2635C0.287495 17.8552 0.0833282 17.3646 0.0833282 16.7917V4.29167C0.0833282 3.71875 0.287495 3.22847 0.695828 2.82083C1.10347 2.4125 1.59374 2.20833 2.16666 2.20833H5.44791L7.375 0.125H13.625L15.5521 2.20833H18.8333C19.4062 2.20833 19.8969 2.4125 20.3052 2.82083C20.7128 3.22847 20.9167 3.71875 20.9167 4.29167V16.7917C20.9167 17.3646 20.7128 17.8552 20.3052 18.2635C19.8969 18.6712 19.4062 18.875 18.8333 18.875H2.16666ZM18.8333 16.7917V4.29167H14.6146L12.7135 2.20833H8.28645L6.38541 4.29167H2.16666V16.7917H18.8333Z" fill="#767676"/>
                                                </svg>
                                                Pilih Icon
                                            </label>
                                        </div>
                                        <div className="flex flex-col ml-2 mt-2 w-full">
                                            <label htmlFor="sentimentText">Sentiment Text</label>
                                            <input onChange={handleSentimentText} className="p-2 rounded w-full mt-1" type="text" id="sentimentText" value={sentimentText} placeholder="Sentiment Text" />
                                        </div>
                                        <div className="flex flex-col ml-2 mt-2 w-full">
                                            <label htmlFor="sentimentPoint">Sentiment Point (Semicolon Separated ";")   </label>
                                            <textarea onChange={handleSentimentPoint} cols={2} className="p-2 rounded w-full mt-1" id="sentimentPoint" value={sentimentPoint} placeholder="Sentiment Point ; Separated" />
                                        </div>
                                    </div>
                                    <button onClick={handleAddSentiment} className="text-4xl p-2 ml-3 text-rose-600 ">
                                        +
                                    </button>
                                </div>
                            </div>
                            <div className="mt-2 ml-4">
                                <h3 className="text-2xl font-bold">Sentiment Paragraph</h3>
                                <div className="flex flex-col ml-2 mt-2">
                                    <label htmlFor="sentimentParagraph">Sentiment Paragraph</label>
                                    <textarea onChange={handleSentimentParagraph} cols={2} className="p-2 rounded w-2/5 mt-1" id="sentimentParagraph" value={sentimentParagraph} placeholder="Sentiment Paragraph" />
                                </div>
                            </div>
                            <h2 className="text-3xl font-bold mt-5">Archetypes</h2>
                            <div className="mt-2 ml-4">
                                <h3 className="text-2xl font-bold">Archetypes Carousel 104:59</h3>
                                {   archetypesCarousel &&
                                    archetypesCarousel.map((v,i) => {
                                        return(
                                            <div key={"arhcetypesCarousel" + i} className='w-full flex mt-1'>
                                                <div className="relative w-2/5 aspect-[104/59]">
                                                    <div className="bg-[rgba(0,0,0,0.3)] absolute w-full h-full flex justify-center items-center">
                                                        <h2 className="text-center text-primary-2 font-montserrat text-[20px] md:text-[64px] font-normal">{v.text}</h2>
                                                    </div>
                                                    <img
                                                        src={v.image}
                                                        className="block w-full aspect-[104/59]"
                                                        alt="..."
                                                    />
                                                </div>
                                                <button data-id={i} onClick={handleRemoveArchetypesCarousel} className="text-4xl p-2 ml-3 text-rose-600 ">
                                                    x
                                                </button>
                                            </div>
                                        )
                                    })
                                }
                                <div className="mt-5 flex">
                                    <input onChange={handleArchetypeImagePic} id="chooseArcheTypesCarousel" className="hidden" type="file" accept=".jpg,.jpeg,.png" />
                                    <div className='w-2/5'>
                                        <label className="p-2 w-full aspect-video bg-slate-200 bg-contain bg-no-repeat rounded font-bold flex justify-center items-center cursor-pointer" htmlFor="chooseArcheTypesCarousel" style={{backgroundImage: `URL('${archetypesImagePic}')`}}>
                                            <svg className="mr-2" width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.5 15.2292C11.8021 15.2292 12.909 14.7736 13.8208 13.8625C14.7319 12.9507 15.1875 11.8438 15.1875 10.5417C15.1875 9.23958 14.7319 8.13264 13.8208 7.22083C12.909 6.30972 11.8021 5.85417 10.5 5.85417C9.19791 5.85417 8.09097 6.30972 7.17916 7.22083C6.26805 8.13264 5.8125 9.23958 5.8125 10.5417C5.8125 11.8438 6.26805 12.9507 7.17916 13.8625C8.09097 14.7736 9.19791 15.2292 10.5 15.2292ZM10.5 14.1875L9.35416 11.6875L6.85416 10.5417L9.35416 9.39583L10.5 6.89583L11.6458 9.39583L14.1458 10.5417L11.6458 11.6875L10.5 14.1875ZM2.16666 18.875C1.59374 18.875 1.10347 18.6712 0.695828 18.2635C0.287495 17.8552 0.0833282 17.3646 0.0833282 16.7917V4.29167C0.0833282 3.71875 0.287495 3.22847 0.695828 2.82083C1.10347 2.4125 1.59374 2.20833 2.16666 2.20833H5.44791L7.375 0.125H13.625L15.5521 2.20833H18.8333C19.4062 2.20833 19.8969 2.4125 20.3052 2.82083C20.7128 3.22847 20.9167 3.71875 20.9167 4.29167V16.7917C20.9167 17.3646 20.7128 17.8552 20.3052 18.2635C19.8969 18.6712 19.4062 18.875 18.8333 18.875H2.16666ZM18.8333 16.7917V4.29167H14.6146L12.7135 2.20833H8.28645L6.38541 4.29167H2.16666V16.7917H18.8333Z" fill="#767676"/>
                                            </svg>
                                            Pilih Gambar
                                        </label>
                                        <input onChange={handleArchetypesText} type="text" value={archetypesText} className="p-2 rounded w-full mt-2" placeholder='Text for carousel' />
                                    </div>
                                    <button onClick={handleArchetypesAddCarousel} className="text-4xl p-2 ml-3 text-rose-600 ">
                                        +
                                    </button>
                                </div>
                            </div>
                            <div className="mt-2 ml-4">
                                <h3 className="text-2xl font-bold">After Table Image 16:9</h3>
                                <input onChange={handleArchetypesAfterTableImage} id="chooseArchetypesAfterTable" className="hidden" type="file" accept=".jpg,.jpeg,.png" />
                                <label className="p-2 w-2/5 aspect-video bg-slate-200 bg-contain bg-no-repeat rounded font-bold flex justify-center items-center cursor-pointer" htmlFor="chooseArchetypesAfterTable" style={{backgroundImage: `URL('${archtypeImageAfterTable}')`}}>
                                    <svg className="mr-2" width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.5 15.2292C11.8021 15.2292 12.909 14.7736 13.8208 13.8625C14.7319 12.9507 15.1875 11.8438 15.1875 10.5417C15.1875 9.23958 14.7319 8.13264 13.8208 7.22083C12.909 6.30972 11.8021 5.85417 10.5 5.85417C9.19791 5.85417 8.09097 6.30972 7.17916 7.22083C6.26805 8.13264 5.8125 9.23958 5.8125 10.5417C5.8125 11.8438 6.26805 12.9507 7.17916 13.8625C8.09097 14.7736 9.19791 15.2292 10.5 15.2292ZM10.5 14.1875L9.35416 11.6875L6.85416 10.5417L9.35416 9.39583L10.5 6.89583L11.6458 9.39583L14.1458 10.5417L11.6458 11.6875L10.5 14.1875ZM2.16666 18.875C1.59374 18.875 1.10347 18.6712 0.695828 18.2635C0.287495 17.8552 0.0833282 17.3646 0.0833282 16.7917V4.29167C0.0833282 3.71875 0.287495 3.22847 0.695828 2.82083C1.10347 2.4125 1.59374 2.20833 2.16666 2.20833H5.44791L7.375 0.125H13.625L15.5521 2.20833H18.8333C19.4062 2.20833 19.8969 2.4125 20.3052 2.82083C20.7128 3.22847 20.9167 3.71875 20.9167 4.29167V16.7917C20.9167 17.3646 20.7128 17.8552 20.3052 18.2635C19.8969 18.6712 19.4062 18.875 18.8333 18.875H2.16666ZM18.8333 16.7917V4.29167H14.6146L12.7135 2.20833H8.28645L6.38541 4.29167H2.16666V16.7917H18.8333Z" fill="#767676"/>
                                    </svg>
                                    Pilih Gambar
                                </label>
                            </div>
                            <button onClick={handleSimpan} className="mt-5 w-full p-2 bg-slate-300 rounded font-bold text-2xl">
                                Save
                            </button>
                        </div>
                    :
                        <div className="m-auto flex flex-col justify-center items-center mt-5">
                            <div className="flex flex-col w-1/5">
                                <label htmlFor="username">Username</label>
                                <input className="p-1 rounded" id="username" type="text" />
                            </div>
                            <div className="flex flex-col w-1/5 mt-2">
                                <label htmlFor="password">Password</label>
                                <input className="p-1 rounded" id="password" type="password" />
                            </div>
                            <button onClick={handleLogin} className="mt-3 p-2 bg-cream-1 w-1/5 rounded font-montserrat font-bold">
                                Login
                            </button>
                        </div>
                }
            </div>
        </>
    )
}