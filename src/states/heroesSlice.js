import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const fetchHeroes = createAsyncThunk(
  'heroes/fetchHeroes',
  async (test, { rejectWithValue }) => {
    try {
      const response = await fetch('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json');

      if (!response.ok) {
        throw new Error('An error occurred while fetching heroes.');
      }

      return await response.json();
    } catch (e) {
      return rejectWithValue(`Une erreur est survenue : ${e.message}`)
    }
  }
)


export const heroesSlice = createSlice({
  name: 'heroesSlices',
  initialState: {
    search: '',
    heroes: [],
    loading: true,
    error: null,
  },
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHeroes.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHeroes.fulfilled, (state, action) => {
        state.heroes = action.payload;
        state.loading = false;
      })
      .addCase(fetchHeroes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  }
})

export const { setSearch } = heroesSlice.actions;
export default heroesSlice.reducer;