import React, { useEffect, useState } from 'react';

function CurrentTime(prop) {
    const [time , setTime] = useState("0:00:00 xx");
    useEffect(()=>{
        setInterval(()=>{
            setTime(new Date().toLocaleTimeString());
        },1000)
    },[])
  return (
    <>
        <span className={prop.myClass}>{time}</span>
    </>
  )
}

export default CurrentTime;