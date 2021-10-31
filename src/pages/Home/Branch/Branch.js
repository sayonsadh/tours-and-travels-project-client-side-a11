import React, { useEffect, useState } from 'react';
import './Branch.css';

const Branch = () => {
    const [branches, setBranches] = useState([]);

    useEffect( () => {
        fetch('https://frightful-zombie-62130.herokuapp.com/branch')
        .then(res => res.json())
        .then(data => setBranches(data))
    }, []);

    return (
        <div className="branches-container">
            <h3 className="border border-info w-25 mx-auto text-info p-2 bg-white">Our Branches</h3>
           <div  className="branch-container">
           {
                branches.map(branch => 
                    <div className="border border-info w-75 ms-5 mt-3 mb-3 bg-white rounded-3 p-2">
                        <img className="img-fluid" src={branch.image} alt="" />
                        <h4>Branch Name:- {branch.name}</h4>
                        <h4>Address:- {branch.address}</h4>
                    </div>
                    )
            }
           </div>
        </div>
    );
};

export default Branch;