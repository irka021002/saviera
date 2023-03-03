import { useState, useEffect } from 'react';
import axios from 'axios';
import useCookies from "react-cookie/cjs/useCookies";
interface CTA{
    title: string;
    description: string;
}
export default function Savdashboard(){
    useEffect(() => {
        document.title = "Saviera Dashboard"
    },[])
    const [cookies, setCookie] = useCookies(['access-token','refresh-token'])
    const [heroPicFile, setHeroPicFile] = useState<File>(new File([""], "filename"))
    const [selectedHeroPic,setSelectedHeroPic] = useState("")
    const [heroPic,setHeroPic] = useState<Array<string>>([]) // for database
    const [cta, setCta] = useState<CTA>({title: "",description: ""}) // for database
    const [instaPicFile, setInstaPicFile] = useState<File>(new File([""], "filename"))
    const [selectedInstaPic,setSelectedInstaPic] = useState("")
    const [instaPic, setInstaPic] = useState<Array<string>>([]) // for database
    const [isLoggedIn, setIsLoggedIn] = useState(false)
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
    const handleSelectPic = (e:React.SyntheticEvent<HTMLInputElement>) => {
        if(e.currentTarget.files){
            setSelectedHeroPic(URL.createObjectURL(e.currentTarget.files[0]))
            setHeroPicFile(e.currentTarget.files[0])
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
                            setInstaPic([...instaPic,v.data.data.display_url])
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
    const handleCTADesc = (e:React.SyntheticEvent<HTMLTextAreaElement>) => {
        setCta({...cta,description: e.currentTarget.value})
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
                            instagram: instaPic
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
                        window.location.reload()
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
                                hero: heroPic,
                                cta: cta,
                                instagram: instaPic
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
                                window.location.reload()
                                return;
                            }
                            alert(v.statusText)
                        })
                })
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
                                <h3 className="text-2xl font-bold">Hero Banner</h3>
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
                                    <label htmlFor="ctaTitle">CTA Title</label>
                                    <input onChange={handleCTATitle} className="p-2 rounded w-2/5 mt-1" type="text" id="ctaTitle" value={cta.title} placeholder="CTA Title" />
                                </div>
                                <div className="flex flex-col ml-2 mt-2">
                                    <label htmlFor="ctaDesc">CTA Description</label>
                                    <textarea onChange={handleCTADesc} cols={2} className="p-2 rounded w-2/5 mt-1" id="ctaDesc" value={cta.description} placeholder="CTA Title" />
                                </div>
                            </div>
                            <div className="mt-2 ml-4">
                                <h3 className="text-2xl font-bold">Instagram Picture</h3>
                                {instaPic.map((v,i) => {
                                    return(
                                        <div key={i} className="w-1/5 mt-1 flex">
                                            <img className="rounded aspect-square" src={v} alt="" />
                                            <button data-id={i} onClick={handleRemoveInstaPic} className="text-4xl p-2 ml-3 text-rose-600 ">
                                                x
                                            </button>
                                        </div>
                                    )
                                })}
                                <div className="mt-5 flex">
                                    <input onChange={handleSelectInstaPic} id="chooseInsta" className="hidden" type="file" accept=".jpg,.jpeg,.png" />
                                    <label className="p-2 w-1/5 aspect-square bg-slate-200 bg-contain bg-no-repeat rounded font-bold flex justify-center items-center cursor-pointer" htmlFor="chooseInsta" style={{backgroundImage: `URL('${selectedInstaPic}')`}}>
                                        <svg className="mr-2" width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.5 15.2292C11.8021 15.2292 12.909 14.7736 13.8208 13.8625C14.7319 12.9507 15.1875 11.8438 15.1875 10.5417C15.1875 9.23958 14.7319 8.13264 13.8208 7.22083C12.909 6.30972 11.8021 5.85417 10.5 5.85417C9.19791 5.85417 8.09097 6.30972 7.17916 7.22083C6.26805 8.13264 5.8125 9.23958 5.8125 10.5417C5.8125 11.8438 6.26805 12.9507 7.17916 13.8625C8.09097 14.7736 9.19791 15.2292 10.5 15.2292ZM10.5 14.1875L9.35416 11.6875L6.85416 10.5417L9.35416 9.39583L10.5 6.89583L11.6458 9.39583L14.1458 10.5417L11.6458 11.6875L10.5 14.1875ZM2.16666 18.875C1.59374 18.875 1.10347 18.6712 0.695828 18.2635C0.287495 17.8552 0.0833282 17.3646 0.0833282 16.7917V4.29167C0.0833282 3.71875 0.287495 3.22847 0.695828 2.82083C1.10347 2.4125 1.59374 2.20833 2.16666 2.20833H5.44791L7.375 0.125H13.625L15.5521 2.20833H18.8333C19.4062 2.20833 19.8969 2.4125 20.3052 2.82083C20.7128 3.22847 20.9167 3.71875 20.9167 4.29167V16.7917C20.9167 17.3646 20.7128 17.8552 20.3052 18.2635C19.8969 18.6712 19.4062 18.875 18.8333 18.875H2.16666ZM18.8333 16.7917V4.29167H14.6146L12.7135 2.20833H8.28645L6.38541 4.29167H2.16666V16.7917H18.8333Z" fill="#767676"/>
                                        </svg>
                                        Pilih Gambar
                                    </label>
                                    <button onClick={handleAddInstaPic} className="text-4xl p-2 ml-3 text-rose-600 ">
                                        +
                                    </button>
                                </div>
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