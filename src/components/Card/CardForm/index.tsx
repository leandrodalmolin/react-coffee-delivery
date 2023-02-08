import { ShoppingCartSimple } from 'phosphor-react'
import { useRef } from 'react'
import { QuantityControl } from './QuantityControl'
import { CardFormContainer } from './styles'

export type QuantityInputRefType = HTMLInputElement | null

export function CardForm() {
  const quantityInputRef = useRef<QuantityInputRefType>(null)

  function incrementQuantity() {
    if (quantityInputRef.current && +quantityInputRef.current.value < 99) {
      quantityInputRef.current.value = String(
        +quantityInputRef.current.value + 1,
      )
    }
  }

  function decrementQuantity() {
    if (quantityInputRef.current && +quantityInputRef.current.value > 0) {
      quantityInputRef.current.value = String(
        +quantityInputRef.current.value - 1,
      )
    }
  }

  return (
    <CardFormContainer>
      <QuantityControl
        ref={quantityInputRef}
        onDecrementQuantity={decrementQuantity}
        onIncrementQuantity={incrementQuantity}
      />
      <button type="button">
        <ShoppingCartSimple size={22} weight="fill" />
      </button>
    </CardFormContainer>
  )
}
