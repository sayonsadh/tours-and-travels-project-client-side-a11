import React, { useEffect, useState } from 'react';
import './MyPackages.css';

const MyPackages = () => {

    const [tours, setTours] = useState([]);

    useEffect( () => {
        fetch('http://localhost:9000/tours')
        .then(res => res.json())
        .then(data => setTours(data))
    }, [])
    
    return ( 
        <div>
            <h5 className="fst-italic mt-2 p-3">Here Is Your selected Package</h5>
            <div className="myPackage-container m-5">
            {
                tours.map(tour =>
                    <div className="border border-info w-100 bg-info bg-opacity-25 rounded-3 ">
                        <h2>Congratulation</h2>
                        <h5>Name:- {tour.name}</h5>
                        <h5>Email:- {tour.email}</h5>
                        <h6>Phone:- {tour.phone}</h6>
                        <h6>Address:- {tour.address}</h6>
                        <h6>Destination:- {tour.destination}</h6>
                        <h6>Travel date:- {tour.date}</h6>
                        {/* <h6>{tour.status}</h6> */}
                        
                    </div>
                     )
            }
            </div>
        </div>
    );
};

export default MyPackages;