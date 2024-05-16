import EmojiItem from "./EmojiItem";
import styles from './emojilist.module.css';

export default function EmojiList({emojiData,setEmojiId,setEmojiCode}){
    return(
        <div className={styles.list}>
            {emojiData.map((emoji)=>(
                <EmojiItem setEmojiCode={setEmojiCode} setEmojiId={setEmojiId} key={emoji.code} emoji={emoji}/>
            ))}
        </div>
    );

}