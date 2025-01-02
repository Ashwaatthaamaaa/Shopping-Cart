import { NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, Button } from '@chakra-ui/react';
import { IoMdHeart, IoMdHeartEmpty } from 'react-icons/io';
import styles from './shopCard.module.css';
import { useState } from 'react';

             



export default function ShopCard({ product, quantity, updateQuantity }) {

        const [isDisabled, setIsdisabled] = useState(true);
    
    


    return(
        <div className={styles.card}>
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
                        defaultValue={1}
                        value={quantity}
                        min={1} 
                        max={10}
                        onChange={(value) => {
                            updateQuantity(product.id,value);
                            setIsdisabled(value > 0 ? false : true);
                        }}
                    >
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                </div>
            </div>
            <div className={styles.total}>$70</div>
        </div>

    )
}