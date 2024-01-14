import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {},
    //{i:["iphone", "ice"...]}
    reducers:{
        cacheSearchResults: (state, action)=>{
          return {...state, ...action.payload}
        }
    }
})

//time complexity of traversing an array is O(n)
//time complexity of searching in an object is O(1) => Hence we take an object for initialState


export const {cacheSearchResults} = searchSlice.actions;
export default searchSlice.reducer;