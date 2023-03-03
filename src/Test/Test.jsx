import React, { useEffect, useState } from 'react'
import Error_Time_Accuracy from '../Error-Time-Accuracy/Error_Time_Accuracy';
import paragraph from '../JSON/paragraph.json'

export default function Test() {

    const [rand, setRand] = useState(0);
    const [input, setInput] = useState('');
    const [testarea, setTextarea] = useState(true);
    const [showBtn, setHide] = useState(true)
    const [showlogic, setLogic] = useState(true)
    let [timeLimit, setTimeLimit] = useState(10);

    let Interval = () => {
        let x = setInterval(() => {
            timeLimit--;
            setTimeLimit(timeLimit);
            if (timeLimit == 0) {
                clearInterval(x)
                setTimeLimit(10);
                setHide(true)
                setTextarea(true)
                setLogic(false)
            }
        }, 1000)
    }

    const handleButton = () => {

        const randomParagraph = Math.floor(Math.random() * paragraph.length);
        setTextarea(false);
        setRand(randomParagraph);
        setHide(false);
        Interval();

    }

    return (
        <>
            <div className="heading w-full block">
                <div className="head max-w-[50%] mt-8 mx-auto text-center">
                    <h1 className='text-6xl font-mono font-semibold'>Typing Test</h1>
                </div>
            </div>

            <Error_Time_Accuracy timeLimit={timeLimit} showlogic={showlogic} />

            <div className="fixPara w-full block">
                <div className="paraGraph max-w-[50%] shadow-2xl p-4 mt-3 mx-auto text-justify font-mono text-base font-bold">
                    <p onCopy={(e) => {
                        e.preventDefault()
                        return false
                    }}>{paragraph[rand].paragraph}</p>
                </div>
            </div>

            <div className='inputParagraph'>
                <div className='input  max-w-[40%] p-4 mt-3 mx-auto'>
                    <textarea name="" placeholder='Start typing here...' disabled={testarea} onPaste={(e) => {
                        e.preventDefault()
                        return false
                    }} onCopy={(e) => {
                        e.preventDefault()
                        return false
                    }}
                        value={input} id="" cols="30" rows="10" onChange={(e) => setInput(e.target.value)} className='w-full h-[170px] rounded-xl p-2 shadow-2xl'></textarea>
                </div>
            </div>

            <div className="btn text-center">
                <button onClick={handleButton} className={showBtn ? 'w-[100px] p-1 shadow-lg text-white font-extrabold text-xl font-mono rounded-md' : "hidden"}>Start</button>
            </div>
        </>
    )
}
