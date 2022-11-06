import MessageInput from "./chat/MessageInput";
import UserMessage from "./chat/UserMessage";
import ReplyMessage from "./chat/ReplyMessage";
import { useEffect, useState } from "react";
import { Client, DecodedMessage } from '@xmtp/xmtp-js';
import { useAccount, useSigner } from "wagmi";
import { Wallet } from 'ethers'
import { useAccountModal } from "@rainbow-me/rainbowkit";

const Chat = ({ recipientAddress }: any) => {

    const {data: signer} = useSigner();
    const {address} = useAccount();
    const [messages, setMessages] = useState<DecodedMessage[]>();

    useEffect(() => {
        const getConversation = async () => {
            if(signer && address){
                const xmtp = await Client.create(signer)
                for (const conversation of await xmtp.conversations.list()) {
                    // All parameters are optional and can be omitted
                    const opts = {
                      // Only show messages from last 24 hours
                      startTime: new Date(new Date().setDate(new Date().getDate() - 1)),
                      endTime: new Date(),
                    }
                    if(conversation.peerAddress === recipientAddress){
                        const messagesInConversation = await conversation.messages(opts);
                        setMessages(messagesInConversation);
                    }

                  }
            }
        }
        let chatbox = document.querySelector('.chatbox');
        if(chatbox)
        chatbox.scrollTop = chatbox.scrollHeight;
        getConversation();
    }, [address, recipientAddress, signer])

    const renderMessages = () => {
        const renderedMessages = messages?.map((message) => {
            if(message.senderAddress === address){
                return (
                    <UserMessage key={message.sent}>{message.content}</UserMessage>
                )
            }else{
                return (
                    <ReplyMessage key={message.sent}>{message.content}</ReplyMessage>
                )
            }
        })
        return (
            <div>
                {renderedMessages}
            </div>
        )
    }
    return (
        <div>
            <div style={{height: "66vh"}} className="overflow-scroll pb-16 lg:pb-10 chatbox">
                {renderMessages()}
            </div>
            <MessageInput recipientAddress={recipientAddress} />
        </div>
    )
}

export default Chat;