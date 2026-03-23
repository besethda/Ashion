import styles from "./cart.module.css"
import CartItem from "../CartItem"

const Cart = ({items}) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Cart</div>
      <div className={styles.items}>
        {items.map((e, i)=> <CartItem item={e} key={i}/>)}
      </div>
    </div>
  )
}

export default Cart