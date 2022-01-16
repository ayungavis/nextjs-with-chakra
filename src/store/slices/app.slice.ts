import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
  appVersion: 1.0,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setAppVersion: (state, action) => {
      state.appVersion = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      console.log('HYDRATE', state, action.payload);
      return {
        ...state,
        ...action.payload.app,
      };
    },
  },
});

export const { setAppVersion } = appSlice.actions;

export default appSlice.reducer;
