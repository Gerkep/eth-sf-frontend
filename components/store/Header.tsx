import React from "react";
import Link from "next/link";

const Header = ({ setOpenSignIn, setOpenSubmitTx }: any) => {

    return (
        <header className="bg-indigo-600">
            <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
                <div className="flex w-full items-center justify-between border-b border-indigo-500 py-6 lg:border-none">
                    <div className="flex items-center">
                        <Link href="/">
                            <div>
                                <span className="sr-only">Your Company</span>
                                <img className="h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=white" alt="" />
                            </div>
                        </Link>
                    </div>
                    <div className="ml-10 space-x-4">
                        <button
                            onClick={() => setOpenSubmitTx(true)}
                            className="inline-block rounded-md border border-transparent bg-indigo-500 py-2 px-4 text-base font-medium text-white hover:bg-opacity-75"
                        >
                            New tx
                        </button>

                        <button
                            className="inline-block rounded-md border border-transparent bg-white py-2 px-4 text-base font-medium text-indigo-600 hover:bg-indigo-50"
                            onClick={() => {localStorage.removeItem("storeKey") ; localStorage.removeItem("storeId") ;setOpenSignIn(true)}}
                        >
                            Sign out
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;