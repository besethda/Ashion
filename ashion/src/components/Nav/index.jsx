import styles from "./nav.module.css"
import NavItem from "../NavItem"

const Nav = ({categories}) => {

  return (
    <div className={styles.nav}>
      {categories.map((e, i)=> <NavItem key={i} name={e.name}/> )}
    </div>
  ) 
}

export default Nav