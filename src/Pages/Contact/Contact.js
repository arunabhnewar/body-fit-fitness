import React from 'react';
import './Contact.css';
import contact from '../../images/contact.jpg';
import { Button } from 'react-bootstrap';
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';

const Contact = () => {
    return (
        <div className="container-fluid container-content pt-5">
            <div className="row pt-5">
                <div className="col-sm-12 col-md-6 mb-5">
                    <Bounce left cascade>
                        <img className="img-fluid" src={contact} alt="" />
                    </Bounce>
                </div>

                <div className="col-sm-12 col-md-6 mb-5 mx-auto">
                    <Zoom right cascade>
                        <h1 className="text-warning">Book a Appointment</h1>
                    </Zoom>

                    <Bounce right cascade>
                        <form className="row g-3">
                            <div className="col-md-6  col-sm-12">
                                <label htmlFor="inputFirstName" className="form-label text-white">First Name</label>
                                <input type="name" className="form-control" id="inputFirstName" />
                            </div>

                            <div className="col-md-6  col-sm-12">
                                <label htmlFor="inputLastName" className="form-label text-white">Last Name</label>
                                <input type="name" className="form-control" id="inputLastName" />
                            </div>

                            <div className="col-md-6  col-sm-12">
                                <label htmlFor="inputPhone" className="form-label text-white">Phone</label>
                                <input type="phone" className="form-control" id="inputPhone" />
                            </div>

                            <div className="col-md-6  col-sm-12">
                                <label htmlFor="inputEmail" className="form-label text-white">Email</label>
                                <input type="email" className="form-control" id="inputEmail" />
                            </div>

                            <div className="col-md-12 col-sm-12">
                                <label htmlFor="inputAddress" className="form-label text-white">Address</label>
                                <input type="text" className="form-control" id="inputAddress" />
                            </div>

                            <div className="col-12">
                                <Button href="#" className="btn btn-warning">Watch Video</Button>
                            </div>
                        </form>
                    </Bounce>
                </div>
            </div>
        </div>
    );
};

export default Contact;