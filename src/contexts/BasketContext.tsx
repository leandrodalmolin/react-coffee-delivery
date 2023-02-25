import { createContext, ReactNode, useEffect, useMemo, useReducer } from 'react'
import {
  addBasketItemAction,
  clearBasketAction,
  removeBasketItemAction,
  updateBasketItemAction,
} from '../reducers/basket/actions'
import {
  IBasketItem,
  basketReducer,
  defaultBasketState,
} from '../reducers/basket/reducer'

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

interface IBasketContext {
  items: IBasketItem[]
  totals: TotalsType
  addBasketItem: (item: IBasketItem) => void
  removeBasketItem: (item: IBasketItem) => void
  updateBasketItem: (item: IBasketItem) => void
  findBasketItemById: (id: string) => IBasketItem
  clearBasket: () => void
}

export const BasketContext = createContext({} as IBasketContext)

interface IBasketContextProviderProps {
  children: ReactNode
}

export function BasketContextProvider({
  children,
}: IBasketContextProviderProps) {
  const [basketState, dispatch] = useReducer(
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

  function addBasketItem(item: IBasketItem) {
    dispatch(addBasketItemAction(item))
  }

  function updateBasketItem(item: IBasketItem) {
    dispatch(updateBasketItemAction(item))
  }

  function removeBasketItem(item: IBasketItem) {
    dispatch(removeBasketItemAction(item))
  }

  function clearBasket() {
    dispatch(clearBasketAction)
  }

  function findBasketItemById(id: string): IBasketItem {
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
