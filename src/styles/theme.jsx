import { extendTheme } from "@chakra-ui/react"

const colors = {
  brand: {
    50: "#f7f7f7",
    100: "#e6e6e6",
    200: "#cccccc",
    300: "#b3b3b3",
    400: "#999999",
    500: "#808080",
    600: "#666666",
    700: "#4d4d4d",
    800: "#333333",
    900: "#1a1a1a",
  },
  light: {
    bg: "#ffffff",
    text: "#1a1a1a",
    muted: "#666666",
    border: "#e6e6e6",
    accent: "#f7f7f7",
    card: "#ffffff",
    hover: "#f2f2f2",
  },
  dark: {
    bg: "#121212",
    text: "#f7f7f7",
    muted: "#b3b3b3",
    border: "#333333",
    accent: "#1e1e1e",
    card: "#1e1e1e",
    hover: "#2a2a2a",
  },
}

const fonts = {
  body: "'Inter', sans-serif",
  heading: "'Inter', sans-serif",
}

const theme = extendTheme({
  colors,
  fonts,
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === "dark" ? "dark.bg" : "light.bg",
        color: props.colorMode === "dark" ? "dark.text" : "light.text",
        transition: "background-color 0.2s, color 0.2s",
      },
    }),
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "500",
        borderRadius: "4px",
        transition: "all 0.2s",
      },
      variants: {
        solid: (props) => ({
          bg: props.colorMode === "dark" ? "dark.text" : "light.text",
          color: props.colorMode === "dark" ? "dark.bg" : "light.bg",
          _hover: {
            bg: props.colorMode === "dark" ? "dark.muted" : "brand.700",
            transform: "translateY(-2px)",
            boxShadow: "md",
          },
        }),
        outline: (props) => ({
          bg: "transparent",
          border: "1px solid",
          borderColor: props.colorMode === "dark" ? "dark.border" : "light.border",
          color: props.colorMode === "dark" ? "dark.text" : "light.text",
          _hover: {
            bg: props.colorMode === "dark" ? "dark.hover" : "light.hover",
            transform: "translateY(-2px)",
          },
        }),
      },
    },
    NumberInput: {
      baseStyle: (props) => ({
        field: {
          bg: props.colorMode === "dark" ? "dark.accent" : "light.accent",
          borderColor: props.colorMode === "dark" ? "dark.border" : "light.border",
        },
      }),
    },
  },
})

export default theme

