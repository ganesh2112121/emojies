import styles from './emojiitem.module.css';

export default function EmojiItem({emoji,setEmojiId,setEmojiCode}){
    return(
        <div className={styles.itemContainer}>
            <img className={styles.itemImage} src={emoji.image} alt="" />
            <div className={styles.itemContent}>
                <p className={styles.itemName}>{emoji.name}</p>
            </div>
            <div className={styles.buttonContainer}>
                <button setEmojiId={setEmojiId} onClick={()=>{
                    console.log(emoji)
                    setEmojiId(emoji)
                    setEmojiCode(emoji.code)
                }} 
                className={styles.itemButton}>View Details</button>
            </div>
            
        </div>
    );
}