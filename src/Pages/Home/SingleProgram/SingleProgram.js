import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleProgram = (props) => {
    const { id, name, img, charge, instructor } = props.singleProgram;
    return (
        <div className="row mx-auto">
            <div className="col-md-4 col-sm-12">

                <Card className="mx-auto my-3" style={{ width: '18rem' }} >
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            Instructor: {instructor}
                        </Card.Text>
                        <Card.Text>
                            <sup>$</sup> {charge}/<sub>month</sub>
                        </Card.Text>

                        <div>
                            <Link to={`/program/${id}`}>
                                <Button variant="warning">See More</Button>
                            </Link>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default SingleProgram;