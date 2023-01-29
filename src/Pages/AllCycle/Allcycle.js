import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Cycle from './Cycle/Cycle';
import './AllCycle.css'

const Allcycle = () => {
    const [allCycle, setAllCycle] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/bicycle')
            .then(res => res.json())
            .then(data => setAllCycle(data))
    }, [])
    return (
        <div>
            <h1 className='text-center text-success'>This is Our All Cycle</h1>
            <div className='allCycle'>
                {
                    allCycle.map(cycle => <Cycle
                        key={cycle._id}
                        cycle={cycle}
                    ></Cycle>)
                }
            </div>
        </div>
    );
};

export default Allcycle;