import { createSlice } from "@reduxjs/toolkit"

const chatSlice = createSlice({
    name:"Chat",
    initialState:{
        chatList:[]
    },
    reducers:{
        setChatMessage:(state,action)=>{
            state.chatList.push(action.payload)
        }
    }
});

export default chatSlice.reducer;
export const {setChatMessage} = chatSlice.actions;