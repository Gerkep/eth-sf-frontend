import React from 'react';
import { useState, useEffect, useRef } from 'react';
import QRCode from "react-qr-code";

const RegisterQR = ({ onCloseModal, setOpenQR, storeKey, storeId }: any) => {
  const [loading, setLoading] = useState(false);
  const ref = useRef() as React.MutableRefObject<HTMLInputElement>;


  useEffect(() => {

    const onBodyClick = (event: any) => {
      if (ref.current.contains(event.target)) {
        return;
      }
      setOpenQR(false);
    }
    document.body.addEventListener('click', onBodyClick, { capture: true })

    return () => { document.body.removeEventListener('click', onBodyClick, { capture: true }) }
  }, [])

  const handleCloseClick = () => {
    onCloseModal();
  };

  return (

    < div className='fixed top-0 left-0 z-50 w-full h-screen flex justify-center items-center backdrop-blur-lg cursor-pointer' >
      <div ref={ref} className="sm:mx-auto w-11/12 sm:w-full sm:max-w-md rounded-xl shadow-[2px_2px_50px_rgba(0,0,0,0.25)]">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 border-2 rounded-xl">
          <div className="flex min-h-full flex-col justify-center sm:px-6 lg:px-8 ">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
              <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">Thanks for choosing our platform</h2>
            </div>
          </div>
          <h3 className="text-l font-bold mt-1 tracking-tight text-gray-900">Store Key -- Store ID</h3>
          <h2 className="text-xl font-bold tracking-tight text-gray-900">{storeKey} -- {storeId}</h2>
          <h4 className="text-s tracking-tight text-gray-700">Save both & Don&apos;t share them with anyone</h4>
          <h3 className="text-l font-bold mt-3 tracking-tight text-gray-900">QR code to your reviews</h3>
          <h4 className="text-s tracking-tight text-gray-700">Share it with your customers</h4>
          <div className="flex justify-center w-full mt-10 mb-10">
              <QRCode size={192} value="https://www.alchemy.com" />
          </div>
          <button
            onClick={() => handleCloseClick()}
            className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Done
          </button>
        </div>
      </div>
    </div >
  )
};

export default RegisterQR;