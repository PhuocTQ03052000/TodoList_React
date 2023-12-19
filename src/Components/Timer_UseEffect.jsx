import React, { useEffect, useState } from "react";
//Timer: setInterval, setTimeout, clearInterval, clearTimeout


// callBack luôn được gọi sau khi component mounted
// Cleanup function luôn được gọi trước khi component unmounted
// cleanup function luôn được gọi trước khi callback được gọi (trừ lần mounted)
function Content() {
    const [countDown, setCountDown] = useState(180);
    const [count, setCount] = useState(1);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setCountDown(countDown - 1);
    //     }, 1000);
    // }, [countDown]);

    useEffect(() => {
        const timerId = setInterval(() => {
            setCountDown(prevState => prevState - 1);
        }, 1000);

        return () => clearInterval(timerId);
    }, []);
   
    useEffect(() => {
        console.log(`Mounted or re-render ${count}`);

        //Cleanup function 
        return () => {
            console.log(`Cleanup lần ${count}`);
        }
    }, [count]);

    return (
        <div>
            <h1>{countDown}</h1>
            <button onClick={() => setCount(count + 1)}>Click me!</button>
            <h2>{count}</h2>
        </div>
      );
}

export default Content;