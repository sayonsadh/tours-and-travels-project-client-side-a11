import React, { useEffect, useState } from 'react';
import './ManagePackage.css';

const ManagePackage = () => {
    const [tours, setTours] = useState([]);
    const [approve, setApprove] = useState(false);

    useEffect(() => {
        fetch('https://frightful-zombie-62130.herokuapp.com/tours')
            .then(res => res.json())
            .then(data => setTours(data))
    }, [approve]);

    //cancel tour
    const handleCancelTour = id => {
        const proceed = window.confirm('Are you sure you want to cancel this tour?');
        if(proceed){
            const uri = `https://frightful-zombie-62130.herokuapp.com/tours/${id}`;
            fetch(uri, {
                method: "DELETE"
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0) {
                    alert('Tour Cancel successfully')
                    const remainingTours = tours.filter(tour => tour._id !== id)
                    setTours(remainingTours);
                }
            })
        }
    }
    const update = {
        status:"Approved"
    };
    //update
    const handleUpdateBtn = id => {
        const uri = `https://frightful-zombie-62130.herokuapp.com/tours/${id}`;
        fetch(uri, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(update)
        })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount > 0) {
                alert('approved successfully')
                setApprove(!approve)
            }
        })
    }

    return (
        <div>
            <h5 className="fst-italic mt-5 p-3">If you want to cancel any tour, you can do this.</h5>
           <div className="managePackage-container m-5">
           {
                tours.map(tour =>
                    <div className="border border-info w-100  bg-info bg-opacity-25 rounded-3" key={tour._id}>
                        <h5>Name:- {tour.name}</h5>
                        <h5>Email:- {tour.email}</h5>
                        <h6>Phone:- {tour.phone}</h6>
                        <h6>Address:- {tour.address}</h6>
                        <h6>Destination:- {tour.destination}</h6>
                        <h6>Travel date:- {tour.date}</h6>
                        <h5>status:- {tour.status}</h5>
                        <button className="btn btn-danger mb-2" onClick={() => handleCancelTour(tour._id)}>Cancel {tour.destination} Tour</button><br />
                        <button className="btn btn-danger mb-2" onClick={() => handleUpdateBtn(tour._id)}>Approved {tour.destination} Tour</button>
                    </div>
                )
            }
           </div>
        </div>
    );
};

export default ManagePackage;