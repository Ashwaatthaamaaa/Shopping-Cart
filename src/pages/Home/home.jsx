import styles from "./home.module.css";
import { Link } from 'react-router-dom';

export default function Home(){
    return(
        <>
            <main className={styles.main}>
                <h1>Welcome To footwear.</h1>
                <p className={styles.tagline}>Step into style, walk with confidence</p>
                <button className={styles.shopNow} >
                    <Link to='/shop'>Shop Now</Link>
                </button>
            </main>
        </>
    )
}