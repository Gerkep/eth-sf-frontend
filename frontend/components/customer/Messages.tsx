import { useState } from "react";
import Chat from "./Chat";
import { Client, Conversation } from '@xmtp/xmtp-js'
import { useEffect } from "react";
import { useSigner } from "wagmi";
import { Wallet } from 'ethers'

const Messages = () => {

  const wallet = Wallet.createRandom();
  const [openChat, setOpenChat] = useState(false);
  const [recipientAddress, setRecipientAddress] = useState('');
  const [conversations, setConversations] = useState<Conversation[]>();

  useEffect(() => {
    const getConversations = async () => {
        const xmtp = await Client.create(wallet);
        const allConversations = await xmtp.conversations.list();
        setConversations(allConversations);
        console.log(allConversations)
    }

    let chatbox = document.querySelector('.chatbox');
    if(chatbox)
    chatbox.scrollTop = chatbox.scrollHeight;

    getConversations();
}, [])

  const openChatPage = (address: any) => {
    setOpenChat(true);
    setRecipientAddress(address);
  }

    return (
      <>
      {openChat ? 
      <Chat recipientAddres={recipientAddress}/>
      :
      <div className="grid grid-cols-1 mt-10 gap-4 sm:grid-cols-2">
        {/* {conversations.map((person) => (
          <div
            key={person.address}
            onClick={() => openChatPage(person.address)}
            className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
          >
            <div className="flex-shrink-0">
              <img className="h-10 w-10 rounded-full" src={person.imageUrl} alt="" />
            </div>
            <div className="min-w-0 flex-1">
              <a href="#" className="focus:outline-none">
                <span className="absolute inset-0" aria-hidden="true" />
                <p className="text-sm font-medium text-gray-900">{person.name}</p>
                <p className="truncate text-sm text-gray-500">{person.message}</p>
              </a>
            </div>
          </div>
        ))} */}
      </div>
      }
      </>
    )
}
    
export default Messages;