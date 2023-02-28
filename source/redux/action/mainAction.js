import actionTypes from "../../constants/actionTypes";

export function changeLanguage(language) {
  return (dispatch) => {
    dispatch({
      type: actionTypes.CHANGE_LANGUAGE,
      response: language,
    });
  };
}

export function receiveMenu(menus) {
  return (dispatch) => {
    dispatch({
      type: actionTypes.RECEIVE_MENU,
      response: {
        menus
      },
    });
  };
}

export function startAppLoading() {
  return {
    type: actionTypes.START_APP_LOADING,
  };
}

export function stopAppLoading() {
  return {
    type: actionTypes.STOP_APP_LOADING,
  };
}

export function changeStatePopup(controlKey, value) {
  return (dispatch) => {
    dispatch({
      type: actionTypes.CHANGE_STATE_POPUP,
      response: {
        controlKey,
        value
      },
    });
  };
}