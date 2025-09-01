import { createSlice } from "@reduxjs/toolkit";


export const searchSlice = createSlice({
    name: "search",
    initialState: {
        searches: []
    },
    reducers: {
        add: (state, search) => {
            state.searches = state.searches.concat(search) // TODO: debug
        },
        remove: (state, search) => {
            state.searches.filter((s) => {
                s != search;
            })
        },
        pop: (state) => {
            state.searches.pop();
        }
    }
})

export const { add, remove, pop } = searchSlice.actions;
export default searchSlice.reducer;