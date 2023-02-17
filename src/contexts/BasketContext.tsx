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
  addBasketItem: (item: BasketItem) => void
  removeBasketItem: (item: BasketItem) => void
  updateBasketItem: (item: BasketItem) => void
  findBasketItemById: (id: string) => BasketItem
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

  function addBasketItem(item: BasketItem) {
    dispatchBasketAction({ type: ActionTypes.ADD_ITEM, item })
  }

  function updateBasketItem(item: BasketItem) {
    dispatchBasketAction({ type: ActionTypes.UPDATE_ITEM, item })
  }

  function removeBasketItem(item: BasketItem) {
    dispatchBasketAction({ type: ActionTypes.REMOVE_ITEM, item })
  }

  function clearBasket() {
    dispatchBasketAction({ type: ActionTypes.CLEAR_BASKET })
  }

  function findBasketItemById(id: string) {
    return basketState.items.find((item) => item.id === id)
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
        addBasketItem,
        updateBasketItem,
        removeBasketItem,
        findBasketItemById,
        clearBasket,
      }}
    >
      {children}
    </BasketContext.Provider>
  )
}
