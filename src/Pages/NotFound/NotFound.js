import React from 'react';
import notFound from '../../images/page-error.jpg';


const NotFound = () => {
    return (
        <div className="container mt-5 pt-5">
            <img className="img-fluid w-75" src={notFound} alt="" />
        </div>
    );
};

export default NotFound;