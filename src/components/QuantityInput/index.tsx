import { Minus, Plus } from 'phosphor-react'
import { ChangeEvent } from 'react'
import { InputNumber, QuantityInputContainer } from './styles'

interface QuantityInputProps {
  itemId?: string
  quantity: number
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
}: QuantityInputProps) {
  return (
    <QuantityInputContainer>
      <button type="button" onClick={onDecrement}>
        <Minus weight="bold" />
        <span className="visually-hidden">Decrement floor</span>
      </button>

      <InputNumber
        data-item-id={itemId}
        type="number"
        value={quantity}
        onChange={onChange}
      />

      <button type="button" onClick={onIncrement}>
        <Plus weight="bold" />
        <span className="visually-hidden">Increment floor</span>
      </button>
    </QuantityInputContainer>
  )
}
