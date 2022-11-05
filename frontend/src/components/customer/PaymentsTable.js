import Share from "./popups/Share";
import { useState } from "react";


const date = new Date().toLocaleDateString();

const people = [
    { merchant: 'Apple Inc.', date: date.toString(), value: '999', currency: 'USDC' }, 
    { merchant: 'Apple Inc.', date: date.toString(), value: '249', currency: 'USDC' }
]

const PaymentsTable = () => {

    const [openShare, setOpenShare] = useState(false);
    
    return (
        <div>
        {openShare &&  <Share onCloseModal={() => setOpenShare(false)} /> }
        <div className="-mx-4 mt-4 overflow-hidden shadow sm:-mx-6 md:mx-0 md:rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
            <thead className="bg-gray-50">
                <tr>
                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                    Merchant
                </th>
                <th
                    scope="col"
                    className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                >
                    Date
                </th>
                <th
                    scope="col"
                    className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
                >
                    Currency
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Value
                </th>
                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                    <span className="sr-only">Pdf</span>
                </th>
                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                    <span className="sr-only">Pdf</span>
                </th>
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
                {people.map((person) => (
                <tr key={person.email}>
                    <td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-6">
                    {person.merchant}
                    <dl className="font-normal lg:hidden">
                        <dt className="sr-only">Title</dt>
                        <dd className="mt-1 truncate text-gray-700">{person.date}</dd>
                        <dt className="sr-only sm:hidden">Email</dt>
                        <dd className="mt-1 truncate text-gray-500 sm:hidden">{person.currency}</dd>
                    </dl>
                    </td>
                    <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">{person.date}</td>
                    <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">{person.currency}</td>
                    <td className="px-3 py-4 text-sm text-gray-500">{person.value}</td>
                    <td className="py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                    <button className="text-indigo-600 hover:text-indigo-900">
                        Pdf<span className="sr-only"></span>
                    </button>
                    </td>
                    <td className="py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                    <button onClick={() => setOpenShare(true)} className="text-indigo-600 hover:text-indigo-900">
                        Share<span className="sr-only"></span>
                    </button>
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
        </div>
    )
}

export default PaymentsTable;