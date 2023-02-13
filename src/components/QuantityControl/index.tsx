/* eslint-disable react/display-name */
import { Minus, Plus } from 'phosphor-react'
import { useRef } from 'react'
import { InputNumber, QuantityControlContainer } from './styles'

type QuantityInputRefType = HTMLInputElement | null

export function QuantityControl() {
  const quantityRef = useRef<QuantityInputRefType>(null)

  function onIncrementQuantity() {
    if (quantityRef.current && +quantityRef.current.value < 99) {
      quantityRef.current.value = String(+quantityRef.current.value + 1)
    }
  }

  function onDecrementQuantity() {
    if (quantityRef.current && +quantityRef.current.value > 0) {
      quantityRef.current.value = String(+quantityRef.current.value - 1)
    }
  }

  return (
    <QuantityControlContainer>
      <button type="button" onClick={onDecrementQuantity}>
        <Minus weight="bold" />
        <span className="visually-hidden">Decrement floor</span>
      </button>

      <InputNumber
        ref={quantityRef}
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
}
