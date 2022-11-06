import React, { useRef } from 'react';
import { useState, useEffect } from 'react';
import StarRatingComponent from 'react-star-rating-component';

const ReviewForm = ({ onCloseModal, setOpenReview }: any) => {

  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [loading, setLoading] = useState(false);
  const ref = useRef<null | HTMLDivElement>(null);

  const handleCloseClick = () => {
    onCloseModal();
  };

  useEffect(() => {

    const onBodyClick = (event: any) => {
      if (ref.current?.contains(event.target)) {
        return;
      }
      setOpenReview(false);
    }
    document.body.addEventListener('click', onBodyClick, { capture: true })

    return () => { document.body.removeEventListener('click', onBodyClick, { capture: true }) }
  }, [])

  const onFormSubmit = (event: any) => {
    event.preventDefault();
    handleCloseClick();
  }

  const ratingChanged = (newRating: any) => {
    setRating(newRating);
  };

  return (
    <div className='fixed top-0 left-0 z-50 w-full h-screen flex justify-center items-center backdrop-blur-lg cursor-pointer'>
      <div className="sm:mx-auto w-11/12 sm:w-full sm:max-w-md rounded-xl shadow-[2px_2px_50px_rgba(0,0,0,0.25)]">
        <div ref={ref} className="bg-white py-16 px-8 shadow sm:rounded-lg sm:px-10 border-2 rounded-xl">
          <div className="flex min-h-full flex-col justify-center sm:px-6 lg:px-8 ">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
              <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">Rate your purchase</h2>
            </div>
          </div>
          <form className="mt-4" onSubmit={(event) => onFormSubmit(event)} method="POST">
            <div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                </div>

              </div>

              <StarRatingComponent
                starCount={5}
                onStarClick={ratingChanged}
                starColor="#ffd700"
                name={"rating"}
                value={rating}
              />
              <div className="mt-2">
                <label htmlFor="review">Tell us your thoughts</label>
                <textarea name="review" id="review" cols={30} rows={10} placeholder='Great customer service! I will come again for sure.' className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  onChange={event => setReview(event.target.value)}
                  required>{review}</textarea>
              </div>

            </div>

            <div className='mt-2'>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Submit Review
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
};

export default ReviewForm;