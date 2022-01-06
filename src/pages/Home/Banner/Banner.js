import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="d-flex justify-content-between mt-5 p-3">
                <h6 style={{fontFamily: "Syncopate, sans-serif"}}>WORK HARD</h6>
                <h6 style={{fontFamily: "Syncopate, sans-serif"}}>MAKE MONEY</h6>
                <h6 style={{fontFamily: "Syncopate, sans-serif"}}>VISIT WORLD</h6>
            </div>
            <h2 style={{fontFamily: "Courgette, cursive"}}>SAYON TOURS & TRAVELS <i className="fas fa-plane-departure"></i></h2>
            <img className="w-50" src="https://image.freepik.com/free-vector/travel-concept-with-landmarks_1057-4873.jpg" alt="" />
        </div>
    );
};

export default Banner;