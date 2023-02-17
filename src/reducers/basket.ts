/* eslint-disable no-unused-vars */
export enum ActionTypes {
  ADD_ITEM = 'ADD_ITEM',
  UPDATE_ITEM = 'UPDATE_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
  CLEAR_BASKET = 'CLEAR_BASKET',
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
   * Add item
   */
  if (action.type === ActionTypes.ADD_ITEM) {
    return {
      items: [...state.items, action.item],
    }
  }

  /**
   * Update item
   */
  if (action.type === ActionTypes.UPDATE_ITEM) {
    const itemIndex = state.items.findIndex(
      (product) => product.id === action.item.id,
    )
    const updatedItems = [...state.items]
    updatedItems[itemIndex] = action.item

    return {
      items: updatedItems,
    }
  }

  /**
   * Remove item
   */
  if (action.type === ActionTypes.REMOVE_ITEM) {
    return {
      items: state.items.filter((product) => product.id !== action.item.id),
    }
  }

  /**
   * Clear basket
   */
  if (action.type === ActionTypes.CLEAR_BASKET) {
    return defaultBasketState
  }

  return defaultBasketState
}
