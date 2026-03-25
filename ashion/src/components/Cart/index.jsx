import styles from "./cart.module.css"
import CartItem from "../CartItem"

const Cart = ({cart, setCart}) => {
  return (
      <div className={styles.container}>
        <div className={styles.title}>CART</div>
        <div className={styles.line}></div>
        <div className={styles.items}>
          {cart.length 
          ? cart.map((e, i)=> <CartItem item={e} key={i} setCart={setCart}/>)
          : <div className={styles.empty}>There's nothing here!</div>
          }
        </div>
      </div>
  )
}

export default Cart