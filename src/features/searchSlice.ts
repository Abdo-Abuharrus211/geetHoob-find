import { createSlice } from "@reduxjs/toolkit";


// Copilot suggested...
// type SearchState = {
//     history: string[]; // Change 'string' to whatever type you expect in history
// };

// const initialState: SearchState = {
//     history: []
// };

export const searchSlice = createSlice({
    name: "search",
    initialState: {
        history: []
    },
    reducers: {
        add: (state, action: { payload: string }) => {
            state.history.push(action.payload) // TODO: debug
        },
        remove: (state, action: { payload: string }) => {
            state.history = state.history.filter((s) => s !== action.payload);
        },
        pop: (state) => {
            state.history.pop();
        }
    }
})

export const { add, remove, pop } = searchSlice.actions;
export default searchSlice.reducer;