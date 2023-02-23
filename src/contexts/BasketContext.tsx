import { createContext, ReactNode, useEffect, useMemo, useReducer } from 'react'
import {
  ActionTypes,
  BasketItem,
  basketReducer,
  defaultBasketState,
} from '../reducers/basket'

/**
 * Constants
 */
const LOCAL_STORAGE_TAG = '@coffee-delivery:basket-state-1.0.0'
export const DELIVERY_COST = 3.5
export const QUANTITY_THRESHOLD_MIN = 1
export const QUANTITY_THRESHOLD_MAX = 99

type TotalsType = {
  orderAmount: number
  itemsAmount: number
  itemsQuantity: number
}

interface BasketContextType {
  items: BasketItem[]
  totals: TotalsType
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
    // Fetch initial data from localStorage (if any)
    (initialBasketState) => {
      const storedStateJSON = localStorage.getItem(LOCAL_STORAGE_TAG)
      if (storedStateJSON) {
        return JSON.parse(storedStateJSON)
      }

      return initialBasketState
    },
  )

  // Persist state into the localStorage
  useEffect(() => {
    const stateJSON = JSON.stringify(basketState)
    localStorage.setItem(LOCAL_STORAGE_TAG, stateJSON)
  }, [basketState])

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

  function findBasketItemById(id: string): BasketItem {
    return basketState.items.find((item) => item.id === id)
  }

  // Watch for changes and it doesn't recalculate
  // the total amount in case screen get rerendered
  const totals = useMemo(() => {
    return basketState.items.reduce(
      (acc, item) => {
        const currentItemsQuantity = item.quantity + acc.itemsQuantity
        const currentItemsAmount = item.price * item.quantity + acc.itemsAmount
        const currentOrderAmount = currentItemsAmount + DELIVERY_COST

        return {
          orderAmount: currentOrderAmount,
          itemsAmount: currentItemsAmount,
          itemsQuantity: currentItemsQuantity,
        }
      },
      {
        orderAmount: 0,
        itemsAmount: 0,
        itemsQuantity: 0,
      } as TotalsType,
    )
  }, [basketState.items])

  return (
    <BasketContext.Provider
      value={{
        items: basketState.items,
        totals,
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
