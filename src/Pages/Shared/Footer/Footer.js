import { faFacebookSquare, faInstagramSquare, faTwitterSquare, faWhatsappSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="container-fluid footer-section">
            <div className="row pb-2">
                <div className="col-md-3 col-sm-12">

                    <div className="ms-5">
                        <h5 className="mt-5 text-white">About Us</h5>
                        <span className="footer-content">Careers</span>
                        <br />
                        <span className="footer-content">Press Release</span>
                        <br />
                        <span className="footer-content">Education</span>
                        <br />
                        <span className="footer-content">Core Values</span>
                        <br />
                        <span className="footer-content">Gift Card</span>
                        <br />
                        <span className="footer-content">Contact Us</span>
                        <br />
                        <span className="footer-content">Membership Policies</span>
                    </div>
                </div>

                <div className="col-md-3 col-sm-12">
                    <div className="ms-5">
                        <h5 className="mt-5 text-white">Our Brands</h5>
                        <span className="footer-content">Soul Cycle</span>
                        <br />
                        <span className="footer-content">Blink</span>
                        <br />
                        <span className="footer-content">Precision Run</span>
                        <br />
                        <span className="footer-content">Pure Yoga</span>
                        <br />
                        <span className="footer-content">Aerobic Life</span>
                    </div>
                </div>

                <div className="col-md-3 col-sm-12">
                    <div className="ms-5">
                        <h5 className="mt-5 text-white">FAQs</h5>
                        <span className="footer-content">Terms and Conditions</span>
                        <br />
                        <span className="footer-content">Privacy Policy</span>
                        <br />
                        <span className="footer-content">Advertising Policy</span>
                        <br />
                        <span className="footer-content">Send Feedback</span>
                    </div>
                </div>

                <div className="col-md-3 col-sm-12">
                    <div className="ms-5 mt-5">
                        <h5 className="text-white">Follow Us</h5>
                        <FontAwesomeIcon className="icon" icon={faTwitterSquare} />
                        <FontAwesomeIcon className="icon" icon={faInstagramSquare} />
                        <FontAwesomeIcon className="icon" icon={faFacebookSquare} />
                        <FontAwesomeIcon className="icon" icon={faWhatsappSquare} />
                        <FontAwesomeIcon className="icon" icon={faYoutubeSquare} />
                        <h3 className="mt-4 text-white">Body Fit</h3>
                    </div>
                </div>

            </div>
            <hr className="text-white w-75 mx-auto mt-3" />
            <div>
                <p className="text-muted text-center mb-0">Copyrights @ All rights reserved by newardevil.com</p>
            </div>
        </div>
    );
};


export default Footer;