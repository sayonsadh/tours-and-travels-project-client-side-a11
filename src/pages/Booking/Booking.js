import React, { useEffect, useRef, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Booking = () => {

    const nameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const addressRef = useRef();
    const dateRef = useRef();
    const destinationRef = useRef();

    const handleConfirmPackage = e => {
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const phone = phoneRef.current.value;
        const address = addressRef.current.value;
        const date = dateRef.current.value;
        const destination = destinationRef.current.value;
        const status = "Pending...";

        const confirmPackage = {name, email, phone, address, date, destination, status};

        fetch('https://frightful-zombie-62130.herokuapp.com/tours', {
            method: "POST",
            headers:{
                "content-type": "application/json"
            },
            body:JSON.stringify(confirmPackage)
        } )
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                alert('Congratulation, Your package confirm successfully.')
                e.target.reset();
            }
        })
    }

    const { place } = useParams();
    const {user} = useAuth();
    const [packs, setPacks] = useState([]);

    useEffect(() => {
        fetch('https://frightful-zombie-62130.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setPacks(data))
    }, [place]);
    const pack = packs.filter(packDetails => place === packDetails.place);

    return (
        <div className="mt-5">
            <h4 className='border border-info rounded-3 w-25 mx-auto bg-success text-white p-3'>You select {place} Tour</h4>
            <div className="d-flex">

                <div className=" border border-info rounded-3 p-3 bg-info bg-opacity-25 w-50 m-3" >
                    <img className="img-fluid" src={pack[0]?.image} alt="" />
                    <h3>{pack[0]?.pack}</h3>
                    <h4>{place}</h4>
                    <p>{pack[0]?.description}</p>
                    <h4>Price:- {pack[0]?.price}</h4>
                </div>

                <div className="w-50 mt-5 p-5">
                    <Form onSubmit={handleConfirmPackage}>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                            <Form.Label column sm="2">
                                Name
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control ref={nameRef} readOnly defaultValue={user?.displayName}   />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                            <Form.Label column sm="2">
                                Email
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control ref={emailRef} type="email" readOnly defaultValue={user?.email} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                            <Form.Label column sm="2">
                                Phone
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control ref={phoneRef}  placeholder="Your Phone Number" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                                Address
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control ref={addressRef} placeholder=" Your Address" />
                            </Col>
                        </Form.Group>
                        
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                               Date
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control ref={dateRef} type="date" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                                Destination
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control ref={destinationRef} readOnly defaultValue={place} />
                            </Col>
                        </Form.Group>

                        <input className="btn btn-success" type="submit" value="Confirm This Tour" />
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Booking;