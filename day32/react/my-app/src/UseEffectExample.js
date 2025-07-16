import React from 'react'
import {useState,useEffect} from 'react'
const UseEffectExample = () => {
    const [course,setCourse]=useState('react');
    const [isCount,setIsCount]=useState(0);
    useEffect(() => {
        if (course === 'react') {
            setCourse('Python');
        } else {
            setCourse('web');
        }
    }, [course]);
    useEffect(()=>(
        console.log("hello")
    ),[])
  return (
    <div>
        UseEffectExample
        <p>your course is: {course}</p>
        <hr/>

        <button onClick={()=>setIsCount(isCount+1)}>click</button>
        <p>your count is:{isCount}</p>
    </div>
  )
}

export default UseEffectExample
