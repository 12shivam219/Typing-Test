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

            <Error_Time_Accuracy/>

            {/* <div>{paragraph[rand].paragraph}</div>
            <div>
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} className='bg-black text-white' />
                <button onClick={() => setRand(randomParagraph)}>Click</button>
            </div> */}
        </>
    )
}
