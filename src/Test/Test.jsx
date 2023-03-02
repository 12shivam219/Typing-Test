import React, { useEffect, useState } from 'react'
import Error_Time_Accuracy from '../Error-Time-Accuracy/Error_Time_Accuracy';
import paragraph from '../JSON/paragraph.json'

export default function Test() {

    const randomParagraph = Math.floor(Math.random() * 10);
    const [rand, setRand] = useState(0);
    useEffect(
        () => {

        }, [rand])
    console.log(rand);
    const [input, setInput] = useState('');
    if (paragraph[rand].paragraph == input) {

    }

    return (
        <>
            <div className="heading w-full block">
                <div className="head max-w-[50%] mt-8 mx-auto text-center">
                    <h1 className='text-6xl font-mono font-semibold'>Typing Test</h1>
                </div>
            </div>

            <Error_Time_Accuracy />

            <div className="fixPara w-full block">
                <div className="paraGraph max-w-[50%] shadow-2xl p-4 mt-3 mx-auto text-justify font-mono text-base font-bold">
                    <p>{paragraph[rand].paragraph}</p>
                </div>
            </div>

            <div className='inputParagraph'>
                <div className='input  max-w-[40%] p-4 mt-3 mx-auto'>
                    <textarea name="" value={input} id="" cols="30" rows="10" onChange={(e) => setInput(e.target.value)} className='w-full h-[200px] rounded-xl p-2 shadow-2xl'></textarea>
                </div>
            </div>
            {/* <button onClick={() => setRand(randomParagraph)}>Click</button> */}
        </>
    )
}
