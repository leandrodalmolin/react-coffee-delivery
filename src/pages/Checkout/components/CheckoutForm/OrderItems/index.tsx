import { Trash } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { priceFormatter } from '../../../../../utils/formatter'
import {
  Divider,
  ItemCentralContainer,
  ItemLeftContainer,
  ItemRightContainer,
  OrderItemsItem,
  OrderItemsList,
} from './styles'
import { ChangeEvent, useContext } from 'react'
import {
  BasketContext,
  QUANTITY_THRESHOLD_MAX,
  QUANTITY_THRESHOLD_MIN,
} from '../../../../../contexts/BasketContext'
import { QuantityInput } from '../../../../../components/QuantityInput'
import { BasketItem } from '../../../../../reducers/basket'

export function OrderItems() {
  const theme = useTheme()
  const {
    items: basketItems,
    updateBasketItem,
    removeBasketItem,
  } = useContext(BasketContext)

  function handleQuantityIncrement(item: BasketItem) {
    const newQuantity = item.quantity + 1
    if (newQuantity <= QUANTITY_THRESHOLD_MAX) {
      updateBasketItem({ ...item, quantity: newQuantity })
    }
  }

  function handleQuantityDecrement(item: BasketItem) {
    const newQuantity = item.quantity - 1
    if (newQuantity >= QUANTITY_THRESHOLD_MIN) {
      updateBasketItem({ ...item, quantity: newQuantity })
    }
  }

  function handleQuantityChange(event: ChangeEvent<HTMLInputElement>) {
    const itemId = event.target.dataset.itemId
    const item = basketItems.find((product) => product.id === itemId)
    if (!item) return

    const newQuantity = Number(event.target.value)
    if (newQuantity > QUANTITY_THRESHOLD_MAX) {
      return
    }

    if (newQuantity > QUANTITY_THRESHOLD_MIN) {
      updateBasketItem({ ...item, quantity: newQuantity })
    }
  }

  function handleRemoveButtonClick(item: BasketItem) {
    removeBasketItem(item)
  }

  return (
    <OrderItemsList>
      {basketItems.map((product) => {
        const totalPrice = product.price * product.quantity
        const formattedTotalPrice = priceFormatter.format(totalPrice)

        return (
          <div key={product.id}>
            <OrderItemsItem>
              <ItemLeftContainer>
                <img src={product.image} alt={product.title} />
              </ItemLeftContainer>
              <ItemCentralContainer>
                <p>{product.title}</p>
                <QuantityInput
                  itemId={product.id}
                  quantity={product.quantity}
                  disableDecrementButton={
                    product.quantity === QUANTITY_THRESHOLD_MIN
                  }
                  disableIncrementButton={
                    product.quantity >= QUANTITY_THRESHOLD_MAX
                  }
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
            </OrderItemsItem>
            <Divider />
          </div>
        )
      })}
    </OrderItemsList>
  )
}
