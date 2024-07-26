import React, { useState, useRef } from 'react';
import { useEffect } from 'react';

const Cronometro = () => {
    const [seconds, setSeconds] = useState(0);
    const intervalRef = useRef(null);

    const timeDisplay = useRef(null);

    const start = () => {
        if (!intervalRef.current) {
            intervalRef.current = setInterval(() => {
                setSeconds(prevSeconds => prevSeconds + 1);
            }, 1000);
        }
    };

    const stop = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
    };

    const reset = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setSeconds(0);
    };

    const formatTime = (seconds) => {
        const date = new Date(seconds * 1000);
        return date.toISOString().substr(11, 8);
    };

    useEffect(() => {
        if (timeDisplay.current) {
            timeDisplay.current.textContent = formatTime(seconds);
        }
    }, [seconds]);

    return (
        <div className='container-cronometro'>
            <div className="time" ref={timeDisplay}>
                00:00:00
            </div>
            <div className="buttons">
                <button className="btn start" onClick={start}>Start</button>
                <button className="btn pause" onClick={stop}>Stop</button>
                <button className="btn reset" onClick={reset}>Reset</button>
            </div>
        </div>
    );
};

export default Cronometro;
