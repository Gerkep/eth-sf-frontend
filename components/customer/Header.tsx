import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { contractABI, verifyUser } from '../../utils';
import { useAccount, useFeeData, useSigner } from "wagmi";
import {ethers} from "ethers";

const Header = ({openSignIn}: any) => {
    const [verified, setVerified] = useState(false);
    const {address} = useAccount();
    const [loading, setLoading] = useState(false);
    const {data: signer} = useSigner();

    useEffect(()=>{
        if(address && signer){
            const cJomTx = new ethers.Contract("0xd0190Eb9c8a7c24be255BD9445dd07c500d4f6b3",contractABI, signer);
            console.log(cJomTx);
            cJomTx["registeredUser"](address).then((data : any)=>{
                console.log(data);
                setVerified(data);
            })
        }
    },[address,signer])
    
    const verifyUserFunc = async () => {
        setLoading(true);
        await verifyUser(address);
        setVerified(true)
        setLoading(false);
    }

    return (
        <div style={{height: "13vh"}} className="bg-indigo-600">
            <nav className="mx-auto max-w-full px-4 sm:px-6 lg:px-8" aria-label="Top">
            <div className="flex w-full items-center justify-between border-indigo-500 py-6 lg:border-none">
                <div className="flex items-center hidden sm:block">
                <Link href="/">
                    <div>
                    <span className="sr-only">Your Company</span>
                    <div className="h-10 w-14 w-auto relative">
                        <Image alt="logo" layout='fill' objectFit='contain'  src={"https://tailwindui.com/img/logos/mark.svg?color=white"}></Image>
                    </div>
                    </div>
                </Link>
                </div>
                <div className="sm:ml-10 space-x-4 flex items-center">
                {verified ?
                <button
                    className="inline-block rounded-md border border-transparent bg-indigo-500 py-2 px-4 text-base font-medium text-white hover:bg-opacity-75"
                    >
                        Verified ???
                </button> 
                :
                loading ?
                <button
                    onClick={() => verifyUserFunc()}
                    className="inline-block rounded-md border border-transparent bg-indigo-500 py-2 px-4 text-base font-medium text-white hover:bg-opacity-75"
                    >
                    <div className='spinner-white'></div>
                </button>    
                :
                <button
                    onClick={() => verifyUserFunc()}
                    className="inline-block rounded-md border border-transparent bg-indigo-500 py-2 px-4 text-base font-medium text-white hover:bg-opacity-75"
                    >
                        Verify
                </button>           
                }
                <ConnectButton />
                </div>
            </div>
            </nav>
        </div>
    )
}

export default Header;