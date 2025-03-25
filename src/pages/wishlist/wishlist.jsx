import ProductCard from "../../components/productCard/productCard"
import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react"
import styles from "./wishlist.module.css"

export default function Wishlist({
  wishBag,
  quantities,
  updateQuantity,
  updateWishlist,
  removeFromWishlist,
  wishlist,
}) {
  return (
    <Box className={styles.container} px="4" py="8">
      <Heading as="h1" size="lg" mb="6" textAlign="center">
        Items - Favorites
      </Heading>

      {wishBag.length === 0 ? (
        <Box textAlign="center" py="12">
          <Text fontSize="lg">Your wishlist is empty</Text>
        </Box>
      ) : (
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing="8" justifyItems="center">
          {wishBag.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              product={product}
              quantity={quantities[product.id] || 0}
              updateQuantity={updateQuantity}
              updateWishlist={updateWishlist}
              removeFromWishlist={removeFromWishlist}
              wishlist={wishlist}
            />
          ))}
        </SimpleGrid>
      )}
    </Box>
  )
}

