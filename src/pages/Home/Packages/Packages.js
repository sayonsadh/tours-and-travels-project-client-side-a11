import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Pack from '../Pack/Pack';
import './Packages.css';

const Packages = () => {
    const [packages, setPackages] = useState([]);

    useEffect(() => {
        fetch('http://localhost:9000/packages')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [])

    return (
        <div>
            <h3 className="border border-info rounded-3 text-dark w-50 mx-auto p-3 ">Total packages:- {packages.length}</h3>
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