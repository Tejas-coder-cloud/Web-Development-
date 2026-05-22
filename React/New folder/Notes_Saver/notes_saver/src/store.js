import { configureStore } from '@reduxjs/toolkit'
import pasteReducer from './redux/notes_saver'
export const store = configureStore({
    reducer: {
        paste:pasteReducer,
    },
})