import { render, screen } from '@testing-library/react'
import { OrderTotals } from '.'
import { BasketContext, IBasketContext } from '../../../contexts/BasketContext'

const basketContextValues = {
  items: [],
  totals: {
    orderAmount: 4.5,
    itemsAmount: 1,
    itemsQuantity: 0,
  },
  addBasketItem: jest.fn(),
  updateBasketItem: jest.fn(),
  removeBasketItem: jest.fn(),
  findBasketItemById: jest.fn(),
  clearBasket: jest.fn(),
} as IBasketContext

describe('OrderTotals Component', () => {
  it('renders order total amount correctly', () => {
    render(
      <BasketContext.Provider value={basketContextValues}>
        <OrderTotals />
      </BasketContext.Provider>,
    )

    expect(screen.getByText('£4.50')).toBeInTheDocument()
  })

  it('renders items total amount correctly', () => {
    render(
      <BasketContext.Provider value={basketContextValues}>
        <OrderTotals />
      </BasketContext.Provider>,
    )

    expect(screen.getByText('£1.00')).toBeInTheDocument()
  })
})
