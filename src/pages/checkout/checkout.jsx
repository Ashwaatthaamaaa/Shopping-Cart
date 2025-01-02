import ShopCard from "../../components/shopCard/shopCard"
export default function Checkout({shopbag,quantities, updateQuantity}) {
   return(
    <div>
        {shopbag.map((product) => (
            <ShopCard 
                key={product.id} 
                product={product}
                quantity={quantities[product.id]}
                updateQuantity={updateQuantity}
            />
        ))}
    </div>
   )
}