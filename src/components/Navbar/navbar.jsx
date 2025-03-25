"use client"

import styles from "./navbar.module.css"
import { BsHeart } from "react-icons/bs"
import { FiShoppingCart, FiSun, FiMoon } from "react-icons/fi"
import { Link } from "react-router-dom"
import { useColorMode, IconButton } from "@chakra-ui/react"

export default function Navbar({ wishlistCount, shopbagCount }) {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <div className={styles.navbar}>
      <div className={styles.one}>
        <div className={styles.logo}>footwear.</div>
        <div className={styles.link}>
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/shop">Shop</Link>
          </div>
        </div>
      </div>
      <div className={styles.icon}>
        <IconButton
          aria-label={`Switch to ${colorMode === "light" ? "dark" : "light"} mode`}
          icon={colorMode === "light" ? <FiMoon /> : <FiSun />}
          onClick={toggleColorMode}
          variant="ghost"
          size="md"
          className={styles.themeToggle}
        />
        <div className={styles.iconWrapper}>
          <Link to="/wishlist" className={styles.iconLink}>
            <BsHeart className={styles.navIcon} />
            {wishlistCount > 0 && <span className={styles.badge}>{wishlistCount}</span>}
          </Link>
        </div>
        <div className={styles.iconWrapper}>
          <Link to="/checkout" className={styles.iconLink}>
            <FiShoppingCart className={styles.navIcon} />
            {shopbagCount > 0 && <span className={styles.badge}>{shopbagCount}</span>}
          </Link>
        </div>
      </div>
    </div>
  )
}

