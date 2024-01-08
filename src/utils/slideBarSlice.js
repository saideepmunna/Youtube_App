import { createSlice } from "@reduxjs/toolkit";

const slidebarSlice = createSlice({
    name: "slideBar",
    initialState: {
        slideBarState: false
    },
    reducers:{
        toggleSlicebar:(state,action)=>{
            state.slideBarState = ! state.slideBarState;
        }
    }
})

export const {toggleSlicebar} = slidebarSlice.actions;
export default slidebarSlice.reducer;