import actionTypes from '../../constants/actionTypes';

export function orderRemoveItemCart(item) {
  return (dispatch) => {
    dispatch({
      type: actionTypes.ORDER_REMOVE_ITEM_CART,
      response: {
        item,
      },
    });
  };
}

export function orderChangeQualityCart(item) {
  return (dispatch) => {
    dispatch({
      type: actionTypes.ORDER_CHANGE_QUALITY_CART,
      response: {
        item,
      },
    });
  };
}

export function orderRemoveCart() {
  return (dispatch) => {
    dispatch({
      type: actionTypes.ORDER_SAVE_CART,
      response: {
        listItem: [],
      },
    });
  };
}

export function orderAddToCart(item) {
  return (dispatch) => {
    dispatch({
      type: actionTypes.ORDER_ADD_TO_CART,
      response: {
        item,
      },
    });
  };
}

