import React from 'react';
import { useState, useEffect, useRef } from 'react';
import ItemFields from './ItemFields';
import Dropdown from './Dropdown';
import { submitReceiptServer } from '../../../utils';

const currencies = { USD: '$', EUR: '€', GBP: '£' }

const SubmitTx = ({ onCloseModal, setOpenSubmitTx, setOpenQR }: any) => {
  const [loading, setLoading] = useState(false);
  const ref = useRef() as React.MutableRefObject<HTMLInputElement>;
  const [storeKey, setStoreKey] = useState('')
  const [currency, setCurrency] = useState(Object.keys(currencies)[0])

  useEffect(() => {

    const onBodyClick = (event: any) => {
      if (ref.current.contains(event.target)) {
        return;
      }
      setOpenSubmitTx(false);
    }
    document.body.addEventListener('click', onBodyClick, { capture: true })

    return () => { document.body.removeEventListener('click', onBodyClick, { capture: true }) }
  }, [])

  const handleCloseClick = () => {
    onCloseModal();
  };

  const signin = async (e: React.FormEvent<HTMLFormElement>) => {

    setLoading(true);
    e.preventDefault();

    const receiptData = {
      "items" : [
          {
          "detail" : "banana",
          "qty" : 1,
          "price": "24"
          },
          {
          "detail" : "apple",
          "qty" : 5,
          "price": "20"
          },
          {
          "detail" : "strawberry",
          "qty" : 10,
          "price": "100"
          }
      ],
      "total" : "144"
  }
    let data = await submitReceiptServer(receiptData,localStorage.getItem("storeKey"),parseInt(localStorage.getItem("storeId")!),"MYR", "Malaysia", null);
    let link = `https://${data.uri}.ipfs.w3s.link/output.pdf`;
    let detail = data.detail;
    let hash = data.hash;

    console.log(link, detail, hash);
    //uri is the final link

    // e.preventDefault();
    // handleCloseClick();
    // setLoading(false);
    // setOpenQR(true);
  }

  return (

    < div className='fixed top-0 left-0 z-50 w-full h-screen flex justify-center items-center backdrop-blur-lg cursor-pointer' >
      <div ref={ref} className="sm:mx-auto w-11/12 sm:w-full sm:max-w-md rounded-xl shadow-[2px_2px_50px_rgba(0,0,0,0.25)]">
        <div className="bg-white py-10 px-6 shadow sm:rounded-lg sm:px-10 border-2 rounded-xl">
          <div className="flex min-h-full flex-col justify-center sm:px-6 lg:px-8 ">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
              <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">Submit new transaction</h2>
            </div>
          </div>
          <form className="space-y-3 mt-4" onSubmit={(e) => signin(e)} method="POST">
            <div>
              <div style={{ display: 'flex' }}>
                <div className="col-span-6 sm:col-span-3 mt-2 mr-2">
                  <input
                    id="storeKey"
                    name="storeKey"
                    type="text"
                    placeholder='Store key'
                    required
                    value={storeKey || localStorage.getItem("storeKey")!}
                    onChange={event => setStoreKey(event.target.value)}
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3 mt-2">
                  {/* change to select */}
                  <div style={{ width: '7rem' }}>
                    <Dropdown values={Object.keys(currencies)} value={currency} onChange={setCurrency} error={undefined} />
                  </div>
                </div>
              </div>
              <h3 className="text-l font-bold mt-1 tracking-tight text-gray-900">Item</h3>

              <ItemFields currency={currency} currencies={currencies} />
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Generate receipt
              </button>
            </div>
          </form>
        </div>
      </div>
    </div >
  )
};

export default SubmitTx;