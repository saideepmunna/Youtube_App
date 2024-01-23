import { configureStore } from "@reduxjs/toolkit";
import slideBarReducer from "./slideBarSlice";
import videoReducer from "./videosSlice"
import searchReducer from "./searchSlice"
import searchResultsReducer from "./searchResultsSlice"
import liveChatReducer from "./chatSlice"

const appStore = configureStore({
   reducer: {
    slideBar: slideBarReducer,
    videosList: videoReducer,
    search: searchReducer,
    searchresults: searchResultsReducer,
    Livechat: liveChatReducer,
   },
})

export default appStore;