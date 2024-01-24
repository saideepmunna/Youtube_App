import { createSlice } from "@reduxjs/toolkit"

const chatSlice = createSlice({
    name:"Chat",
    initialState:{
        chatList:[],
    },
    reducers:{
        setChatMessage:(state,action)=>{
            
                state.chatList.splice(25,1)
            
            state.chatList.unshift(action.payload)
        }
    }
});

export default chatSlice.reducer;
export const {setChatMessage} = chatSlice.actions;