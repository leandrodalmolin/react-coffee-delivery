import { Trash } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { priceFormatter } from '../../../utils/formatter'
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
} from '../../../contexts/BasketContext'
import { QuantityInput } from '../../QuantityInput'
import { IBasketItem } from '../../../reducers/basket/reducer'
import { useToast } from '../../../hooks/useToast'

export function OrderItems() {
  const toast = useToast()
  const theme = useTheme()
  const {
    items: basketItems,
    updateBasketItem,
    removeBasketItem,
  } = useContext(BasketContext)

  function handleQuantityIncrement(item: IBasketItem) {
    const newQuantity = item.quantity + 1
    if (newQuantity <= QUANTITY_THRESHOLD_MAX) {
      updateBasketItem({ ...item, quantity: newQuantity })
    }
  }

  function handleQuantityDecrement(item: IBasketItem) {
    const newQuantity = item.quantity - 1
    if (newQuantity >= QUANTITY_THRESHOLD_MIN) {
      updateBasketItem({ ...item, quantity: newQuantity })
    }
  }

  function handleQuantityChange(event: ChangeEvent<HTMLInputElement>) {
    const itemId = event.target.dataset.itemId
    const item = basketItems.find((product) => product.id === itemId)
    if (!item) return

    // Update basket item
    const newQuantity = Number(event.target.value)
    if (isQuantityValid(newQuantity)) {
      updateBasketItem({ ...item, quantity: newQuantity })
      return
    }

    // Notify invalid quantity
    toast({
      title: 'Invalid Quantity',
      description: `Quantity must be between ${QUANTITY_THRESHOLD_MIN} and ${QUANTITY_THRESHOLD_MAX}.`,
      type: 'foreground',
    })
  }

  function handleRemoveButtonClick(item: IBasketItem) {
    removeBasketItem(item)
  }

  function isQuantityValid(quantity: number) {
    return (
      quantity >= QUANTITY_THRESHOLD_MIN && quantity <= QUANTITY_THRESHOLD_MAX
    )
  }

  return (
    <>
      <OrderItemsList>
        {basketItems.map((product) => {
          const totalPrice = product.price * product.quantity
          const formattedTotalPrice = priceFormatter.format(totalPrice)

          return (
            <li key={product.id}>
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
            </li>
          )
        })}
      </OrderItemsList>
    </>
  )
}
