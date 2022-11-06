const Pdf = ({link, onCloseModal}: any) => {

    const handleCloseClick = () => {
        onCloseModal();
    };

    return (
        <div className='fixed top-0 left-0 z-50 w-full h-screen flex justify-center items-center backdrop-blur-lg cursor-pointer' onClick={() => handleCloseClick()}>
            <div className="rounded-xl w-11/12 h-1/2 lg:w-2/3 lg:h-2/3 flex justify-center items-center shadow-[2px_2px_50px_rgba(0,0,0,0.25)]">
                <div className="bg-white w-11/12 h-1/2 lg:w-11/12 lg:h-5/6 shadow sm:rounded-lg overflow-hidden border-2 rounded-xl" onClick={(e) => e.stopPropagation()}>
                    <iframe className="w-full h-full" src={link} />
                </div>
            </div>
        </div>
    )
  }

export default Pdf;