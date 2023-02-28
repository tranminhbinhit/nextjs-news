import actionTypes from '../../constants/actionTypes';

export function receiveSetting(setting) {
  return (dispatch) => {
    dispatch({
      type: actionTypes.RECEIVE_SETTING,
      response: {
        config: setting,
      },
    });
  };
}
