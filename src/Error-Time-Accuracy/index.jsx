import React from 'react'

export default function ErrorTimeAccuracy({ timeLimit, showlogic,error ,accuracy,wpm}) {

  return (
    <>
      {
        showlogic ?
          <div className="errors-time-accuracy-container">
            <div className="cont max-w-[50%] mt-8 mx-auto flex justify-center">
              <div className="errors w-[100px] h-[100px] text-center shadow-2xl rounded-xl">
                <h1 className='text-lg font-extrabold font-mono'>ERRORS</h1>
                <span className='text-[56px] leading-none font-mono'>{error}</span>
              </div>
              <div className="time w-[100px] h-[100px] text-center mx-5 shadow-2xl rounded-xl">
                <h1 className='text-lg font-extrabold font-mono'>TIME</h1>
                <span className='flex justify-evenly text-[46px] font-mono'>{timeLimit} <span>S</span> </span>
              </div>
              <div className="accuracy w-[100px] h-[100px] text-center shadow-2xl rounded-xl">
                <h1 className='text-lg font-extrabold font-mono'>ACCURACY</h1>
                <span className='flex justify-evenly text-[46px] font-mono'>{accuracy} <span>%</span> </span>
              </div>
            </div>
          </div>
          :
          <div className="errors-time-accuracy-container">
            <div className="cont max-w-[50%] mt-8 mx-auto flex justify-center">
              <div className="errors w-[100px] h-[100px] text-center shadow-2xl rounded-xl">
                <h1 className='text-lg font-extrabold font-mono'>ERRORS</h1>
                <span className='text-[56px] leading-none font-mono'>{error}</span>
              </div>
              <div className="errors w-[100px] h-[100px] mx-5 text-center shadow-2xl rounded-xl">
                <h1 className='text-lg font-extrabold font-mono'>WPM</h1>
                <span className='text-[46px] font-mono'>{wpm}</span>
              </div>
              <div className="accuracy w-[100px] h-[100px] text-center shadow-2xl rounded-xl">
                <h1 className='text-lg font-extrabold font-mono'>ACCURACY</h1>
                <span className='flex justify-evenly text-[46px] font-mono'>{accuracy} <span>%</span> </span>
              </div>
            </div>
          </div>


      }

    </>
  )
}
