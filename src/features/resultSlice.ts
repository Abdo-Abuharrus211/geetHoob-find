import { createSlice } from "@reduxjs/toolkit";


export const resultSlice = createSlice({
    name: "result",
    initialState: {
        result: {}
    },
    reducers: {
        set: (state, newState) => {
            state.result = newState
        },
        remove:
            (state) => {
                state.result = {}
            },
    }
})

export const { set, remove } = resultSlice.actions
export default resultSlice.reducer