import MessageInput from "./chat/MessageInput";
import UserMessage from "./chat/UserMessage";
import ReplyMessage from "./chat/ReplyMessage";
import { useEffect } from "react";
import { Client } from '@xmtp/xmtp-js';
import { useSigner } from "wagmi";
import { Wallet } from 'ethers'

const Chat = ({ recipientAddress }: any) => {

    const wallet = Wallet.createRandom()

    useEffect(() => {
        const getConversation = async () => {
            const xmtp = await Client.create(wallet)
            const conversation = await xmtp.conversations.newConversation(
                '0x3F11b27F323b62B159D2642964fa27C46C841897'
            )
            const messages = await conversation.messages();
            await conversation.send('gm');
        }
        let chatbox = document.querySelector('.chatbox');
        if(chatbox)
        chatbox.scrollTop = chatbox.scrollHeight;
        getConversation();
    }, [])

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