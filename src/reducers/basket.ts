/* eslint-disable no-unused-vars */
export enum ActionTypes {
  ADD_ITEM = 'ADD_ITEM',
  UPDATE_ITEM = 'UPDATE_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
  CLEAR_BASKET = 'CLEAR_BASKET',
}

export interface IBasketItem {
  id: string
  title: string
  price: number
  quantity: number
  image: string
}

export interface IBasketState {
  items: IBasketItem[]
}

export const defaultBasketState = {
  items: <IBasketItem[]>[],
}

export function basketReducer(state: IBasketState, action: any) {
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
