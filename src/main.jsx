import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./styles/reset.css"
import App from "./App.jsx"
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react"
import theme from "./styles/theme"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </StrictMode>,
)

