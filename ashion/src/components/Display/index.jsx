import styles from "./display.module.css"
import Category from "../Category"

const Display = ({categories}) => {

  return (
    <div className={styles.display}>
      {categories && categories.map((e, i)=> <Category key={i} name={e.name} id={e.id} image={e.image}/> )}
    </div>
  )
}

export default Display