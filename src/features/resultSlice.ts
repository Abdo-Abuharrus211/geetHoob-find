import { createSlice } from "@reduxjs/toolkit";


export const resultSlice = createSlice({
    name: "result",
    initialState: {
        result: {}
    },
    reducers: {
        set: (state, action) => {
            state.result = action.payload
        },
        remove:
            (state) => {
                state.result = {}
            },
    }
})

export const { set, remove } = resultSlice.actions
export default resultSlice.reducer