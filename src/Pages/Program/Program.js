import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import Rating from 'react-rating';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import './Program.css';

const Program = () => {
    const { programId } = useParams();
    const { programs } = useAuth();
    const matchingItem = programs?.find(program => program?.id === programId)
    return (
        <div className="container-fluid program-section py-5 ">

            <div className="row mx-auto">
                <div className="col-sm-12 col-md-5">
                    <img className="img-fluid pb-3" src={matchingItem?.img} alt="" />
                </div>

                <div className="col-md-7 col-sm-12">
                    <h5 className="text-white">Program</h5>
                    <h1 className="text-warning pb-1">{matchingItem?.name}</h1>
                    <h4 className="text-muted pb-1">Instructor: {matchingItem?.instructor}</h4>

                    <Rating readonly
                        style={{ color: "orange" }}
                        initialRating={matchingItem?.rating}
                        emptySymbol={<FontAwesomeIcon icon={emptyStar} />}
                        fullSymbol={<FontAwesomeIcon icon={fullStar} />}
                    />{' '} <span className="text-muted">{matchingItem?.rating}</span> |
                    <span className="text-muted">Total Review: {matchingItem?.ratingCount}</span>

                    <p className="text-muted">{matchingItem?.description}</p>

                    <h1 className="text-warning fw-bold"> <sup>$</sup>{matchingItem?.charge}/<sub>month</sub></h1>

                    <button className="btn btn-warning mt-4">Enroll Now</button>
                </div>
            </div>
        </div>
    );
};

export default Program;