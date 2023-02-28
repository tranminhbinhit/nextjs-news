import actionTypes from '../../constants/actionTypes';

export function receiveCategory(listCategory) {
  return (dispatch) => {
    dispatch({
      type: actionTypes.RECEIVE_CATEGORY,
      response: listCategory,
    });
  };
}
