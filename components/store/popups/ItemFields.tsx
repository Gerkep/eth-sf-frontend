import React, { useState } from "react";


const ItemFields = ({ currency, currencies }: any) => {

    const [price, setPrice] = useState<number>(0);
    const [quantity, setQuantity] = useState<number>(0);
    const [itemName, setItemName] = useState('');

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
        return <span className="ml-1">{currencies[currency]}</span>
    }

    return (
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
    )
}

export default ItemFields;