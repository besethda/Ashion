import styles from "./navitem.module.css"
import { NavLink } from "react-router-dom"

const NavItem = ({name}) => {
  return (
    <NavLink className={styles.navItem} to={`/category/${name.toLowerCase()}`}>{name.toUpperCase()}
        <div className={styles.underline}></div>
    </NavLink>
  )
}

export default NavItem