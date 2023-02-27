import { Minus, Plus } from 'phosphor-react'
import { ChangeEvent } from 'react'
import { InputNumber, QuantityInputContainer } from './styles'

interface IQuantityInputProps {
  itemId?: string
  quantity: number
  disableDecrementButton?: boolean
  disableIncrementButton?: boolean
  onIncrement: () => void
  onDecrement: () => void
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export function QuantityInput({
  itemId = '',
  quantity,
  onDecrement,
  onIncrement,
  onChange,
  disableDecrementButton = false,
  disableIncrementButton = false,
}: IQuantityInputProps) {
  return (
    <>
      <QuantityInputContainer>
        <button
          type="button"
          data-testid="decrement-btn"
          onClick={onDecrement}
          disabled={disableDecrementButton}
        >
          <Minus weight="bold" />
          <span className="visually-hidden">Decrement floor</span>
        </button>

        <InputNumber
          data-item-id={itemId}
          type="number"
          value={quantity}
          onChange={onChange}
        />

        <button
          type="button"
          data-testid="increment-btn"
          onClick={onIncrement}
          disabled={disableIncrementButton}
        >
          <Plus weight="bold" />
          <span className="visually-hidden">Increment floor</span>
        </button>
      </QuantityInputContainer>
    </>
  )
}
