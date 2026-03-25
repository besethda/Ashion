import styles from "./cartitem.module.css"
const CartItem = ({item, setCart}) => {

  const removeItem = () => {
    setCart(prevCart => prevCart.filter(e => e.cartId !== item.cartId))
  }

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={`${item.image}`}/>
      </div>
      <div className={styles.details}>
        <div className={styles.name}>{item.name}</div>
        <div className={styles.remove} onClick={removeItem}>Remove</div>
        <div className={styles.price}>${item.price}</div>
      </div>
    </div>
  )
}

export default CartItem