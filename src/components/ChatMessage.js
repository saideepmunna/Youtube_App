import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

const ChatMessage = ({name, message}) => {
  return (
    <div>
        
        <div className="flex items-center m-2">
          <div className="flex justify-center w-6 h-6 items-center rounded-full bg-purple-400">
            <FontAwesomeIcon icon={faUser} className="text-xs" />
          </div>
          <div className="ml-2">
            <h2 className="font-medium">{name}</h2>

    
          </div>
          <p className="ml-2">{message}</p>
        </div>
        </div>
  )
}

export default ChatMessage;