import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { QuantityInput } from '.'

const mockChangeQuantity = jest.fn()
const mockDecrementQuantity = jest.fn()
const mockIncrementQuantity = jest.fn()

describe('QuantityInput Component', () => {
  it('renders quantity correctly', () => {
    render(
      <QuantityInput
        quantity={1}
        onChange={mockChangeQuantity}
        onDecrement={mockDecrementQuantity}
        onIncrement={mockIncrementQuantity}
      />,
    )

    const numberInput = screen.getByRole('spinbutton')
    expect(numberInput).toHaveValue(1)
  })

  /**
   * Change
   */
  it('should call the change function when user enter new quantity', async () => {
    render(
      <QuantityInput
        quantity={1}
        onChange={mockChangeQuantity}
        onDecrement={mockDecrementQuantity}
        onIncrement={mockIncrementQuantity}
      />,
    )

    const numberInput = screen.getByRole('spinbutton')
    await userEvent.type(numberInput, '5')

    expect(mockChangeQuantity).toHaveBeenCalled()
  })

  /**
   * Decrement
   */
  it('should call the decrement function on "-" button click', async () => {
    render(
      <QuantityInput
        quantity={1}
        onChange={mockChangeQuantity}
        onDecrement={mockDecrementQuantity}
        onIncrement={mockIncrementQuantity}
      />,
    )

    const button = screen.getByTestId('decrement-btn')
    await userEvent.click(button)

    expect(mockDecrementQuantity).toHaveBeenCalled()
  })

  it('should disable decrement button when "disableDecrementButton" is true', () => {
    render(
      <QuantityInput
        quantity={1}
        onChange={mockChangeQuantity}
        onDecrement={mockDecrementQuantity}
        onIncrement={mockIncrementQuantity}
        disableDecrementButton={true}
      />,
    )

    const button = screen.getByTestId('decrement-btn')
    expect(button).toHaveAttribute('disabled')
  })

  /**
   * Increment
   */
  it('should call the increment function on "+" button click', async () => {
    render(
      <QuantityInput
        quantity={1}
        onChange={mockChangeQuantity}
        onDecrement={mockDecrementQuantity}
        onIncrement={mockIncrementQuantity}
      />,
    )

    const button = screen.getByTestId('increment-btn')
    await userEvent.click(button)

    expect(mockIncrementQuantity).toHaveBeenCalled()
  })

  it('should disable increment button when "disableIncrementButton" is true', () => {
    render(
      <QuantityInput
        quantity={1}
        onChange={mockChangeQuantity}
        onDecrement={mockDecrementQuantity}
        onIncrement={mockIncrementQuantity}
        disableIncrementButton={true}
      />,
    )

    const button = screen.getByTestId('increment-btn')
    expect(button).toHaveAttribute('disabled')
  })
})
