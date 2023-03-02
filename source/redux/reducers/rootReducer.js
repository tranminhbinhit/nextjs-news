import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";
import appReducer from "./appReducer";
import categoryReducer from "./categoryReducer";
import settingsReducer from "./settingReducer";

const combineReducer = combineReducers({
  setting: settingsReducer,
  app: appReducer,
  category: categoryReducer,
});

const rootReducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    }
    //if (state.count.count) nextState.count.count = state.count.count // preserve count value on client side navigation
    return nextState
  } else {
    return combineReducer(state, action)
  }
};

export default rootReducer;

