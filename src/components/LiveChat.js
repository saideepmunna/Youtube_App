import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { setChatMessage } from '../utils/chatSlice';

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatList = useSelector(store=>store.Livechat.chatList);
  useEffect(()=>{
      const i = setInterval(()=>{
         console.log("API Polling")

        dispatch(setChatMessage({
          name:"saideep",
          text:"Lorem Ipsum isbsilu subc"
        }))
      },2000)

      return ()=> clearInterval(i);
  },[])

  return (
    <div className="ml-8 border border-black h-[450px] rounded-xl p-4 overflow-y-scroll">
      {chatList.map( (chat,i)=><ChatMessage key={i} name={chat.name} message={chat.text}/>)}
    </div>
  )
}

export default LiveChat;