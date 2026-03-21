import { useState } from "react"
import styles from "./header.module.css"
import Logo from "../Logo"
import Nav from "../Nav"

const Header = ({categories }) => {

    const [navShown, setNavShown] = useState(true)

    const toggleNav = () => {
      setNavShown(!navShown)
      console.log('clicked')
    }

  return (
    <>
      <div className={styles.header}>
        <div className={styles.media}>
          <Logo />
          <div className={styles.menu} onClick={toggleNav}>
            <svg fill="#000" viewBox="0 0 24 24" id="menu" data-name="Flat Line" xmlns="http://www.w3.org/2000/svg" class="icon flat-line"><path id="primary" d="M3 12H21M9 18H21M3 6H15"/></svg>
          </div>
        </div>
        <div className={`${styles.container} ${navShown && styles.active}`}>
          <Logo />
          <Nav categories={categories} />
          <div className={styles.shop}>
            <svg fill="#000" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" enableBackground="new 0 0 20 20"><path d="M17 14H4c-.6.0-1-.4-1-1V2H0V0h4c.6.0 1 .4 1 1v11h11.2l1.5-6H7V4h12c.6.0 1.1.6 1 1.2l-2 8C17.9 13.7 17.5 14 17 14z" /><circle cx="5" cy="18" r="2" /><circle cx="16" cy="18" r="2" /></svg>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header