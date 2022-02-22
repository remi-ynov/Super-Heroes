import {createSlice} from "@reduxjs/toolkit";

export const heroesSlice = createSlice({
  name: 'heroesSlices',
  initialState: {
    search: '',
  },
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    }
  }
})

export const { setSearch } = heroesSlice.actions;
export default heroesSlice.reducer;