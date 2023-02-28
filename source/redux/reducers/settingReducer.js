import actionTypes from "../../constants/actionTypes";

const initialState = {
  language: 'vi',
  config: {},
};

function settingsReducer(state = initialState, action) {
  const { response, type } = action;
  switch (type) {
    case actionTypes.CHANGE_LANGUAGE: {
      return {
        ...state,
        language: response,
      };
    }
    case actionTypes.RECEIVE_SETTING: {
      const { config } = action.response;
      return {
        ...state,
        config,
      };
    }
    default:
      return state;
  }
}

export default settingsReducer;

// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// const initialState = {
//   language: 'vi',
//   config: {},
// };

// const settingSlice = createSlice({
//   name: 'setting',
//   initialState,
//   reducers: {
//     receiveSettingFromAction: (state, action) => {
//       console.log(state, action, 'setting provinder');
//       const { config } = action.payload;
//       return {
//         ...state,
//         config
//       };
//     }
//   },
// })

// export const { receiveSettingFromAction } = settingSlice.actions
// export default settingSlice.reducer
