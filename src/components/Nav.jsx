import styles from './nav.module.css';

export default function Nav(){
    return (
        <div className={styles.nav}>
            
            <div>
                <img className={styles.img} width="78" height="78" src="https://img.icons8.com/external-flat-icons-vectorslab/68/external-Emojis-social-media-flat-icons-vectorslab.png" alt="external-Emojis-social-media-flat-icons-vectorslab"/> 
                <span className={styles.title}>Emo Trackr</span>
            </div>
        </div>
    );
}