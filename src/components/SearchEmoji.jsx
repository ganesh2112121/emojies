import { useEffect, useState } from "react";
import styles from './search.module.css'
import Text from './Text'

const API_Key = "gXmdA4gpGqRWbehRzR8buw==XP0StXlb5m3RStGz" 
const URL = "https://api.api-ninjas.com/v1/emoji";

export default function SearchEmoji({emojiData,setEmojiData}){
    const [name,setName] = useState("smiling face");

    useEffect(()=>{
        async function fetchEmoji(){
            const res = await fetch(`${URL}?name=${name}&X-Api-Key=${API_Key}`);
            const data = await res.json();
            console.log(data);
            setEmojiData(data);
        }
        fetchEmoji();
    },[name])

    return (
        <div>
            <Text/>
        <div className={styles.searchContainer}>
            <input className={styles.searchInput} value={name} onChange={(e)=>setName(e.target.value)} type="text" />
            {/* <button className={styles.searchbutton} ><span>Search</span><i></i></button> */}
        </div>
        </div>
    );
}