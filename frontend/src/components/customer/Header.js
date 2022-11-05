import { useState } from "react";

const Header = ({openSignIn}) => {
    const [verified, setVerified] = useState(false);
    
    return (
        <header style={{height: "13vh"}} className="bg-indigo-600">
            <nav className="mx-auto max-w-full px-4 sm:px-6 lg:px-8" aria-label="Top">
            <div className="flex w-full items-center justify-between border-indigo-500 py-6 lg:border-none">
                <div className="flex items-center">
                <a href="/">
                    <span className="sr-only">Your Company</span>
                    <img className="h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=white" alt="" />
                </a>
                </div>
                <div className="ml-10 space-x-4">
                {verified ?
                <button
                    className="inline-block rounded-md border border-transparent bg-indigo-500 py-2 px-4 text-base font-medium text-white hover:bg-opacity-75"
                    >
                        Verified ✅
                </button> 
                :
                <button
                    onClick={() => setVerified(true)}
                    className="inline-block rounded-md border border-transparent bg-indigo-500 py-2 px-4 text-base font-medium text-white hover:bg-opacity-75"
                    >
                        Verify
                </button>           
                }
                <button
                    className="inline-block rounded-md border border-transparent bg-white py-2 px-4 text-base font-medium text-indigo-600 hover:bg-indigo-50"
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