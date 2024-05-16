import styles from './container.module.css'
import video from '../assets/video.mp4'

export default function Container({ children }){
    return(
        <div className={styles.parentContainer}>
            { children }</div>
    );
}