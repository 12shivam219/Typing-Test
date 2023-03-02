import React from 'react'

export default function Error_Time_Accuracy() {
  return (
    <>

      <div className="errors-time-accuracy-container">
        <div className="cont max-w-[50%] mt-8 mx-auto flex justify-center">

          {/* <div className="errors w-[100px] h-[100px] text-center shadow-2xl rounded-xl">
            <h1 className='text-lg font-extrabold font-mono'>WPM</h1>
          </div> */}

          <div className="errors w-[100px] h-[100px] text-center shadow-2xl rounded-xl">
            <h1 className='text-lg font-extrabold font-mono'>ERRORS</h1>
          </div>
          <div className="time w-[100px] h-[100px] text-center mx-5 shadow-2xl rounded-xl">
            <h1 className='text-lg font-extrabold font-mono'>TIME</h1>
          </div>
          <div className="accuracy w-[100px] h-[100px] text-center shadow-2xl rounded-xl">
            <h1 className='text-lg font-extrabold font-mono'>ACCURACY</h1>
          </div>
        </div>
      </div>


    </>
  )
}
