import React from 'react';
import { Link } from 'react-router-dom';
import './Pack.css';

const Pack = ({PackageInfo}) => {
    const {pack, place, price, description, image} = PackageInfo;
    return (
        <div>
            <div className="h-100 border border-info rounded-3 p-3 bg-info bg-opacity-25" >
                <img className="img-fluid" src={image} alt="" />
                <h3>{pack}</h3>
                <h4>{place}</h4>
                <p>{description}</p>
                <h4>Price:- ${price}</h4>
                <Link to={`/booking/${place}`}><button className="btn btn-success">Book {place} Tour</button></Link>
            </div>
        </div>
    );
};

export default Pack;