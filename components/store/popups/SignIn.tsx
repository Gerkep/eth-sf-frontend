import React from 'react';
import { useState } from 'react';

const SignIn = ({ onCloseModal, setOpenRegister }: any) => {

  const [storeKey, setStoreKey] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCloseClick = () => {
    onCloseModal();
  };

  const signin = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    handleCloseClick();
    setLoading(false);
  }

  const openRegister = () => {
    handleCloseClick();
    setOpenRegister(true);
  }

  return (
    <div className='fixed top-0 left-0 z-50 w-full h-screen flex justify-center items-center backdrop-blur-lg cursor-pointer'>
      <div className="sm:mx-auto w-11/12 sm:w-full sm:max-w-md rounded-xl shadow-[2px_2px_50px_rgba(0,0,0,0.25)]">
        <div className="bg-white py-16 px-8 shadow sm:rounded-lg sm:px-10 border-2 rounded-xl">
          <div className="flex min-h-full flex-col justify-center sm:px-6 lg:px-8 ">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
              <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">Sign in to your account</h2>
            </div>
          </div>
          <form className="mt-4" onSubmit={(e) => signin(e)} method="POST">
            <div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                </div>

              </div>
              <div className="mt-2">
                <input
                  id="storeKey"
                  name="storeKey"
                  type="password"
                  autoComplete="current-password"
                  placeholder='Store key'
                  required
                  value={storeKey}
                  onChange={event => setStoreKey(event.target.value)}
                  className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div className="text-sm mt-1">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot your store key?
                </a>
              </div>
            </div>
            <button
              type="submit"
              className="mt-1 flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Sign in
            </button>

            <div className="text-sm mt-1">
              Don&apos;t have an account? <a onClick={() => openRegister()} href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                Register here
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
};

export default SignIn;