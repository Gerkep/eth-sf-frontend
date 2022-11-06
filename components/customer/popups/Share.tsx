import React from 'react';
import { useState } from 'react';
import { Client } from '@xmtp/xmtp-js'
import { useSigner } from 'wagmi';
import { Wallet, ethers } from 'ethers'
import { showNotification } from '@mantine/notifications';

const Signin = ({onCloseModal}: any) => {

    const wallet = Wallet.createRandom();
    const [ens, setENS] = useState('');
    const [givenAddress, setGivenAddress] = useState('');
    const {data: signer} = useSigner();
    const [loading, setLoading] = useState(false);
    const handleCloseClick = () => {
        onCloseModal();
    };

    const share = async (e: React.FormEvent<HTMLFormElement>) => {
        setLoading(true);
        e.preventDefault();
        let address: string | null = null;
        if(ens){
          const provider = new ethers.providers.JsonRpcProvider("https://eth-mainnet.nodereal.io/v1/1659dfb40aa24bbb8153a677b98064d7");
          address = await provider.resolveName(ens);
        }else if(givenAddress){
          address = givenAddress;
        }
        if(signer && address){
          try{
            const xmtp = await Client.create(signer)
            const newConversation = await xmtp.conversations.newConversation(
              address
            )
            console.log(`Saying GM to ${newConversation.peerAddress}`)
            await newConversation.send('gmgm')
            handleCloseClick();
          } catch(e) {
            showNotification({
              id: 'error',
              disallowClose: true,
              autoClose: 4000,
              title: "Not an XMTP user",
              message: 'The resolved address is not an XMTP user.',
              color: 'red',
              style: { 
                  backgroundColor: "#ECECEC",
              },
          })
          }
        }
        setLoading(false);
    }

  return (
    <div className='fixed top-0 left-0 z-50 w-full h-screen flex justify-center items-center backdrop-blur-lg cursor-pointer' onClick={() => handleCloseClick()}>
        <div className="sm:mx-auto w-11/12 sm:w-full sm:max-w-md rounded-xl shadow-[2px_2px_50px_rgba(0,0,0,0.25)]">
        <div className="bg-white py-16 px-8 shadow sm:rounded-lg sm:px-10 border-2 rounded-xl" onClick={(e) => e.stopPropagation()}>
        <div className="flex min-h-full flex-col justify-center sm:px-6 lg:px-8 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">Share the bill</h2>
        </div>
        </div>
            <form className="space-y-6 mt-10" onSubmit={(e) => share(e)} method="POST">
                <div>
                <div className="flex items-center justify-between">
                <div className="flex items-center">
                </div>
              </div>
              <div>
                <label htmlFor="ens" className="block text-sm font-medium text-gray-700">
                  To:
                </label>
                <div className="mt-1">
                    <input
                    id="ens"
                    name="ens"
                    type="ens"
                    onChange={(e) => setENS(e.target.value)}
                    value={ens}
                    autoComplete="ens"
                    placeholder='gerke.eth'
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                </div>
                or
                <div className="mt-1">
                    <input
                    id="address"
                    name="address"
                    type="string"
                    onChange={(e) => setGivenAddress(e.target.value)}
                    value={givenAddress}
                    autoComplete="address"
                    placeholder='0x....'
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                </div>
                </div>
                </div>
                <div>
                <button
                    type="submit"
                    className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                    Send
                </button>
                </div>
            </form>
            </div>
            </div>
        </div>
  )
};

export default Signin;