"use client"

import { useState } from "react"
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io"
import {
  Button,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Box,
  Text,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react"
import styles from "./productCard.module.css"

export default function ProductCard({
  id,
  product,
  quantity,
  updateQuantity,
  updateWishlist,
  removeFromWishlist,
  wishlist,
}) {
  const [isDisabled, setIsDisabled] = useState(true)
  const isInWishlist = wishlist.has(id)

  const handleAddToCart = () => {
    console.log(`Added ${quantity} of ${product.title} to cart`)
  }

  const handleWishlistClick = () => {
    if (isInWishlist) {
      removeFromWishlist(id)
    } else {
      updateWishlist(id)
    }
  }

  // Dynamic color values based on color mode
  const cardBg = useColorModeValue("light.card", "dark.card")
  const borderColor = useColorModeValue("light.border", "dark.border")
  const mutedColor = useColorModeValue("light.muted", "dark.muted")
  const heartColor = useColorModeValue("#1a1a1a", "#f7f7f7")
  const heartFilledColor = useColorModeValue("#e53e3e", "#e53e3e")

  return (
    <Box className={styles.card} bg={cardBg} borderColor={borderColor} boxShadow="sm">
      <Box
        className={styles.wish}
        onClick={handleWishlistClick}
        data-testid="wishlist-button"
        color={isInWishlist ? heartFilledColor : heartColor}
      >
        {isInWishlist ? <IoMdHeart /> : <IoMdHeartEmpty />}
      </Box>

      <Box className={styles.product}>
        <img src={product.thumbnail || "/placeholder.svg"} alt={product.title} />
      </Box>

      <Flex className={styles.bottom} direction="column" gap="3">
        <Box className={styles.info}>
          <Text fontWeight="600" fontSize="md" mb="1">
            {product.title}
          </Text>
          <Text fontSize="sm" color={mutedColor} mb="1">
            {product.brand}
          </Text>
          <Text fontWeight="600" fontSize="md">
            ${product.price}
          </Text>
        </Box>

        <Flex className={styles.cart} gap="3" mt="2">
          <NumberInput
            size="sm"
            maxW="80px"
            value={quantity || 0}
            min={0}
            max={10}
            onChange={(value) => {
              updateQuantity(id, value)
              setIsDisabled(value > 0 ? false : true)
            }}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>

          <Button size="sm" onClick={handleAddToCart} isDisabled={isDisabled} width="full">
            Add to Cart
          </Button>
        </Flex>
      </Flex>
    </Box>
  )
}

