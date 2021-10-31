import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="row d-flex justify-content-evenly  bg-info  p-2 text-dark ">

            <div className="ms-3 text-start  col-md-4">
                <h3>Honeymoons:</h3>
                <p>After married people go different country for honeymoon. Sayon tours and travels helping you <br /> to go abroad for enjoy new place with your spcial person.</p>
            </div>

            <div className="ms-3 text-start  col-md-4">
                <h3>Family travel:</h3>
                <p>Family is first priority.So if you make enjoyable time  with your family, <br /> please come SAYON TOUR AND TRAVELS. We have family trip package.</p>
            </div>

            <div className="ms-3 text-start  col-md-4">
                <h3>Group tour:</h3>
                <p>Without friend tour are impossible.We have best package for student.So, contact with us.</p>
            </div>

            <div className="ms-3 text-start  col-md-4">
                <h3>You need special package?</h3>
                <h5>Please, add a package, which package you need.</h5>
                <Link to="/addpackage"><button className="btn btn-warning mb-2">CLICK HERE FOR ADD PACKAGE</button></Link>
            </div>

        </div>
    );
};

export default Footer;