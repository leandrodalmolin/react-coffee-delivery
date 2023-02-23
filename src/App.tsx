import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { BasketContextProvider } from './contexts/BasketContext'
import { ToastContextProvider } from './contexts/ToastContext'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <BasketContextProvider>
          <ToastContextProvider>
            <Router />
          </ToastContextProvider>
        </BasketContextProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
