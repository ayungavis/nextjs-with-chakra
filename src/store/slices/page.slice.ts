import { createSlice } from '@reduxjs/toolkit';
import { Page } from 'configs/page';
import { HYDRATE } from 'next-redux-wrapper';
import { IPageState } from 'types/pages.types';

const initialState: IPageState = {
  selectedPage: Page.MAIN,
};

const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    changePage: (state, action) => {
      state.selectedPage = action.payload.selectedPage;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.page,
      };
    },
  },
});

export const { changePage } = pageSlice.actions;

export default pageSlice.reducer;
