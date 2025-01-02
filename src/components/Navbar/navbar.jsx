import styles from './navbar.module.css'
import { BsHeart } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from 'react-router-dom';
export default function Navbar(){
    return(
        <div className={styles.navbar}>
            <div className={styles.one}> 
                <div >footwear.</div>
                <div className={styles.link}>
                    <div><Link to='/'>Home</Link></div>
                    <div><Link to='/shop'>Shop</Link></div>
                </div>
            </div>
            <div className={styles.icon}>
                <div><Link to='/wishlist'><BsHeart/></Link></div>
                <div><Link to='/checkout'>
                    <FiShoppingCart/>
                    </Link>
                </div>
            </div>
        </div>
    )
}