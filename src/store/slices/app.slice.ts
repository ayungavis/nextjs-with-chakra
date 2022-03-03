import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { AppDefaultState } from 'types/app.types';

const initialState: AppDefaultState = {
  appVersion: 1,
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
      return {
        ...state,
        ...action.payload.app,
      };
    },
  },
});

export const { setAppVersion } = appSlice.actions;

export default appSlice.reducer;
