import styles from './navbar.module.css'
import { BsHeart } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
export default function Navbar(){
    return(
        <div className={styles.navbar}>
            <div className={styles.one}> 
                <div >footwear.</div>
                <div className={styles.link}>
                    <div>Home</div>
                    <div>Store</div>
                </div>
            </div>
            <div className={styles.icon}>
                <div>
                    <BsHeart/>
                </div>
                <div>
                    <FiShoppingCart/>
                </div>
            </div>
        </div>
    )
}