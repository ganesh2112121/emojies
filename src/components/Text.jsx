import styles from './text.module.css'

export default function InnerContainer({ children }){
    return(
        <div className={styles.textContainer}>
            <h3 className={styles.text}>Enter your idea : </h3>    
        </div>
    );
}