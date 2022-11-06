import { useState } from "react";
import SignIn from "../components/store/popups/SignIn";
import Header from "../components/store/Header";
import SubmitTx from "../components/store/popups/SubmitTx";
import QR from "../components/store/popups/QR";
import PaymentsTable from "../components/customer/PaymentsTable";
import { RevenueChart } from "../components/store/StoreChart";

const tabs = [
    { name: 'Stats' },
    { name: 'Transaction list' },
]

const StoreDashboard = () => {

    const [openSignIn, setOpenSignIn] = useState(false);//true
    const [openSubmitTx, setOpenSubmitTx] = useState(false);
    const [openQR, setOpenQR] = useState(false);
    const [tab, setTab] = useState("Stats");

    return (
        <>
            <Header setOpenSubmitTx={setOpenSubmitTx} setOpenSignIn={setOpenSignIn} />
            {openSignIn && <SignIn onCloseModal={() => setOpenSignIn(false)} />}
            {openSubmitTx && <SubmitTx setOpenSubmitTx={setOpenSubmitTx}
                setOpenQR={setOpenQR}
                onCloseModal={() => setOpenSubmitTx(false)} />}
            {openQR && <QR setOpenQR={setOpenQR} onCloseModal={() => setOpenQR(false)} />}
            {openQR && <QR setOpenQR={setOpenQR} onCloseModal={() => setOpenQR(false)} />}

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
                    </div>
                </div>
                {!openSignIn && tab === "Transaction list" && <PaymentsTable />}
                {!openSignIn && tab === "Stats" && <RevenueChart />}
            </div>
        </>
    )
}

export default StoreDashboard;