import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Pack from '../Pack/Pack';
import './Packages.css';

const Packages = () => {
    const [packages, setPackages] = useState([]);

    useEffect(() => {
        fetch('https://frightful-zombie-62130.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [])

    return (
        <div> 
            <h3 className="border  rounded-3 text-dark  mx-auto p-3 " style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.01)", fontFamily: "Dosis, sans-serif"}}>Total {packages.length} packages available </h3>

            {!packages.length ? <Spinner animation="grow" variant="primary" /> : <> <div className="packages-container">
                {
                    packages.map(pack => <Pack
                        key={pack._id}
                        PackageInfo={pack}
                    ></Pack>)
                }
            </div></>}
        </div>
    );
};

export default Packages;