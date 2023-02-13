import { ShoppingCartSimple } from 'phosphor-react'
import { QuantityControl } from '../QuantityControl'
import { AddToBasketFormContainer } from './styles'

export function AddToBasketForm() {
  return (
    <AddToBasketFormContainer>
      <QuantityControl />
      <button type="button">
        <ShoppingCartSimple size={22} weight="fill" />
      </button>
    </AddToBasketFormContainer>
  )
}
