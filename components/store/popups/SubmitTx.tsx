import React from 'react';
import { useState, useEffect, useRef } from 'react';
import ItemFields from './ItemFields';
import Dropdown from './Dropdown';
import { submitReceiptServer } from '../../../utils';
import QRCode from "react-qr-code";
import { ethers } from 'ethers';

const currencies = { USD: '$', EUR: '€', GBP: '£' }

interface Currency {
  USD: string; EUR: string; GBP: string; 
}

const SubmitTx = ({ onCloseModal, setOpenSubmitTx }: any) => {

  const [loading, setLoading] = useState(false);
  const [storeKey, setStoreKey] = useState('')
  const [currency, setCurrency] = useState<string>();
  const [openQR, setOpenQR] = useState(false);
  const [fetchedLink, setFetchedLink] = useState('');
  const [price, setPrice] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(0);
  const [itemName, setItemName] = useState('');
  const [ens, setENS] = useState('');

  const handleCloseClick = () => {
    onCloseModal();
  };

  const autoFill = () => {
    function generateRandomInteger(min: number, max: number) {
        return Math.floor(min + Math.random() * (max - min + 1))
    }
    const randomItems = ['E-book', 'Bored Ape', 'Cryptopunk', 'Pen', 'Notebook', 'College tuition', 'ApeCoin']
    const values = {
        name: randomItems[generateRandomInteger(0, randomItems.length)],
        price: generateRandomInteger(1, 1000),
        quantity: generateRandomInteger(1, 10),
    }
    setItemName(values.name);
    setPrice(values.price);
    setQuantity(values.quantity);
  }

  const displayCurrency = () => {
    return <span className="ml-1">{currency}</span>
  }

  const signin = async (e: React.FormEvent<HTMLFormElement>) => {

    setLoading(true);
    e.preventDefault();
    let address: string | null = null;
    if(ens){
      const provider = new ethers.providers.JsonRpcProvider("https://eth-mainnet.nodereal.io/v1/1659dfb40aa24bbb8153a677b98064d7");
      address = await provider.resolveName(ens);
    }
    console.log(address);
    const receiptData = {
      "items" : [
          {
          "detail" : itemName,
          "qty" : quantity,
          "price": price
          }
      ],
      "total" : price
  }
    let data = await submitReceiptServer(receiptData,e.target.storeKey!.value,0,"MYR", "Malaysia", null);
    let link = `https://${data.uri}.ipfs.w3s.link/output.pdf`;
    let detail = data.detail;
    let hash = data.hash;

    console.log(link, detail, hash);
    setFetchedLink(link);
    //uri is the final link
    setLoading(false);
    setOpenQR(true);
  }

  return (
    <div className='fixed top-0 left-0 z-50 w-full h-screen flex justify-center items-center backdrop-blur-lg cursor-pointer' onClick={() => onCloseModal()}>
      {openQR ? 
            <div className="sm:mx-auto w-11/12 sm:w-full sm:max-w-md rounded-xl shadow-[2px_2px_50px_rgba(0,0,0,0.25)]" onClick={(e) => e.stopPropagation()}>
            <div className="bg-white flex flex-wrap justify-center py-16 px-8 shadow sm:rounded-lg sm:px-10 border-2 rounded-xl">
              <div className="flex min-h-full flex-col justify-center sm:px-6 lg:px-8 ">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                  <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">Scan code below</h2>
                </div>
              </div>
              <div className="m-10">
                  <QRCode size={192} value={fetchedLink} />
              </div>
              <button
                onClick={() => handleCloseClick()}
                className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Done
              </button>
            </div>
          </div>
      :
          <div className="sm:mx-auto w-11/12 sm:w-full sm:max-w-md rounded-xl shadow-[2px_2px_50px_rgba(0,0,0,0.25)]" onClick={(e) => e.stopPropagation()}>
            <div className="bg-white py-10 px-6 shadow sm:rounded-lg sm:px-10 border-2 rounded-xl">
              <div className="flex min-h-full flex-col justify-center sm:px-6 lg:px-8 ">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                  <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">Submit new transaction</h2>
                </div>
              </div>
              <form className="space-y-3 mt-4" onSubmit={(e) => signin(e)} method="POST">
                <div>
                <div className="mt-1">
                    <input
                    id="ens"
                    name="ens"
                    type="ens"
                    onChange={(e) => setENS(e.target.value)}
                    value={ens}
                    autoComplete="ens"
                    placeholder='gerke.eth (optional)'
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                </div>
                  <div style={{ display: 'flex' }}>
                    <div className="col-span-6 sm:col-span-3 mt-2 mr-2">
                      <input
                        id="storeKey"
                        name="storeKey"
                        type="text"
                        placeholder='Store key'
                        required
                        value={storeKey}
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
                  <h3 className="text-lg font-bold mt-1 tracking-tight text-gray-900">Item</h3>
    
                  <div>
                    <a
                        style={{ width: '10rem' }}
                        className="flex justify-center rounded-md border border-transparent bg-indigo-600 px-1 mb-2 text-sm font-sm text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        onClick={() => autoFill()}
                    >
                        Generate test data
                    </a>
                    <div>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder='Item name'
                            value={itemName}
                            onChange={event => setItemName(event.target.value)}
                            required
                            className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div className='mt-2' style={{ display: 'flex' }}>
                        <div>
                            <input
                                id="price"
                                name="price"
                                type="number"
                                placeholder='Price'
                                required
                                min={0}
                                value={price}
                                onChange={event => setPrice(Number(event.target.value))}
                                className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div className='ml-2'>
                            <input
                                id="quantity"
                                name="quantity"
                                type="number"
                                min={0}
                                placeholder='Quantity'
                                value={quantity}
                                onChange={event => setQuantity(Number(event.target.value))}
                                required
                                className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            />
                        </div>
                        {/* <h2 className="text-center rounded-md border border-gray-300 text-2xl font-bold tracking-tight text-gray-900 p-1">{price * quantity}$</h2> */}
                    </div>
                    {/* <h3 className="text-l font-bold mt-1 tracking-tight text-gray-900">Totals</h3> */}
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div>
                            <h3 className="text-l font-bold mt-1 tracking-tight text-gray-900">Subtotal</h3>
                            <h2 style={{ display: 'flex' }} className="text-center rounded-md border border-gray-300 text-l font-bold tracking-tight text-gray-900 p-1">{(price * quantity).toFixed(2)}{displayCurrency()}</h2>


                        </div>
                        <div>
                            <h3 className="text-l font-bold mt-1 tracking-tight text-gray-900">Tax</h3>
                            <h2 style={{ display: 'flex' }} className="text-center rounded-md border border-gray-300 text-l font-bold tracking-tight text-gray-900 p-1 ml-1 mr-1">{(price * quantity * 0.23).toFixed(2)}{displayCurrency()}</h2>
                        </div>
                        <div>
                            <h3 className="text-l font-bold mt-1 tracking-tight text-gray-900">Grand total</h3>
                            <h2 style={{ display: 'flex' }} className="text-center rounded-md border border-gray-300 text-l font-bold tracking-tight text-gray-900 p-1">{(price * quantity * 1.23).toFixed(2)}{displayCurrency()}</h2>
                        </div>
                    </div>
                </div>
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
      }
    </div >
  )
};

export default SubmitTx;