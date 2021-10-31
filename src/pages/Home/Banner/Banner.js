import React from 'react';

const Banner = () => {
    console.log(process.env);
    return (
        <div>
            <div className="d-flex justify-content-between  p-3">
                <h6>WORK HARD</h6>
                <h6>MAKE MONEY</h6>
                <h6>VISIT WORLD</h6>
            </div>
            <h2>SAYON TOURS & TRAVELS <i className="fas fa-plane-departure"></i></h2>
            <img className="w-50" src="https://image.freepik.com/free-vector/travel-concept-with-landmarks_1057-4873.jpg" alt="" />
        </div>
    );
};

export default Banner;