import React, { useEffect, useState } from 'react';
import './Representative.css';

const Representative = () => {
    const [representatives, setRepresentatives] = useState([]);

    useEffect( () => {
        fetch('http://localhost:9000/representative')
        .then(res => res.json())
        .then(data => setRepresentatives(data))
    }, []);
    return (
        <div className="mt-5">
            <h3 className="bg-info bg-opacity-75 w-50  mx-auto p-2 rounded-3 text-white">Our Genius Representative</h3>
            <div className="worker-container ms-5">
                {
                    representatives.map(representative => 
                        <div className="border border-info w-75 m-5 rounded-3 ">
                            <img className="img-fluid p-2" src={representative.image} alt="" />
                            <h4>Name:- {representative.name}</h4> 
                            <h5>{representative.work}</h5>
                        </div>
                        )
                }
            </div>
            
        </div>
    );
};

export default Representative;