"use client"

import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Box,
  Flex,
  Text,
  useColorModeValue,
} from "@chakra-ui/react"
import styles from "./shopCard.module.css"
import { useState } from "react"

export default function ShopCard({ product, quantity, updateQuantity }) {
  const [isDisabled, setIsDisabled] = useState(true)
  const price = product.price * quantity

  // Dynamic color values based on color mode
  const cardBg = useColorModeValue("light.card", "dark.card")
  const borderColor = useColorModeValue("light.border", "dark.border")
  const mutedColor = useColorModeValue("light.muted", "dark.muted")
  const productBg = useColorModeValue("light.accent", "dark.accent")

  return (
    <Flex className={styles.card} bg={cardBg} borderColor={borderColor} boxShadow="sm">
      <Box className={styles.product} bg={productBg}>
        <img src={product.thumbnail || "/placeholder.svg"} alt={product.title} />
      </Box>

      <Flex className={styles.content} flex="1">
        <Box className={styles.info}>
          <Text fontWeight="600" fontSize="md">
            {product.title}
          </Text>
          <Text fontSize="sm" color={mutedColor} mb="1">
            {product.brand}
          </Text>
          <Text fontSize="md">${product.price}</Text>
        </Box>

        <Flex className={styles.controls}>
          <Box className={styles.cart}>
            <NumberInput
              size="sm"
              value={quantity}
              min={1}
              max={10}
              onChange={(value) => {
                updateQuantity(product.id, value)
                setIsDisabled(value > 0 ? false : true)
              }}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Box>

          <Box className={styles.total}>
            <Text fontWeight="600">${price.toFixed(2)}</Text>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  )
}

