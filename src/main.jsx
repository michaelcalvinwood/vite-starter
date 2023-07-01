// 1. Import the extendTheme function
import { extendTheme } from '@chakra-ui/react'
import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'
import App from './App';

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  
}

const theme = extendTheme({ colors })

// 3. Pass the `theme` prop to the `ChakraProvider`

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
)