import React, { useRef } from 'react';

const AddPackage = () => {
    const packageRef = useRef();
    const placeRef = useRef();
    const priceRef = useRef();
    const descriptionRef = useRef();
    const imageRef = useRef();

    const handleAddPackage = e => {
        const pack = packageRef.current.value;
        const place = placeRef.current.value;
        const price = priceRef.current.value;
        const description = descriptionRef.current.value;
        const image = imageRef.current.value;

        const newPackage = { pack, place, price, description, image };

        fetch('https://frightful-zombie-62130.herokuapp.com/packages', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newPackage)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    alert('Successfully added a package.')
                    e.target.reset();
                }
            })

        e.preventDefault();
    }
    return (
        <div className="">
            <h5 className='mt-5 p-3 fst-italic'>Please Add Package, Which Package You Need.</h5>
            <div className=" addpackage-container">
                <div className="me-5 ms-5 "> 
                    <img className="img-fluid" src="https://content.presentermedia.com/content/animsp/00007000/7148/airplane_passenger_ride_md_nwm_v2.gif" alt="" />
                </div>
                <div className="ms-5 mb-5">
                    <h4 className="text-success">Give Package Info</h4>
                    <form onSubmit={handleAddPackage} >
                        <input type="text" placeholder="package name" ref={packageRef} className="mb-2" /><br />
                        <input type="text" placeholder="place name" ref={placeRef} className="mb-2" /><br />
                        <input type="text" placeholder="price" ref={priceRef} className="mb-2" /><br />
                        <textarea name="" id="" cols="23" rows="3" placeholder="description" className="mb-2" ref={descriptionRef}></textarea><br />
                        <input type="text" placeholder="photo url" ref={imageRef} className="mb-2" /><br />
                        <input className="btn btn-success" type="submit" value="Add Package" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddPackage;