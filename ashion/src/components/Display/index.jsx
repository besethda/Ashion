import styles from "./display.module.css"
import Category from "../Category"

const Display = ({categories}) => {

  return (
    <div className={styles.display}>
      {categories && categories.map((e, i)=> <Category key={i} name={e.name} image={e.path} media={e.media ? e.media : null}/> )}
    </div>
  )
}

export default Display