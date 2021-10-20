import React from 'react';
import Zoom from 'react-reveal/Zoom';
import package1 from '../../../images/package/package-1.png';
import package2 from '../../../images/package/package-2.png';
import package3 from '../../../images/package/package-3.png';

const Packages = () => {
    return (
        <div className="container mt-5 pt-5 pb-5">

            <Zoom left cascade>
                <h5 className="text-center text-white">Packages</h5>
                <h1 className="text-center text-warning">Special Packages</h1>
            </Zoom>

            <div className="row mt-5 mx-auto">
                <div className="col-sm-12 col-md-4">
                    <div>
                        <img className="img-fluid" src={package1} alt="" />
                    </div>
                    <div>
                        <h4 className="mt-4 text-white">Muscle Build Pro</h4>
                        <h6 className="text-white">1 Year Training</h6>
                        <p className="mt-2 text-muted">Muscle size increases when a person continually challenges the muscles to deal with higher levels of resistance or weight. 100 Percent Guaranty</p>

                        <h3 className="text-warning pt-3"><sup>$</sup>98.75/<sub>year</sub></h3>
                        <hr className="text-muted mx-auto" />
                    </div>
                </div>

                <div className="col-sm-12 col-md-4">
                    <div>
                        <img className="img-fluid" src={package2} alt="" />
                    </div>
                    <div>
                        <h4 className="mt-4 text-white">Women Strength Training</h4>
                        <h6 className="text-white">1 Month Training</h6>
                        <p className="mt-2 text-muted">Strength training or resistance training involves the performance of physical exercises which are designed to improve strength.</p>

                        <h3 className="text-warning pt-3"><sup>$</sup>20.87/<sub>month</sub></h3>
                        <hr className="text-muted mx-auto" />
                    </div>
                </div>

                <div className="col-sm-12 col-md-4">
                    <div>
                        <img className="img-fluid" src={package3} alt="" />
                    </div>
                    <div>
                        <h4 className="mt-4 text-white">Fat Burning Pro</h4>
                        <h6 className="text-white">1 Year Training</h6>
                        <p className="mt-2 text-muted">High Intensity Interval Training. HIIT is the number one most effective way to burn body fat. As carbon dioxide, through your lungs.</p>

                        <h3 className="text-warning pt-3"><sup>$</sup>20.87/<sub>year</sub></h3>
                        <hr className="text-muted mx-auto" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Packages;