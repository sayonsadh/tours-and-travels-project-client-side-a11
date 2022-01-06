import React from 'react';
import { Link } from 'react-router-dom';
import './Pack.css';
import { BsBookmarkCheckFill } from "react-icons/bs";



const Pack = ({PackageInfo}) => {
    const {pack, place, price, description, image} = PackageInfo;
    return (
        <div>
            <div className="h-100 p-3 rounded-3" style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.01)"}} >

                <img className="img-fluid" style={{width:'250px', height:'200px'}} src={image} alt="" />
                <h3 className="mb-1" style={{fontFamily: "Dosis, sans-serif"}}>{pack}</h3>
                <h4 className="mb-1" style={{fontFamily: "Dosis, sans-serif"}}>{place}</h4>
                <p className="text-start p-2 mb-1">{description.slice(0, 100)}</p>
                <h4>Price:- ${price}</h4>
                <Link to={`/booking/${place}`}><button className="btn  btn-success mb-0"> <BsBookmarkCheckFill/>  Book {place} Tour</button></Link>
            </div>
        </div>
    );
};

export default Pack;