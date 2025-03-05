import { useState } from 'react';
import { IoMdHeartEmpty,IoMdHeart  } from 'react-icons/io';
import { Button, 
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
} from '@chakra-ui/react';
import styles from './productCard.module.css';

export default function ProductCard({id,product,quantity,updateQuantity,updateWishlist,removeFromWishlist,wishlist}) {


    const [isDisabled, setIsdisabled] = useState(true);


    const isInWishlist = wishlist.has(id);

    const handleAddToCart = () => {
        // TODO: Implement cart functionality
        console.log(`Added ${quantity} of ${product.title} to cart`);
    };

  const handleWishlistClick = () => {
    if (isInWishlist) {
      removeFromWishlist(id); // Remove from wishlist
    } else {
      updateWishlist(id); // Add to wishlist
    }
  };



    return(
        <div className={styles.card}>
            <div className={styles.wish} onClick={handleWishlistClick} data-testid="wishlist-button">{isInWishlist ? <IoMdHeart/> : <IoMdHeartEmpty/>}</div>
            <div className={styles.product}><img src={product.thumbnail} alt={product.title}/></div>
            <div className={styles.bottom}>
                <div className={styles.info}>
                    <div>{product.title}</div>
                    <div id={styles.brand}>{product.brand}</div>
                    <div>${product.price}</div>
                </div>
                <div className={styles.cart}>
                    <NumberInput  
                        maxW={20} 
                        defaultValue={0} 
                        value={quantity}
                        min={0} 
                        max={10} 
                        onChange={(value) => {
                            updateQuantity(id,value);
                            setIsdisabled(value > 0 ? false : true);
                        }}
                    >
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                    <Button 
                        colorScheme="blackAlpha" 
                        size="sm"
                        onClick={handleAddToCart}
                        isDisabled={isDisabled}
                    >
                        Add to Cart
                    </Button>
                </div>
            </div>
        </div>
    );
}