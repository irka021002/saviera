import { useEffect } from 'react';
import ArchetypesInfo from '../components/archetypes/ArchetypesInfo';

export default function Archetypes(){
    useEffect(() => {
        document.title = "Vol 1. Archetypes Initial Collection - Saviera.co"
    },[])
    return(
        <>
            <ArchetypesInfo />
        </>
    )
}