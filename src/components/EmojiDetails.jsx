import { useEffect, useState } from "react";
import styles from './emojiDetails.module.css'

export default function EmojiDetails({emojiId,emojiCode}){
    const [emoji,setEmoji] = useState();
    const [isLoading,setIsLoading] = useState(true);
    const API_Key = "gXmdA4gpGqRWbehRzR8buw==XP0StXlb5m3RStGz" 
    // const URL = `https://api.api-ninjas.com/v1/emoji/${emojiId}/`;
    const URL = `https://api-ninjas-data.s3.us-west-2.amazonaws.com/emojis/${emojiCode}.png`;

    useEffect(()=>{
        async function fetchEmoji(){
            const res = await fetch(`${URL}?X-Api-Key=${API_Key}`);
            const data = await res.json();
            console.log(data);
            setEmoji(data);
            setIsLoading(false)
        }
        fetchEmoji()
    },[emojiId])

    return(
        <div className={styles.emojiCard}>
            <div >
                <h1 className={styles.emojiName}>{emojiId.name}</h1>
                <img className={styles.emojiImage} src={emojiId.image} alt="" />
            </div>
            <div className={styles.emojiCard}>
                <span>
                    <strong className={styles.list}><span className={styles.ans}> Emoji code</span>  : <span className={styles.info}>{emojiId.code}</span>  </strong>
                </span>  
            </div>
            <div className={styles.emojiCard}>
                <span>
                    <strong className={styles.list}><span className={styles.ans}>Group</span> :  <span className={styles.info}>{emojiId.group}</span> </strong>
                </span>
            </div>
            <div className={styles.emojiCard}>
                <span>
                    <strong className={styles.list}><span className={styles.ans}>Subgroup</span> : <span className={styles.info}>{emojiId.subgroup}</span> </strong>
                </span> 
            </div>
        </div>
    );
}