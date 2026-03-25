import styles from "./navitem.module.css"
import { NavLink } from "react-router-dom"

const NavItem = ({name, id}) => {
  return (
    <NavLink className={styles.navItem} to={`/category/${id}`}>{name.toUpperCase()}
        <div className={styles.underline}></div>
    </NavLink>
  )
}

export default NavItem