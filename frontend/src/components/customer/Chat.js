import MessageInput from "./chat/MessageInput";
import UserMessage from "./chat/UserMessage";
import ReplyMessage from "./chat/ReplyMessage";
import { useEffect } from "react";

const Chat = ({ recipientAddress }) => {
    useEffect(() => {
        let chatbox = document.querySelector('.chatbox');
        chatbox.scrollTop = chatbox.scrollHeight;
    })
    return (
        <div>
            <div style={{height: "66vh"}} className="overflow-scroll pb-16 lg:pb-10 chatbox">
                <ReplyMessage />
                <UserMessage />
                <UserMessage />
                <ReplyMessage />
                <ReplyMessage />
                <ReplyMessage />
                <ReplyMessage />
                <ReplyMessage />
            </div>
            <MessageInput />
        </div>
    )
}

export default Chat;