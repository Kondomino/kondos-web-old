import { combineReducers, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./kondos.initial";
import kondosReducerDocStyle from "./kondos.reducer.docstyle";

export const kondoSlice = createSlice({
  name: "kondo",
  initialState,
  reducers: combineReducers(kondosReducerDocStyle)
    /*setKondoState: (state, action: PayloadAction<boolean>) => {
      state.kondoState = action.payload;
    }
    */
});


//export const { setKondoState } = kondoSlice.actions;
export const kondosReducer = kondoSlice.reducer;
export const selectKondo = (state: { kondo: any; }) => state.kondo
export const selectAllKondos = (state: any) => state

