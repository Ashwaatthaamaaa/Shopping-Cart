import ShopCard from "../../components/shopCard/shopCard"
import styles from "./checkout.module.css"
export default function Checkout({shopbag,quantities, updateQuantity}) {
   return(
    <div className={styles.container}>
        <div className={styles.cards}>
        {shopbag.map((product) => (
            <ShopCard 
                key={product.id} 
                product={product}
                quantity={quantities[product.id]}
                updateQuantity={updateQuantity}
            />
        ))}
        </div>


        {shopbag.length === 0 ? (
            <div className={styles.empty}>Your cart is empty</div>
        ) : (
            <div className={styles.total}>
                <h2>Order Summary</h2>
                <div className={styles.subtotal}>
                    <p>subtotal</p>
                    <p>$0</p>
                </div>
                <div className={styles.subtotal}>
                    <p>Delivery Fee</p>
                    <p>$ 0</p>
                </div>
                <hr />
                <div className={styles.subtotal}> 
                    <p>Total</p>
                    <p>$0</p>
                </div>
            </div>
        )}

    </div>
   )
}