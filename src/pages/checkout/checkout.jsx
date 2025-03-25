import ShopCard from "../../components/shopCard/shopCard"
import styles from "./checkout.module.css"
import { Box, Flex, Text, Divider, Heading, useColorModeValue } from "@chakra-ui/react"

export default function Checkout({ shopbag, quantities, updateQuantity }) {
  const subtotal = shopbag.reduce((acc, product) => acc + product.price * quantities[product.id], 0)
  const deliveryfee = 0
  const total = subtotal + deliveryfee

  // Dynamic color values based on color mode
  const cardBg = useColorModeValue("light.card", "dark.card")
  const borderColor = useColorModeValue("light.border", "dark.border")
  const mutedColor = useColorModeValue("light.muted", "dark.muted")

  return (
    <Flex className={styles.container} direction={{ base: "column", md: "row" }} gap="6">
      <Box className={styles.cards} flex="1">
        {shopbag.length === 0 ? (
          <Box className={styles.empty} textAlign="center" py="12">
            <Text fontSize="lg">Your cart is empty</Text>
          </Box>
        ) : (
          shopbag.map((product) => (
            <ShopCard
              key={product.id}
              product={product}
              quantity={quantities[product.id]}
              updateQuantity={updateQuantity}
            />
          ))
        )}
      </Box>

      {shopbag.length > 0 && (
        <Box className={styles.summary} bg={cardBg} borderColor={borderColor} boxShadow="sm">
          <Heading as="h2" size="md" mb="4">
            Order Summary
          </Heading>

          <Flex className={styles.summaryRow} justify="space-between" mb="3">
            <Text>Subtotal</Text>
            <Text>${subtotal.toFixed(2)}</Text>
          </Flex>

          <Flex className={styles.summaryRow} justify="space-between" mb="3">
            <Text>Delivery Fee</Text>
            <Text>${deliveryfee.toFixed(2)}</Text>
          </Flex>

          <Divider my="4" />

          <Flex className={styles.summaryRow} justify="space-between" fontWeight="600">
            <Text>Total</Text>
            <Text>${total.toFixed(2)}</Text>
          </Flex>
        </Box>
      )}
    </Flex>
  )
}

