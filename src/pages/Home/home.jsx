import styles from "./home.module.css"
import { Link } from "react-router-dom"
import { Box, Heading, Text, Button, useColorModeValue } from "@chakra-ui/react"

export default function Home() {
  const buttonBg = useColorModeValue("light.text", "dark.text")
  const buttonColor = useColorModeValue("light.bg", "dark.bg")

  return (
    <Box className={styles.main}>
      <Heading as="h1" size="2xl" textAlign="center" mb="4">
        Welcome To footwear.
      </Heading>

      <Text className={styles.tagline} fontSize="xl" textAlign="center" mb="8" opacity="0.8">
        Step into style, walk with confidence
      </Text>

      <Button
        as={Link}
        to="/shop"
        size="lg"
        bg={buttonBg}
        color={buttonColor}
        _hover={{
          transform: "translateY(-2px)",
          boxShadow: "lg",
        }}
        className={styles.shopNow}
      >
        Shop Now
      </Button>
    </Box>
  )
}

