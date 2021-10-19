import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Program = () => {
    const { programId } = useParams();
    const { programs } = useAuth();
    const selectItem = programs?.find(singleProgram => singleProgram.id === (programId))
    return (
        <div className="container my-5 py-5">
            {
                selectItem?.name &&
                <div>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={selectItem?.img} />
                        <Card.Body className='text-center'>
                            <Card.Title>{selectItem?.name}</Card.Title>
                            <p className='m-0'>Trainer: {selectItem?.instructor}</p>
                            <p className='m-0'>Price: {selectItem?.charge} $</p>
                            {/* <p>Rating: {selectItem?.rating}</p> */}
                            <Card.Text>{selectItem?.description}</Card.Text>
                            <Link to='/home'><Button className='w-100' variant="primary">Gb Back</Button></Link>
                        </Card.Body>
                    </Card>
                </div>
            }

        </div>
    );
};

export default Program;