import React from 'react';
import './Stories.css';

const Stories = () => {
    return (
        <div className="container-fluid py-5 my-5">
            <h5 className="text-center text-white">Experience</h5>
            <h1 className="text-center text-warning pb-5">Our Stories</h1>
            <div className="stories-container">
                <div className="row pt-5">

                    <div className="col-sm-12 col-md-3 mx-auto mt-3 pt-3 text-center">
                        <h1 className="text-warning">5,000</h1>
                        <p className="text-warning">Happy Customers</p>
                    </div>

                    <div className="col-sm-12 col-md-3 mt-3 pt-3 text-center">
                        <h1 className="text-warning">4,560</h1>
                        <p className="text-warning">Perfect Bodies</p>
                    </div>

                    <div className="col-sm-12 col-md-3 mt-3 pt-3 text-center">
                        <h1 className="text-warning">570</h1>
                        <p className="text-warning">Working Hours</p>
                    </div>

                    <div className="col-sm-12 col-md-3 mt-3 pt-3 text-center">
                        <h1 className="text-warning">900</h1>
                        <p className="text-warning">Success Stories</p>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Stories;