import styles from "./category.module.css"
import { getImageURL } from "../../../utils/functions"
import useApi from "../../hooks/api"
import { Link } from "react-router-dom"

const Category = ({name, image, id }) => {

  const {loading, data} = useApi(`api/category-count/${id}`)

  return (
    <Link to={`/category/${id}`} className={styles.container} style={{backgroundImage: `url(${getImageURL(image)})`}}>
      <div className={styles.name}>{name}</div>
      <div className={styles.text}>{data && data} Items</div>
      <div className={styles.link}>SHOP NOW
        <div className={styles.underline}></div>
      </div>
    </Link>
  )
}

export default Category