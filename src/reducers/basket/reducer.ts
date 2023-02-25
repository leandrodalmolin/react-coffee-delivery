import { ActionTypes } from './actions'

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
  switch (action.type) {
    /**
     * Add item
     */
    case ActionTypes.ADD_ITEM: {
      return {
        items: [...state.items, action.item],
      }
    }

    /**
     * Update item
     */
    case ActionTypes.UPDATE_ITEM: {
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
    case ActionTypes.REMOVE_ITEM: {
      return {
        items: state.items.filter((product) => product.id !== action.item.id),
      }
    }

    /**
     * Clear basket
     */
    case ActionTypes.CLEAR_BASKET: {
      return defaultBasketState
    }

    default:
      return defaultBasketState
  }
}
