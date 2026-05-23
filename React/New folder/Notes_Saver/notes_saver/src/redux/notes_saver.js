import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';

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
            const paste=action.payload;
            state.pastes.push(paste);
            localStorage.setItem("pastes",state.pastes);
            toast("Paste created successfully")

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