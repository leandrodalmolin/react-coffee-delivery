/* eslint-disable no-unused-vars */
export enum ActionTypes {
  ADD_ITEM = 'ADD_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
}

export interface BasketItem {
  id: string
  title: string
  price: number
  quantity: number
  image: string
}

export interface BasketState {
  items: BasketItem[]
}

export const defaultBasketState = {
  items: <BasketItem[]>[],
}

export function basketReducer(state: BasketState, action: any) {
  /**
   * Add to basket
   */
  if (action.type === ActionTypes.ADD_ITEM) {
    const item = state.items.find((item) => item.id === action.item.id)

    // Remove item
    if (item && action.item.quantity === 0) {
      return {
        items: state.items.filter((product) => product !== item),
      }
    }
    // Update item
    else if (item && action.item.quantity > 0) {
      const itemIndex = state.items.findIndex((product) => product === item)
      const updatedItems = [...state.items]
      updatedItems[itemIndex] = action.item
      return {
        items: updatedItems,
      }
    }
    // New item
    else if (!item && action.item.quantity > 0) {
      return {
        items: [...state.items, action.item],
      }
    }

    return {
      items: state.items,
    }
  }

  /**
   * Remove from basket
   */
  if (action.type === ActionTypes.REMOVE_ITEM) {
    const item = state.items.find((item) => item.id === action.item.id)
    if (item) {
      return {
        items: state.items.filter((product) => product !== item),
      }
    }

    return {
      items: state.items,
    }
  }

  return defaultBasketState
}
