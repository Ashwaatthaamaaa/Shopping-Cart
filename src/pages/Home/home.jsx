import Navbar from "../../components/Navbar/navbar.jsx";
import styles from "./home.module.css";
export default function Home(){
    return(
        <>
            <main className={styles.main}>
                <h1>Welcome To footwear.</h1>
                <p className={styles.tagline}>Step into style, walk with confidence</p>
                <button className={styles.shopNow}>Shop Now</button>
            </main>
        </>
    )
}