import ProductCard from "../../components/productCard/productCard"
export default function Wishlist({wishBag,quantities,updateQuantity, updateWishlist,removeFromWishlist,wishlist}){
    return(
        <div>
            <h1>Items - Favorites</h1>
            {wishBag.map((product) => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        product={product}
                        quantity={quantities[product.id]}
                        updateQuantity={updateQuantity}
                        updateWishlist={updateWishlist}
                        removeFromWishlist={removeFromWishlist}
                        wishlist ={wishlist}
                    />
        )
    )}
        </div>
    )
}