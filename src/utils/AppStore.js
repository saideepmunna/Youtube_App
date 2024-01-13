import { configureStore } from "@reduxjs/toolkit";
import slideBarReducer from "./slideBarSlice";
import videoReducer from "./videosSlice"

const appStore = configureStore({
   reducer: {
    slideBar: slideBarReducer,
    videosList: videoReducer,
   },
})

export default appStore;