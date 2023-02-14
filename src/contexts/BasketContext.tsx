import { createContext, ReactNode, useState } from 'react'

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

interface BasketItem {
  id: string
  title: string
  price: number
  quantity: number
}

interface BasketContextType {
  items: BasketItem[]
  addItemToBasket: ({ id, title, price, quantity }: BasketItem) => void
  getNumberOfItems: () => number
}

export const BasketContext = createContext({} as BasketContextType)

interface BasketContextProviderProps {
  children: ReactNode
}

// eslint-disable-next-line prettier/prettier
interface addItemToBasketProps extends BasketItem { }

export function BasketContextProvider({
  children,
}: BasketContextProviderProps) {
  const [items, setItems] = useState<BasketItem[]>([])

  function addItemToBasket({
    id,
    title,
    price,
    quantity,
  }: addItemToBasketProps) {
    const item = items.find((item) => item.id === id)
    if (item) {
      // Remove item
      if (quantity === 0) {
        setItems((oldItems) => {
          const newItems = oldItems.filter((product) => product !== item)
          return [...newItems]
        })
      }

      // Update item
      else {
        setItems((oldItems) => {
          const newItems = oldItems.filter((product) => product !== item)
          return [...newItems, { id, title, price, quantity }]
        })
      }

      return
    }

    // Add item
    setItems((oldItems) => [...oldItems, { id, title, price, quantity }])
  }

  function getNumberOfItems() {
    return items.length
  }

  return (
    <BasketContext.Provider
      value={{ items, addItemToBasket, getNumberOfItems }}
    >
      {children}
    </BasketContext.Provider>
  )
}
