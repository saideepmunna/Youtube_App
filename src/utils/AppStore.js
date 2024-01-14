import { configureStore } from "@reduxjs/toolkit";
import slideBarReducer from "./slideBarSlice";
import videoReducer from "./videosSlice"
import searchReducer from "./searchSlice"

const appStore = configureStore({
   reducer: {
    slideBar: slideBarReducer,
    videosList: videoReducer,
    search: searchReducer,
   },
})

export default appStore;