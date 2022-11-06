import { PaperClipIcon } from '@heroicons/react/20/solid'
import { ethers } from 'ethers';
import { useState } from 'react'
import { Client } from '@xmtp/xmtp-js'
import { showNotification } from '@mantine/notifications';
import { useSigner } from 'wagmi';
import { useRouter } from 'next/router';

export default function MessageInput({recipientAddress}: any) {

    const [file, setFile] = useState('');
    const [message, setMessage] = useState('');
    const {data: signer} = useSigner();
    const router = useRouter();
    
    const send = async () => {
        try{
          if(signer && message){
            const xmtp = await Client.create(signer)
            const newConversation = await xmtp.conversations.newConversation(
              recipientAddress
            )
            await newConversation.send(message);
            router.reload();
          }
        } catch(e) {
          showNotification({
            id: 'error',
            disallowClose: true,
            autoClose: 4000,
            title: "Something went wrong...",
            message: 'Bruh.',
            color: 'red',
            style: { 
                backgroundColor: "#ECECEC",
            },
        })
        }
      }

  return (
    <div className="flex items-start space-x-4">
      <div className="min-w-0 flex-1">
        <div style={{height: "11vh"}} className="fixed inset-x-0 bottom-0 flex justify-between py-4 pl-3 pr-2 bg-gray-200">
            <div className="flex items-center space-x-5">
              <div className="flex items-center">
                <button
                  type="button"
                  className="-m-2.5 flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500"
                >
                  <PaperClipIcon className="h-5 w-5" aria-hidden="true" />
                  <span className="sr-only">Attach a file</span>
                  <input className='opacity-0 absolute' type="file" onChange={(e) => setFile(e.target.value)}/>
                </button>
              </div>
            </div>
            <form action="#" className="relative w-4/6 lg:w-1/2">
                <div className="overflow-hidden rounded-lg border border-gray-300 outline-0 shadow-sm focus-none ">
                    <label htmlFor="comment" className="sr-only">
                    Message
                    </label>
                    <textarea
                    rows={1}
                    name="comment"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    id="comment"
                    className="block w-full resize-none border-0 py-2 px-2 outline-0 sm:text-sm"
                    placeholder="Message"
                    defaultValue={''}
                    />
                </div>
            </form>
            <div className="flex-shrink-0">
              <button
                onClick={() => send()}
                className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Send
              </button>
            </div>
          </div>
      </div>
    </div>
  )
}
