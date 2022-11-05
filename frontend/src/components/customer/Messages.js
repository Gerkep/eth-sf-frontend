import { useState } from "react";
import Chat from "./Chat";

const people = [
    {
      name: 'Leslie Alexander',
      email: 'leslie.alexander@example.com',
      message: 'Ayo, hyd?',
      address: '0x0',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Jamal Abdul',
        email: 'abdul1997@example.com',
        message: 'Bearish af',
        address: '0x03',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    // More people...
  ]
  

const Messages = () => {

  const [openChat, setOpenChat] = useState(false);
  const [recipientAddress, setRecipientAddress] = useState('');

  const openChatPage = (address) => {
    setOpenChat(true);
    setRecipientAddress(address);
  }

    return (
      <>
      {openChat ? 
      <Chat recipientAddres={recipientAddress}/>
      :
      <div className="grid grid-cols-1 mt-10 gap-4 sm:grid-cols-2">
        {people.map((person) => (
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
        ))}
      </div>
      }
      </>
    )
}
    
export default Messages;