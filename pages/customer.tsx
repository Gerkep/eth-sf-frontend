import { useState } from "react";
import PaymentsTable from "../components/customer/PaymentsTable";
import Signin from "../components/customer/popups/Signin";
import Share from "../components/customer/popups/Share";
import Header from "../components/customer/Header";
import Messages from "../components/customer/Messages";
import { useAccount } from "wagmi";

const tabs = [
    { name: 'Payments' },
    { name: 'Messages' },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const UserDashboard = () => {

    const {address} = useAccount();
    const [tab, setTab] = useState("Payments");

    return (
        <>
        <Header />
        { !address && <Signin /> }

        <div className="px-4 mt-4 sm:px-6 lg:px-8">
        <div style={{height: "8vh"}} className="border-b border-gray-200 pb-5 sm:pb-0">
        <div className="mt-3 sm:mt-4">
            <div className="sm:hidden">
            <select
                id="current-tab"
                name="current-tab"
                className="block w-full rounded-md border-gray-300 py-2 pr-12 text-xl font-bold focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                defaultValue={tab}
                onChange={(e) => setTab(e.target.value)}
            >
                {tabs.map((tab) => (
                <option key={tab.name}>{tab.name}</option>
                ))}
            </select>
            </div>
            <div className="hidden sm:block">
            <nav className="-mb-px flex space-x-8">
                <button
                onClick={() => setTab("Payments")}
                    className={classNames(
                    tab === "Payments"
                        ? 'border-indigo-500 text-indigo-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                    'whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm'
                    )}
                >
                    Payments
                </button>
                <button
                    onClick={() => setTab("Messages")}
                    className={classNames(
                    tab === "Messages"
                        ? 'border-indigo-500 text-indigo-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                    'whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm'
                    )}
                >
                    Messages
                </button>
            </nav>
            </div>
        </div>
        </div>
        { address && tab === "Payments" && <PaymentsTable /> }
        { address && tab === "Messages" && <Messages /> }
        </div>
        </>
    )
  }

  export default UserDashboard;