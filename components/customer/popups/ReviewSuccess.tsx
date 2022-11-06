import React from 'react';

const ReviewSuccess = ({ onCloseModal }: any) => {

  const handleCloseClick = () => {
    onCloseModal();
  };

  return (

    < div className='fixed top-0 left-0 z-50 w-full h-screen flex justify-center items-center backdrop-blur-lg cursor-pointer' >
      <div className="sm:mx-auto w-11/12 sm:w-full sm:max-w-md rounded-xl shadow-[2px_2px_50px_rgba(0,0,0,0.25)]">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 border-2 rounded-xl">
          <div className="flex min-h-full flex-col justify-center sm:px-6 lg:px-8 ">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
              <h2 className="mb-2 text-center text-3xl font-bold tracking-tight text-gray-900">Thanks for your feedback</h2>
            </div>
          </div>
          <button
            onClick={() => handleCloseClick()}
            className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Done
          </button>
        </div>
      </div>
    </div >
  )
};

export default ReviewSuccess;