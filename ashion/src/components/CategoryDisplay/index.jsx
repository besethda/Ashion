import styles from "./categorydisplay.module.css"
import Item from "../Item"

const CategoryDisplay = (category) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{category.name}</div>
      <div className={styles.bar}>
        <div className={styles.filter}></div>
      </div>
      <div className={styles.items}>
        
      </div>
    </div>
  )
}