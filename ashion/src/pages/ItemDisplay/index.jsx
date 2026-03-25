import styles from "./itemdisplay.module.css"
import useApi from "../../hooks/api";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const ItemDisplay = ({setCart}) => {

  const { id } = useParams()
  const {loading, data} = useApi(`api/products/${id}`)

  const [cartText, setCartText] = useState('Add to Cart')

  const updateCart = () => {
    setCartText("Cart Updated")
    let idItem = {...data, "cartId": Date.now()}
    setCart(prevCart=> [...prevCart, idItem])
  }

  useEffect(()=> {
    setTimeout(()=> {setCartText('Add to Cart')}, 2900)
  }, [cartText])

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={`${data && data.image}`} />
      </div>
      <div className={styles.title}>{data && data.name}</div>
      <div className={styles.details}>
        <div className={styles.price}>${data && data.price}</div>
        <div className={styles.color}>Color: {data && data.color}</div>
      </div>
      <div className={styles.description}>{data && data.description}</div>
      <div className={styles.addButton} onClick={updateCart}>{cartText}</div>
    </div>
  );
};

export default ItemDisplay;