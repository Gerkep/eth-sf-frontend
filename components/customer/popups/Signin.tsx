import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Client } from '@xmtp/xmtp-js';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useAccount, useSigner } from 'wagmi';

const Signin = ({onCloseModal}: any) => {

    const [loading, setLoading] = useState(false);
    const {address} = useAccount();
  
  return (
    <>
    {!address &&
    <div className='fixed top-0 left-0 z-50 w-full h-screen flex justify-center items-center backdrop-blur-lg cursor-pointer'>
        <div className="sm:mx-auto w-11/12 sm:w-full sm:max-w-md rounded-xl shadow-[2px_2px_50px_rgba(0,0,0,0.25)]">
        <div className="bg-white py-16 px-8 shadow sm:rounded-lg sm:px-10 border-2 rounded-xl cursor-auto">
        <div className="flex min-h-full flex-col justify-center sm:px-6 lg:px-8 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">Connect your wallet</h2>
        </div>
        </div>
        <div
            className="flex w-full justify-center rounded-md border border-transparent py-2 px-2 mt-12"
          >
            <ConnectButton />
        </div>
        </div>
        </div>
        </div>
        }
      </>
  )
};

export default Signin;