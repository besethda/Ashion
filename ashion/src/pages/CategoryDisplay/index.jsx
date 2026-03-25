import styles from "./categorydisplay.module.css"
import Item from "../../components/Item"
import useApi from "../../hooks/api"
import { useParams } from "react-router-dom"

const CategoryDisplay = ({setCart}) => {

  const { id } = useParams()
  const {loading, data} = useApi(`api/category/${id}`)
  const {loading: categoryLoading, data: categoryData} = useApi(`api/single-category/${id}`)
  

  return (
    <div className={styles.container} style={{backgroundColor:`#${categoryData && categoryData.color}`}}>
      <div className={styles.title}>{categoryData && categoryData.name}</div>
      <div className={styles.bar}> FILTERS:
        <div className={styles.filter}>COLOR
          <div className={styles.dropDown}></div>
        </div>
        <div className={styles.filter}>PRICE</div>
      </div>
      <div className={styles.items}>
        {data && data.map((e, i)=> <Item key={i} item={e} setCart={setCart}/>)}
      </div>
    </div>
  )
}

export default CategoryDisplay