import "./cartitem.module.css"

const CartItem = ({item}) => {
  return (
    <div className={styles.container}>
      <div className={styles.item} style={{backgroundImage: `url(${item.image})`}}>
      <div className={styles.name}>{item.name}</div>
      <div className={styles.controls}>
        
      </div>
      </div> 
    </div>
  )
}

export default CartItem