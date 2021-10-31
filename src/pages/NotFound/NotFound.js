import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className=" notfound-container">
            <Link to="/home"><button className="home-button ">CLICK HERE GO TO HOME</button></Link>
        </div>
    );
};

export default NotFound;