import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./kondos.initial";
import kondosReducerDocStyle from "./kondos.reducer.docstyle";

export const kondoSlice = createSlice({
  name: "kondos",
  initialState,
  reducers: {
    ...kondosReducerDocStyle,
    _setSelectedKondo: (state, action: any) => {
      const { id } = action;

      const selected = state.allKondos.filter(kondo => kondo.id == id);

      state.selectedKondo = selected? selected[0] : null;
    },
    _populateKondos: (state, action) => {
      console.log('_populateKondos', action.payload.data);
      
      //state.allKondos.push(action.payload);
      state.allKondos = action.payload.data;
    },
  }
});

export const { _setSelectedKondo, _populateKondos } = kondoSlice.actions;
export const kondosReducer = kondoSlice.reducer;

