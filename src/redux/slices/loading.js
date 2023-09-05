import { createSlice } from '@reduxjs/toolkit';

const initState = {
  loadingStatus: false,
};

const loadingSlice = createSlice({
  name: 'loadingSlice',
  initialState: initState,
  reducers: {
    changingLoadingStatus: (state, action) => {
      const newState = {
        ...state,
        loadingStatus: action.payload,
      };
      return newState;
    },
  },
});

export const {
  changingLoadingStatus,
} = loadingSlice.actions;

export default loadingSlice;
