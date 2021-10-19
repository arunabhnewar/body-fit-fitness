import { faClock, faPhoneAlt, faStreetView } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Information = () => {
    return (
        <div className="container my-3">
            <div className="bg-warning">
                <div className="row mx-auto">

                    <div className="col-md-4 col-sm-12 px-2 text-center py-5">
                        <h3>Phone</h3>
                        <FontAwesomeIcon icon={faPhoneAlt} /> <span>
                            000 (123) 456 7890</span>
                    </div>

                    <div className="col-md-4 col-sm-12 px-2 text-center py-5">
                        <h3>Address</h3>
                        <FontAwesomeIcon icon={faStreetView} /> <span>
                            198 West 21th Street, <br /> Suite 721, New York NY 10016</span>
                    </div>

                    <div className="col-md-4 col-sm-12 px-2 text-center py-5">
                        <h3>Open Monday-Friday</h3>
                        <FontAwesomeIcon icon={faClock} /> <span>
                            8:00am - 9:00pm</span>
                    </div>



                </div>

            </div>
        </div>
    );
};

export default Information;