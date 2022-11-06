import Share from "./popups/Share";
import { useEffect, useState } from "react";
import ReviewForm from "./popups/ReviewForm";
import ReviewSuccess from "./popups/ReviewSuccess";
import { useAccount, useConnect } from "wagmi";
import { getReceiptsStoreServer, getReceiptsUserServer } from "../../utils";

const today = new Date().toLocaleDateString();

const peopleSample = [
    { merchant: 'Apple Inc.', date: today.toString(), value: '999', currency: 'USDC' },
    { merchant: 'Apple Inc.', date: today.toString(), value: '249', currency: 'USDC' }
]

const PaymentsTable = ({ isCustomer }: any) => {

    const [openShare, setOpenShare] = useState(false);
    const {address} = useAccount();
    const [people, setPeople] = useState(peopleSample);
    const [openReview, setOpenReview] = useState(false);
    const [openReviewSuccess, setOpenReviewSuccess] = useState(false);

    useEffect(()=>{
        if(isCustomer && address){
            getReceiptsUserServer(address).then((data:any)=>{
                let parsedData = data.map((item : any )=>{

                    let parsedDetail = item.detail.split("_");
                    return {
                        merchant : parsedDetail[0] || "None",
                        date : item.date || today,
                        value : parsedDetail[1] || "NaN",
                        currency : parsedDetail[2] || "NaN",
                        pdf : `https://${item.ipfsURI}.ipfs.w3s.link/output.pdf`
                    }
                })
                setPeople(parsedData)
            })
        }
    },[address ,isCustomer])

    useEffect(()=>{
        if(!isCustomer){
            getReceiptsStoreServer("store1",0).then((data:any)=>{
                let parsedData = data.map((item : any )=>{

                    let parsedDetail = item.detail.split("_");
                    return {
                        merchant : parsedDetail[0] || "None",
                        date : item.date || today,
                        value : parsedDetail[1] || "NaN",
                        currency : parsedDetail[2] || "NaN",
                        pdf : `https://${item.ipfsURI}.ipfs.w3s.link/output.pdf`
                    }
                })
                setPeople(parsedData)
            })
        }
    },[])

    return (
        <div>
            {openShare && <Share onCloseModal={() => setOpenShare(false)} />}
            {openReview && <ReviewForm setOpenReviewSuccess={setOpenReviewSuccess} setOpenReview={setOpenReview} onCloseModal={() => setOpenReview(false)} />}
            {openReviewSuccess && <ReviewSuccess onCloseModal={() => setOpenReviewSuccess(false)} />}
            <div className="-mx-4 mt-4 overflow-hidden shadow sm:-mx-6 md:mx-0 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                Detail
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
                        {people.map((person, index) => (
                            <tr key={index}>
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
                                {isCustomer && <td className="py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                    <button onClick={() => setOpenReview(true)} className="text-indigo-600 hover:text-indigo-900">
                                        Review<span className="sr-only"></span>
                                    </button>
                                </td>}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default PaymentsTable;