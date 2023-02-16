import { createContext, ReactNode, useReducer } from 'react'
import {
  ActionTypes,
  BasketItem,
  basketReducer,
  defaultBasketState,
} from '../reducers/basket'

export type TagType =
  | 'Traditional'
  | 'Cold'
  | 'With Milk'
  | 'Alcoholic'
  | 'Special'

export interface Product {
  id: string
  title: string
  description: string
  tags: TagType[]
  price: number
  image: string
}

interface BasketContextType {
  items: BasketItem[]
  addItemToBasket: (item: BasketItem) => void
  removeItemFromBasket: (item: BasketItem) => void
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

  function addItemToBasket(item: BasketItem) {
    dispatchBasketAction({ type: ActionTypes.ADD_ITEM, item })
  }

  function removeItemFromBasket(item: BasketItem) {
    dispatchBasketAction({ type: ActionTypes.REMOVE_ITEM, item })
  }

  return (
    <BasketContext.Provider
      value={{
        items: basketState.items,
        addItemToBasket,
        removeItemFromBasket,
      }}
    >
      {children}
    </BasketContext.Provider>
  )
}
