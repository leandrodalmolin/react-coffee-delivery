import { Trash } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { priceFormatter } from '../../../../../utils/formatter'
import {
  Divider,
  ItemCentralContainer,
  ItemLeftContainer,
  ItemRightContainer,
  SelectedProductsItem,
  SelectedProductsList,
} from './styles'
import { ChangeEvent, useContext } from 'react'
import { BasketContext } from '../../../../../contexts/BasketContext'
import { QuantityInput } from '../../../../../components/QuantityInput'
import { BasketItem } from '../../../../../reducers/basket'

export function SelectedProducts() {
  const theme = useTheme()
  const {
    items: basketItems,
    addItemToBasket,
    removeItemFromBasket,
  } = useContext(BasketContext)

  function handleQuantityIncrement(item: BasketItem) {
    if (item.quantity < 99) {
      addItemToBasket({ ...item, quantity: item.quantity + 1 })
    }
  }

  function handleQuantityDecrement(item: BasketItem) {
    if (item.quantity > 0) {
      addItemToBasket({ ...item, quantity: item.quantity - 1 })
    }
  }

  function handleQuantityChange(event: ChangeEvent<HTMLInputElement>) {
    const itemId = event.target.dataset.itemId
    const item = basketItems.find((product) => product.id === itemId)
    if (!item) return

    const newQuantity = Number(event.target.value)
    addItemToBasket({ ...item, quantity: newQuantity })
  }

  function handleRemoveButtonClick(item: BasketItem) {
    removeItemFromBasket(item)
  }

  return (
    <SelectedProductsList>
      {basketItems.map((product) => {
        const totalPrice = product.price * product.quantity
        const formattedTotalPrice = priceFormatter.format(totalPrice)

        return (
          <div key={product.id}>
            <SelectedProductsItem>
              <ItemLeftContainer>
                <img src={product.image} alt={product.title} />
              </ItemLeftContainer>
              <ItemCentralContainer>
                <p>{product.title}</p>
                <QuantityInput
                  itemId={product.id}
                  quantity={product.quantity}
                  onChange={handleQuantityChange}
                  onIncrement={handleQuantityIncrement.bind(null, product)}
                  onDecrement={handleQuantityDecrement.bind(null, product)}
                />
                <button
                  type="button"
                  onClick={handleRemoveButtonClick.bind(null, product)}
                >
                  <Trash size={16} color={theme['purple-500']} />
                  Remove
                </button>
              </ItemCentralContainer>
              <ItemRightContainer>{formattedTotalPrice}</ItemRightContainer>
            </SelectedProductsItem>
            <Divider />
          </div>
        )
      })}
    </SelectedProductsList>
  )
}
