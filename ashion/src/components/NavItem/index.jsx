import styles from "./navitem.module.css"

const NavItem = ({name}) => {
  return (
    <div className={styles.navItem}>{name.toUpperCase()}
      <div className={styles.underline}></div>
    </div>
  )
}

export default NavItem