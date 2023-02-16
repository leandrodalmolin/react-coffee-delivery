import { createContext, ReactNode, useMemo, useReducer } from 'react'
import {
  ActionTypes,
  BasketItem,
  basketReducer,
  defaultBasketState,
} from '../reducers/basket'

interface BasketContextType {
  items: BasketItem[]
  deliveryCost: number
  totalAmount: number
  addItemToBasket: (item: BasketItem) => void
  removeItemFromBasket: (item: BasketItem) => void
  clearBasket: () => void
}

export const BasketContext = createContext({} as BasketContextType)

interface BasketContextProviderProps {
  children: ReactNode
}

export function BasketContextProvider({
  children,
}: BasketContextProviderProps) {
  const [basketState, dispatchBasketAction] = useReducer(
    basketReducer,
    defaultBasketState,
  )

  // Hardcoded delivery for now
  const deliveryCost = 3.5

  function addItemToBasket(item: BasketItem) {
    dispatchBasketAction({ type: ActionTypes.ADD_ITEM, item })
  }

  function removeItemFromBasket(item: BasketItem) {
    dispatchBasketAction({ type: ActionTypes.REMOVE_ITEM, item })
  }

  function clearBasket() {
    dispatchBasketAction({ type: ActionTypes.CLEAR_BASKET })
  }

  // Watch for changes and it doesn't recalculate
  // the total amount in case screen get rerendered
  const totalAmount = useMemo(() => {
    return basketState.items.reduce(
      (acc, item) => item.price * item.quantity + acc,
      0,
    )
  }, [basketState.items])

  return (
    <BasketContext.Provider
      value={{
        items: basketState.items,
        deliveryCost,
        totalAmount,
        addItemToBasket,
        removeItemFromBasket,
        clearBasket,
      }}
    >
      {children}
    </BasketContext.Provider>
  )
}
