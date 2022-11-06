import { useState } from "react";
import Chat from "./Chat";
import { Client, Conversation } from '@xmtp/xmtp-js'
import { useEffect } from "react";
import { useSigner } from "wagmi";
import { Wallet } from 'ethers'
import Image from "next/image";

const Messages = () => {

  const {data: signer} = useSigner();
  const [openChat, setOpenChat] = useState(false);
  const [recipientAddress, setRecipientAddress] = useState('');
  const [conversations, setConversations] = useState<Conversation[]>();

  useEffect(() => {
    const getConversations = async () => {
      if(signer){
        const xmtp = await Client.create(signer);
        const allConversations = await xmtp.conversations.list();
        setConversations(allConversations);
      }
    }
    let chatbox = document.querySelector('.chatbox');
    if(chatbox)
    chatbox.scrollTop = chatbox.scrollHeight;

    getConversations();
}, [signer])

  const openChatPage = (address: any) => {
    setRecipientAddress(address);
    setOpenChat(true);
  }

    return (
      <>
      {openChat ? 
      <Chat recipientAddress={recipientAddress}/>
      :
      <div className="grid grid-cols-1 mt-10 gap-4 sm:grid-cols-2 overflow-hidden">
        {conversations && 
        conversations.map((conversation, index) => (
          <div
            key={index}
            onClick={() => openChatPage(conversation.peerAddress)}
            className="relative flex items-center space-x-3 rounded-lg overflow-hidden pr-10 border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
          >
            <div className="flex-shrink-0">
              <div className="h-10 w-10 rounded-full relative overflow-hidden">
                <Image alt="logo" layout='fill' objectFit='contain'  src={"https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"}></Image>
              </div>
            </div>
            <div className="min-w-0 flex-1">
              <a href="#" className="focus:outline-none">
                <span className="absolute inset-0" aria-hidden="true" />
                <p className="text-sm font-medium text-gray-900">{conversation.peerAddress}</p>
              </a>
            </div>
          </div>
        ))}
      </div>
      }
      </>
    )
}
    
export default Messages;