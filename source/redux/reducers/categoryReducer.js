import actionTypes from "../../constants/actionTypes";

const initialState = {
  listCategory: [],
};

function categoryReducer(state = initialState, action) {
  const { response, type } = action;
  switch (type) {
    case actionTypes.RECEIVE_CATEGORY: {
      return {
        ...state,
        listCategory: response,
      };
    }

    default:
      return state;
  }
}

export default categoryReducer;
