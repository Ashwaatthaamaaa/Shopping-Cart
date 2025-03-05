import ProductCard from "../../components/productCard/productCard";
import usefetch from '../../fetchHook';
import styles from "./shop.module.css";

export default function Shop({products,loading,error,quantities,updateQuantity,updateWishlist,removeFromWishlist,wishlist}) {


  if(loading) return <div className={styles.loader} data-testid="loader"></div>
    if(error) return <h2>Error when fetching: {error.message}</h2>
    
  return (
    <div className={styles.container}>
                {products.products.map((product) => (
                    <ProductCard 
                        key={product.id} 
                        id = {product.id}
                        product={product}
                        quantity={quantities[product.id]}
                        updateQuantity={updateQuantity}
                        updateWishlist={updateWishlist}
                        removeFromWishlist={removeFromWishlist}
                        wishlist={wishlist}
                    />
                ))}
    </div>
  );
}