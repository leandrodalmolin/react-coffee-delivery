import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ThemeProvider } from 'styled-components'
import { OrderItems } from '.'
import {
  BasketContext,
  IBasketContext,
} from '../../../../../contexts/BasketContext'
import { defaultTheme } from '../../../../../styles/themes/default'

const mockRemoveBasketItem = jest.fn()

const basketContextValues = {
  items: [
    {
      id: 'p1',
      title: 'Product title',
      price: 2.5,
      quantity: 5,
      image: 'image.png',
    },
  ],
  totals: {
    orderAmount: 0,
    itemsAmount: 0,
    itemsQuantity: 0,
  },
  addBasketItem: jest.fn(),
  updateBasketItem: jest.fn(),
  removeBasketItem: mockRemoveBasketItem,
  findBasketItemById: jest.fn(),
  clearBasket: jest.fn(),
} as IBasketContext

describe('OrderItems Component', () => {
  it('renders list of basket items correctly', () => {
    render(
      <BasketContext.Provider value={basketContextValues}>
        <ThemeProvider theme={defaultTheme}>
          <OrderItems />
        </ThemeProvider>
      </BasketContext.Provider>,
    )

    expect(screen.getByText('Product title')).toBeInTheDocument()
  })

  it('removes item from the basket', async () => {
    const user = userEvent.setup()

    render(
      <BasketContext.Provider value={basketContextValues}>
        <ThemeProvider theme={defaultTheme}>
          <OrderItems />
        </ThemeProvider>
      </BasketContext.Provider>,
    )

    const removeButton = screen.getByText('Remove')
    await user.click(removeButton)

    expect(mockRemoveBasketItem).toHaveBeenCalled()
  })
})
