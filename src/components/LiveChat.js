import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { setChatMessage } from "../utils/chatSlice";
import { generateName, generateText } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatList = useSelector((store) => store.Livechat.chatList);
  const [chatInput, setChatInput] = useState("");
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        setChatMessage({
          name: generateName(),
          text: generateText(20),
        })
      );
    }, 1500);

    return () => clearInterval(i);
  }, []);

  return (
    <div className="ml-8">
      <div className=" border border-black h-[450px] rounded-t-xl p-4 overflow-y-scroll flex flex-col-reverse">
        {chatList.map((chat, i) => (
          <ChatMessage key={i} name={chat.name} message={chat.text} />
        ))}
      </div>
      <div className="px-6 py-4 rounded-b-xl border border-black border-t-0 flex items-center">
        <input
          placeholder="chat..."
          value={chatInput}
          onChange={(e) => setChatInput(e.target.value)}
          className="bg-black bg-opacity-5 px-5 py-2 rounded-full w-full"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              dispatch(setChatMessage({ name: "saideep", text: chatInput }));
              setChatInput("");
            }
          }}
        />
        <img
          src="https://static-00.iconduck.com/assets.00/send-icon-2048x1863-u8j8xnb6.png"
          alt="sendImg"
          className="ml-3 w-6 cursor-pointer"
          onClick={() => {
            dispatch(setChatMessage({ name: "saideep", text: chatInput }));
            setChatInput("");
          }}
        />
      </div>
    </div>
  );
};

export default LiveChat;
