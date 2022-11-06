import React from 'react';
import { useState } from 'react';
import { registerUserInServer } from '../../../utils';

const Register = ({ onCloseModal, setOpenSignIn, setOpenRegisterQR, setStoreId, setStoreKey }: any) => {

  const [ens, setEns] = useState('')
  const [merchant, setMerchant] = useState('')
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false);

  const handleCloseClick = () => {
    onCloseModal();
  };

  const openSignIn = () => {
    handleCloseClick();
    setOpenSignIn(true);
  }
  const register = async (e: React.FormEvent<HTMLFormElement>) => {

    setLoading(true);
    e.preventDefault();

    const storeId = await registerUserInServer(e.target.company!.value,e.target.email!.value);
    console.log(storeId);
    // await registerStoreServer(e.target.email!,e.target!.company!);
    setStoreId(storeId);
    setStoreKey(e.target.company!.value);

    localStorage.setItem("storeKey",e.target.company!.value)
    localStorage.setItem("storeId",storeId);
    handleCloseClick();
    setLoading(false);
    setOpenRegisterQR(true);
  }

  return (
    <div className='fixed top-0 left-0 z-50 w-full h-screen flex justify-center items-center backdrop-blur-lg cursor-pointer'>
      <div className="sm:mx-auto w-11/12 sm:w-full sm:max-w-md rounded-xl shadow-[2px_2px_50px_rgba(0,0,0,0.25)]">
        <div className="bg-white py-16 px-8 shadow sm:rounded-lg sm:px-10 border-2 rounded-xl">
          <div className="flex min-h-full flex-col justify-center sm:px-6 lg:px-8 ">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
              <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">Register your store</h2>
            </div>
          </div>
          <form className="mt-4" onSubmit={(e) => register(e)} method="POST">
            <div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                </div>

              </div>
              <div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder='Email address'
                  required
                  value={email}
                  onChange={event => setEmail(event.target.value)}
                  className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div className="mt-2">
                <input
                  id="ens"
                  name="ens"
                  type="text"
                  autoComplete="ens"
                  placeholder='ENS (optional)'
                  value={ens}
                  onChange={event => setEns(event.target.value)}
                  className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div className="mt-2">
                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder='Merchant Company Name'
                  required
                  value={merchant}
                  onChange={event => setMerchant(event.target.value)}
                  className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div className="mt-2">
                <label htmlFor="profileImg">Profile picture (optional)</label>
                <input
                  id="profileImg"
                  name="profileImg"
                  type="file"
                  className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            <div className="text-sm mt-1">
              Already have an account? <a onClick={() => openSignIn()} href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                Sign in here
              </a>
            </div>
            <div className='mt-2'>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                    {loading ?
                    <div className='spinner-white'></div>
                    :
                    <p>Register store</p>
                    }
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
};

export default Register;