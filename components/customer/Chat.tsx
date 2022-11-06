import MessageInput from "./chat/MessageInput";
import UserMessage from "./chat/UserMessage";
import ReplyMessage from "./chat/ReplyMessage";
import { useEffect } from "react";
import { Client } from '@xmtp/xmtp-js';
import { useSigner } from "wagmi";
import { Wallet } from 'ethers'

const Chat = ({ recipientAddress }: any) => {

    const {data: signer} = useSigner();

    useEffect(() => {
        const getConversation = async () => {
            if(signer){
                const xmtp = await Client.create(signer)
                const conversation = await xmtp.conversations.newConversation(
                    recipientAddress
                )

                // All parameters are optional and can be omitted
                const opts = {
                    // Only show messages from last 24 hours
                    startTime: new Date(new Date().setDate(new Date().getDate() - 1)),
                    endTime: new Date(),
                }                
                const messagesInConversation = await conversation.messages(opts);
                console.log(messagesInConversation);
            }
        }
        let chatbox = document.querySelector('.chatbox');
        if(chatbox)
        chatbox.scrollTop = chatbox.scrollHeight;
        getConversation();
    }, [signer])

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