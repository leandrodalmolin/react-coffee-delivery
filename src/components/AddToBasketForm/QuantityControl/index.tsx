/* eslint-disable react/display-name */
import { Minus, Plus } from 'phosphor-react'
import { forwardRef } from 'react'
import { InputNumber, QuantityControlContainer } from './styles'

interface QuantityControlProps {
  onDecrementQuantity: () => void
  onIncrementQuantity: () => void
}

export const QuantityControl = forwardRef<any, QuantityControlProps>(
  (props, ref) => {
    const { onDecrementQuantity, onIncrementQuantity } = props

    return (
      <QuantityControlContainer>
        <button type="button" onClick={onDecrementQuantity}>
          <Minus weight="bold" />
          <span className="visually-hidden">Decrement floor</span>
        </button>

        <InputNumber
          ref={ref}
          type="number"
          min={0}
          max={99}
          defaultValue={0}
        />

        <button type="button" onClick={onIncrementQuantity}>
          <Plus weight="bold" />
          <span className="visually-hidden">Increment floor</span>
        </button>
      </QuantityControlContainer>
    )
  },
)
