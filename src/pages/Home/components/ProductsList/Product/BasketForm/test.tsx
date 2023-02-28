import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { BasketForm } from '.'
import { RadixToastViewport } from '../../../../../../components/Toast'
import { BasketContextProvider } from '../../../../../../contexts/BasketContext'
import { ToastContextProvider } from '../../../../../../contexts/ToastContext'
import { IProduct } from '../../../../../../data'
import { defaultTheme } from '../../../../../../styles/themes/default'

const product = {
  id: 'p1',
  title: 'Title',
  description: 'Description',
  tags: ['Traditional'],
  price: 2.5,
  image: 'image.png',
} as IProduct

describe('BasketForm Component', () => {
  it('renders correctly', () => {
    render(<BasketForm product={product} />)

    const idHiddenField = screen.getByDisplayValue('p1')
    expect(idHiddenField).toBeInTheDocument()
  })

  it('adds product to the basket when form is submitted', async () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <BasketContextProvider>
            <ToastContextProvider>
              <BasketForm product={product} />
              <RadixToastViewport />
            </ToastContextProvider>
          </BasketContextProvider>
        </BrowserRouter>
      </ThemeProvider>,
    )

    const form = screen.getByTestId('basket-form')
    fireEvent.submit(form)

    await waitFor(() => {
      expect(screen.getByText('Basket Updated')).toBeInTheDocument()
    })
  })

  it('resets quantity field after the form submission', async () => {
    const user = userEvent.setup()

    render(
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <BasketContextProvider>
            <ToastContextProvider>
              <BasketForm product={product} />
              <RadixToastViewport />
            </ToastContextProvider>
          </BasketContextProvider>
        </BrowserRouter>
      </ThemeProvider>,
    )

    // Changes input to 15
    const quantityInput = screen.getByRole('spinbutton')
    await user.type(quantityInput, '5')

    // Submit and reset form
    const form = screen.getByTestId('basket-form')
    fireEvent.submit(form)

    // Quantity back to 1
    await waitFor(() => {
      expect(quantityInput).toHaveValue(1)
    })
  })

  it('notifies invalid quantity', async () => {
    const user = userEvent.setup()

    render(
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <BasketContextProvider>
            <ToastContextProvider>
              <BasketForm product={product} />
              <RadixToastViewport />
            </ToastContextProvider>
          </BasketContextProvider>
        </BrowserRouter>
      </ThemeProvider>,
    )

    // Add zeros to existing one (100) and the limit is 99
    const quantityInput = screen.getByRole('spinbutton')
    await user.type(quantityInput, '00')

    await waitFor(() => {
      expect(screen.getByText('Invalid Quantity')).toBeInTheDocument()
    })
  })
})
