import React, { useEffect, useState } from 'react'
import paragraph from '../JSON/paragraph.json'

export default function Test() {

    const randomParagraph = Math.floor(Math.random() * 10);
    const [rand,setRand]=useState(0);
    useEffect(
        ()=> {

        },[rand])
    console.log(rand);
    const [input, setInput] = useState('');
    if(paragraph[rand].paragraph==input) {
        
    }
    return (
        <>
            <div>{paragraph[rand].paragraph}</div>
            <div>
                <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} className='bg-black text-white' />
                <button onClick={()=>setRand(randomParagraph)}>Click</button>
            </div>
        </>
    )
}
