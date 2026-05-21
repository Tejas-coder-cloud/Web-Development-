import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counter.jsx'


export const store = configureStore({
  reducer: {
    counter:counterReducer

  },
})

/*
Steps:
1. Create Store 
2. Wrap app component under provider
3. Create slice
4. Register reducer in store 
 */