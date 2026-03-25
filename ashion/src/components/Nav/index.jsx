import styles from "./nav.module.css"
import NavItem from "../NavItem"
import { NavLink } from "react-router-dom"

const Nav = ({categories}) => {

  return (
    <div className={styles.nav}>
      <NavLink to={"/"} className={styles.navItem}>HOME
        <div className={styles.underline}></div>
      </NavLink>
      {categories.map((e, i)=> <NavItem key={i} name={e.name} id={e.id}/> )}
    </div>
  ) 
}

export default Nav