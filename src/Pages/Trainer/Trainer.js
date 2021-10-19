import React from 'react';
import './Trainer.css';
import trainer1 from '../../images/trainer/trainer-1.png';
import trainer2 from '../../images/trainer/trainer-2.png'
import trainer3 from '../../images/trainer/trainer-3.png'
import trainer4 from '../../images/trainer/trainer-4.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faInstagramSquare, faTwitterSquare, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons';

const Trainer = () => {
    return (
        <div id="trainer" className="container-fluid">
            <h5 className="text-center text-white pt-5">Trainer</h5>
            <h1 className="text-center text-warning pt-2">Our Instructors</h1>
            <div className="row mt-5">
                <div className="col-sm-12 col-md-6">
                    <div className="card mb-3 mx-auto" style={{ width: "540px" }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={trainer1} className="img-fluid rounded-start" alt="" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <span>Owner/Chief Instructor</span>
                                    <h3 className="card-title">Oscar Brook</h3>
                                    <p className="card-text">Founder and Chief Instructor of Body Fit. Well known as a trainer of body building and powerlifting. She has worked as a personal trainer for famous Hollywood models and actors.</p>
                                    <p className="card-text"><FontAwesomeIcon icon={faEnvelope} /> body_fit@mail.com</p>

                                    <span>
                                        <FontAwesomeIcon className="trainer-icon" icon={faTwitterSquare} />
                                    </span>
                                    <span>
                                        <FontAwesomeIcon className="trainer-icon" icon={faInstagramSquare} />
                                    </span>
                                    <span>
                                        <FontAwesomeIcon className="trainer-icon" icon={faFacebookSquare} />
                                    </span>
                                    <span>
                                        <FontAwesomeIcon className="trainer-icon" icon={faWhatsappSquare} />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-sm-12 col-md-6">
                    <div className="card mb-3 mx-auto" style={{ width: "540px" }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={trainer2} className="img-fluid rounded-start" alt="" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <span>Parkour and Cardio Instructor</span>
                                    <h3 className="card-title">Leonard Smith</h3>
                                    <p className="card-text">Parkour is a well-known name in the game. Twice Olympic gold medalist. Moreover, he has played in different parts of the world. He is also a cardio trainer.</p>

                                    <p className="card-text"><FontAwesomeIcon icon={faEnvelope} /> body_fit@mail.com</p>

                                    <span>
                                        <FontAwesomeIcon className="trainer-icon" icon={faTwitterSquare} />
                                    </span>
                                    <span>
                                        <FontAwesomeIcon className="trainer-icon" icon={faInstagramSquare} />
                                    </span>
                                    <span>
                                        <FontAwesomeIcon className="trainer-icon" icon={faFacebookSquare} />
                                    </span>
                                    <span>
                                        <FontAwesomeIcon className="trainer-icon" icon={faWhatsappSquare} />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-sm-12 col-md-6">
                    <div className="card mb-3 mx-auto" style={{ width: "540px" }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={trainer3} className="img-fluid rounded-start" alt="" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <span>Weight-Lifting and Cardio Instructor</span>
                                    <h3 className="card-title">James Buffer</h3>
                                    <p className="card-text">He has won the Olympics once in weightlifting. He has a reputation as a stunt man in Hollywood action movies. He is also working as a personal trainer for famous wrestlers.</p>

                                    <p className="card-text"><FontAwesomeIcon icon={faEnvelope} /> body_fit@mail.com</p>

                                    <span>
                                        <FontAwesomeIcon className="trainer-icon" icon={faTwitterSquare} />
                                    </span>
                                    <span>
                                        <FontAwesomeIcon className="trainer-icon" icon={faInstagramSquare} />
                                    </span>
                                    <span>
                                        <FontAwesomeIcon className="trainer-icon" icon={faFacebookSquare} />
                                    </span>
                                    <span>
                                        <FontAwesomeIcon className="trainer-icon" icon={faWhatsappSquare} />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-sm-12 col-md-6">
                    <div className="card mb-3 mx-auto" style={{ width: "540px" }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={trainer4} className="img-fluid rounded-start" alt="" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <span>Aerobic/Yoga Instructor</span>
                                    <h3 className="card-title">Mari Collins</h3>
                                    <p className="card-text">Expert in yoga and aerobics. He is also a nutritionist. He determines the required diet chart of the members.</p>

                                    <p className="card-text"><FontAwesomeIcon icon={faEnvelope} /> body_fit@mail.com</p>

                                    <span>
                                        <FontAwesomeIcon className="trainer-icon" icon={faTwitterSquare} />
                                    </span>
                                    <span>
                                        <FontAwesomeIcon className="trainer-icon" icon={faInstagramSquare} />
                                    </span>
                                    <span>
                                        <FontAwesomeIcon className="trainer-icon" icon={faFacebookSquare} />
                                    </span>
                                    <span>
                                        <FontAwesomeIcon className="trainer-icon" icon={faWhatsappSquare} />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    );
};

export default Trainer;