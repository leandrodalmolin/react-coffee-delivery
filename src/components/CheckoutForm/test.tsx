import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { CheckoutForm } from '.'
import { BasketContext, IBasketContext } from '../../contexts/BasketContext'
import { defaultTheme } from '../../styles/themes/default'

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
  Link: jest.fn(),
}))

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}))

const basketContextValues = {
  items: [],
  totals: {
    orderAmount: 0,
    itemsAmount: 0,
    itemsQuantity: 0,
  },
  addBasketItem: jest.fn(),
  updateBasketItem: jest.fn(),
  removeBasketItem: jest.fn(),
  findBasketItemById: jest.fn(),
  clearBasket: jest.fn(),
} as IBasketContext

describe('CheckoutForm Component', () => {
  it('renders correctly', () => {
    basketContextValues.items = [
      {
        id: 'p1',
        title: 'Product title',
        price: 2.5,
        quantity: 5,
        image: 'image.png',
      },
    ]

    render(
      <ThemeProvider theme={defaultTheme}>
        <BasketContext.Provider value={basketContextValues}>
          <CheckoutForm />
        </BasketContext.Provider>
      </ThemeProvider>,
    )

    expect(screen.getByText('Product title')).toBeInTheDocument()
  })

  it('hides form and show custom message when basket is empty', () => {
    basketContextValues.items = []

    render(
      <ThemeProvider theme={defaultTheme}>
        <BasketContext.Provider value={basketContextValues}>
          <CheckoutForm />
        </BasketContext.Provider>
      </ThemeProvider>,
    )

    expect(screen.getByText('Oops, your basket is empty!')).toBeInTheDocument()
  })
})
