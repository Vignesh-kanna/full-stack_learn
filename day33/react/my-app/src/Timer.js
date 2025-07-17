import React from 'react'
import {useState,useEffect} from 'react'
const Timer = () => {
    const [counter, setCounter] = useState(0);
    useEffect(() => {
        console.log("start Timer");
        const intervalId = setInterval(() => {
            setCounter(prev => prev + 1);
        }, 1000);
        return () => {
            clearInterval(intervalId);
            console.log("stop");
        };
    }, []);
  return (
    <div>
        Timer Counter:{counter}seconds
    </div>
  )
}

export default Timer
