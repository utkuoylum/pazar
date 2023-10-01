import { configureStore } from '@reduxjs/toolkit'
import pazarReducer from "./pazarSlice"

export const store = configureStore({
  reducer: {
    pazar: pazarReducer,
  },
})