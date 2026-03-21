import styles from "./category.module.css"
import { getImageURL } from "../../../utils/functions"

const Category = ({name, image, media }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img className={styles.image} src={`${getImageURL(image)}`}/>
      </div>
      <div className={styles.name}>{name}</div>
      <div className={styles.text}>234 Items</div>
      <div className={styles.link}>SHOP NOW
        <div className={styles.underline}></div>
      </div>
    </div>
  )
}

export default Category