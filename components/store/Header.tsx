import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = ({ setOpenSignIn, setOpenSubmitTx }: any) => {

    return (
        <header className="bg-indigo-600">
            <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
                <div className="flex w-full items-center justify-between border-b border-indigo-500 py-6 lg:border-none">
                    <div className="flex items-center">
                        <Link href="/">
                            <div>
                                <span className="sr-only">Your Company</span>
                                <div className="h-24 w-24 lg:w-12 lg:h-12 w-auto relative rounded-md overflow-hidden">
                                    <Image alt="logo" layout='fill' objectFit='contain'  src={"https://media.discordapp.net/attachments/1038274401424130128/1038742938588565564/image.png"}></Image>
                                </div>
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