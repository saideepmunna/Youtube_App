import { createSlice } from "@reduxjs/toolkit";

const searchResultsSlice = createSlice({
    name: "Searchresults",
    initialState:{
        searchResults:null
    },
    reducers:{
        setSearchResults : (state, action)=>{
            state.searchResults = action.payload;
        }
    }
})

export const {setSearchResults} = searchResultsSlice.actions;

export default searchResultsSlice.reducer;


