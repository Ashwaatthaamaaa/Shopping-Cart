import ProductCard from "../../components/productCard/productCard"
import styles from "./shop.module.css"
import { Box, Flex, Spinner, Text, SimpleGrid } from "@chakra-ui/react"

export default function Shop({
  products,
  loading,
  error,
  quantities,
  updateQuantity,
  updateWishlist,
  removeFromWishlist,
  wishlist,
}) {
  if (loading) {
    return (
      <Flex className={styles.loaderContainer} justify="center" align="center" minHeight="50vh" data-testid="loader">
        <Spinner size="xl" thickness="4px" speed="0.65s" />
      </Flex>
    )
  }

  if (error) {
    return (
      <Box textAlign="center" py="12">
        <Text fontSize="lg" color="red.500">
          Error when fetching: {error.message}
        </Text>
      </Box>
    )
  }

  return (
    <Box className={styles.container} px="4" py="8">
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing="8" justifyItems="center">
        {products.products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            product={product}
            quantity={quantities[product.id]}
            updateQuantity={updateQuantity}
            updateWishlist={updateWishlist}
            removeFromWishlist={removeFromWishlist}
            wishlist={wishlist}
          />
        ))}
      </SimpleGrid>
    </Box>
  )
}

