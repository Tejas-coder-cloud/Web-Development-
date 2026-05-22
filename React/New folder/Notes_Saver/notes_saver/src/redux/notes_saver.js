import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    pastes: localStorage.getItem("pastes")
        ? JSON.parse(localStorage.getItem("pastes"))
        : []
}

export const notes_saver = createSlice({
    name: 'paste',
    initialState,
    reducers: {
        addtopaste: (state, action) => {

            state.value += 1
        },
        updatetopaste: (state, action) => {
            state.value -= 1
        },
        resetallpaste: (state, action) => {
            state.value += action.payload
        },
        removefrompaste: (state, action) => {
            state.value += action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { addtopaste,
    updatetopaste,
    resetallpaste,
    removefrompaste } = notes_saver.actions

export default notes_saver.reducer