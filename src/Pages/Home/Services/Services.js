import React from 'react';
import './Services.css';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import service1 from '../../../images/services/service-1.png';
import service2 from '../../../images/services/service-2.png';
import service3 from '../../../images/services/service-3.png';
import service4 from '../../../images/services/service-4.png';

const Services = () => {
    return (
        <div className="container my-5 pt-3 pb-5">
            <Zoom left cascade>
                <h5 className="text-center text-white mt-5">Services</h5>
                <h1 className="text-center text-warning">Our Process</h1>
            </Zoom>

            <div className="row mt-5 mx-auto">
                <Fade right cascade>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="service-img ms-5 ps-5">
                            <img src={service1} alt="" />
                        </div>
                        <div className="ms-3 ps-5">
                            <h5 className="mt-4 text-white">Analyze Your Goal</h5>
                            <p className="mt-2 text-muted">The Goal Analysis involves an training of the steps taken by  an expert when he is  performing the actions stated in  the goal.</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="service-img ms-5 ps-5">
                            <img src={service2} alt="" />
                        </div>
                        <div className="ms-3 ps-5">
                            <h5 className="mt-4 text-white">Work Hard On It</h5>
                            <p className="mt-2 text-muted"> We teaches you discipline,  dedication and determination.Smart work, often leads to shortcuts and procrastination.</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="service-img  ms-5 ps-5">
                            <img src={service3} alt="" />
                        </div>
                        <div className="ms-3 ps-5">
                            <h5 className="mt-4 text-white">Improve Performance</h5>
                            <p className="mt-2 text-muted">Work performance refers to your history of responsibilities  and  ability to complete your job well.</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="service-img ms-5 ps-5">
                            <img src={service4} alt="" />
                        </div>
                        <div className="ms-3 ps-5">
                            <h5 className="mt-4 text-white">Achieve Perfect Body</h5>
                            <p className="mt-2 text-muted"> Imagine yourself six months from now.We will push your training and  diet chart that you can achieve  perfect body.</p>
                        </div>
                    </div>
                </Fade>
            </div>
        </div >
    );
};

export default Services;