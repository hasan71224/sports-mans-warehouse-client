import { useEffect, useState } from "react";

const useItemDetails = itemId =>{
    const [item, setItem] = useState({})
    useEffect(()=>{
        const url = `https://pacific-gorge-29321.herokuapp.com/item/${itemId}`;
        fetch(url)
        .then (res => res.json())
        .then (data => setItem(data))
    },[itemId])
    return [item]
}
export default useItemDetails;