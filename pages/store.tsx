import { useState } from "react";
import SignIn from "../components/store/popups/SignIn";
import Header from "../components/store/Header";
import SubmitTx from "../components/store/popups/SubmitTx";
import QR from "../components/store/popups/QR";
import PaymentsTable from "../components/customer/PaymentsTable";
import { RevenueChart } from "../components/store/StoreChart";
import Register from "../components/store/popups/Register";
import RegisterQR from "../components/store/popups/RegisterQR";

const tabs = [
    { name: 'Stats' },
    { name: 'Transaction list' },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}


const StoreDashboard = () => {

    const [openSignIn, setOpenSignIn] = useState(true);//true
    const [openSubmitTx, setOpenSubmitTx] = useState(false);
    const [openRegister, setOpenRegister] = useState(false);
    const [openRegisterQR, setOpenRegisterQR] = useState(false);
    const [openQR, setOpenQR] = useState(false);
    const [tab, setTab] = useState("Stats");
    const [storeKey, setStoreKey] = useState(undefined);
    const [storeId, setStoreId] = useState(undefined);

    return (
        <>
            <Header setOpenSubmitTx={setOpenSubmitTx} setOpenSignIn={setOpenSignIn} />
            {openSignIn && <SignIn onCloseModal={() => setOpenSignIn(false)} setOpenRegister={setOpenRegister} />}
            {openSubmitTx && <SubmitTx setOpenSubmitTx={setOpenSubmitTx}
                setOpenQR={setOpenQR}
                onCloseModal={() => setOpenSubmitTx(false)} />}
            {openQR && <QR setOpenQR={setOpenQR} onCloseModal={() => setOpenQR(false)} />}
            {openQR && <QR setOpenQR={setOpenQR} onCloseModal={() => setOpenQR(false)} />}
            {!(storeId || localStorage.getItem("storeKey")) && openRegister && <Register setOpenRegister={setOpenRegister} setOpenSignIn={setOpenSignIn} onCloseModal={() => setOpenRegister(false)} setOpenRegisterQR={setOpenRegisterQR} setStoreKey={setStoreKey} setStoreId={setStoreId}/>}
            {openRegisterQR && <RegisterQR setOpenRegisterQR={setOpenRegisterQR} onCloseModal={() => setOpenRegisterQR(false)} storeKey={storeKey} storeId={storeId} />}

            <div className="px-4 mt-8 sm:px-6 lg:px-8">
                <div className="border-b border-gray-200 pb-5 sm:pb-0">
                    <div className="mt-3 sm:mt-4">
                        <div className="sm:hidden">
                            <label htmlFor="current-tab" className="sr-only">
                                Select a tab
                            </label>
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
                        <nav className="-mb-px flex space-x-8">
                <button
                onClick={() => setTab("Stats")}
                    className={classNames(
                    tab === "Stats"
                        ? 'border-indigo-500 text-indigo-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                    'whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm'
                    )}
                >
                    Stats
                </button>
                <button
                    onClick={() => setTab("Transaction list")}
                    className={classNames(
                    tab === "Transaction list"
                        ? 'border-indigo-500 text-indigo-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                    'whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm'
                    )}
                >
                    Transaction list
                </button>
            </nav>
                    </div>
                </div>
                {!openSignIn && tab === "Transaction list" && <PaymentsTable storeKey={storeKey || localStorage.getItem("storeKey")} storeId={storeId || localStorage.getItem("storeKey")}/>}
                {!openSignIn && tab === "Stats" && <RevenueChart />}
            </div>
        </>
    )
}

export default StoreDashboard;