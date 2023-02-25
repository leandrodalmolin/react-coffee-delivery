import { IBasketItem } from './reducer'

/* eslint-disable no-unused-vars */
export enum ActionTypes {
  ADD_ITEM = 'ADD_ITEM',
  UPDATE_ITEM = 'UPDATE_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
  CLEAR_BASKET = 'CLEAR_BASKET',
}

export function addBasketItemAction(item: IBasketItem) {
  return {
    type: ActionTypes.ADD_ITEM,
    item,
  }
}

export function updateBasketItemAction(item: IBasketItem) {
  return {
    type: ActionTypes.UPDATE_ITEM,
    item,
  }
}

export function removeBasketItemAction(item: IBasketItem) {
  return {
    type: ActionTypes.REMOVE_ITEM,
    item,
  }
}

export function clearBasketAction() {
  return {
    type: ActionTypes.CLEAR_BASKET,
  }
}
