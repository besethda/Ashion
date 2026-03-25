import { useEffect, useState } from "react"
import styles from "./item.module.css"
import { Link } from "react-router-dom"

const Item = ({ item, setCart}) => {

  const [cartText, setCartText] = useState('Add to Cart')

  const updateCart = () => {
    setCartText("Cart Updated")
    let idItem = {...item, "cartId": Date.now()}
    setCart(prevCart=> [...prevCart, idItem])
  }

  useEffect(()=> {
    setTimeout(()=> {setCartText('Add to Cart')}, 2900)
  }, [cartText])

  return (
    <div className={styles.container}>
      <Link to={`/product/${item.id}`} className={styles.image}>
        <img src={`${item.image}`} />
      </Link>
      <div className={styles.choices}>
        <div className={styles.price}>{(item.price - .01).toFixed(2)}</div>
        <div className={styles.addButton} onClick={updateCart}>{cartText}</div>
      </div>
      <Link to={`/product/${item.id}`} className={styles.name}>{item.name}</Link>
    </div>
  )
}

export default Item