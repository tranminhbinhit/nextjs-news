import actionTypes from "../../constants/actionTypes";

const initialState = {
  isReady: false,
  isLoading: false,
  menus: [],
  popup: {
    isPopupMobileCart: false,
    isPopupMobileMenu: false,
    isPopupMobileSearch: false,
  }
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FINISH_INIT_APP: {
      return {
        ...state,
        isReady: true,
      };
    }
    case actionTypes.START_APP_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case actionTypes.STOP_APP_LOADING: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case actionTypes.RECEIVE_MENU: {
      const { menus } = action.response;
      return {
        ...state,
        menus,
      };
    }

    case actionTypes.CHANGE_STATE_POPUP: {
      const { controlKey, value } = action.response;
      return {
        ...state,
        popup: {
          ...state.popup,
          [controlKey] : value,
        }
      };
    }
    default:
      return state;
  }
}

export default appReducer;
