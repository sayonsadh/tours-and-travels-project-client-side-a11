import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import './MyPackages.css';

const MyPackages = () => {
    const { user } = useAuth();
    const [tours, setTours] = useState([]);

    useEffect(() => {
        fetch('https://frightful-zombie-62130.herokuapp.com/tours')
            .then(res => res.json())
            .then(data => {
                const selectPackage = data.filter(e => 
                    e.email === user.email,
                )
                setTours(selectPackage);
            })
    }, [])

    return (
        <div>
            <h5 className="fst-italic mt-5 p-3">Here Is Your selected Package</h5>
            <div className="myPackage-container m-5">
                {
                    tours.map(tour =>
                        <div className=" w-100 bg-info bg-opacity-25 rounded-3 " key={tour._id}>
                            <h2>Congratulation</h2>
                            <h5>Name:- {tour.name}</h5>
                            <h5>Email:- {tour.email}</h5>
                            <h6>Phone:- {tour.phone}</h6>
                            <h6>Address:- {tour.address}</h6>
                            <h6>Destination:- {tour.destination}</h6>
                            <h6>Travel date:- {tour.date}</h6>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default MyPackages;