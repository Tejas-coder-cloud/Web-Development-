import { configureStore } from '@reduxjs/toolkit'
import counter from './features/counter/counter.jsx'


export const store = configureStore({
  reducer: {
    counter:counterReducer

  },
})