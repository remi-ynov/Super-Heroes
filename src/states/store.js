import {configureStore} from "@reduxjs/toolkit";
import heroesSlice from "./heroesSlice";

const store = configureStore({
  reducer: {
    heroes: heroesSlice,
  }
})

export default store;