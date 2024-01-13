import { createSlice } from "@reduxjs/toolkit";

const videosSlice = createSlice({
  name: "videos",
  initialState: {
    videoCards: null,
    videoId: null,
  },
  reducers: {
    updateVideoCards: (state, action) => {
      state.videoCards = action.payload;
    },
    updateVideoId :(state, action)=>{
        state.videoId = action.payload;
    }
  },
});

export default videosSlice.reducer;
export const { updateVideoCards, updateVideoId } = videosSlice.actions;
