import { createSlice } from "@reduxjs/toolkit";

export const dictionarySlice = createSlice({
  name: "dictionary",
  initialState: {
    darkMode: false,
  },
  reducers: {
    toggleMode: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleMode } = dictionarySlice.actions;

export default dictionarySlice.reducer;
