import { useEffect, useState } from 'react';
import SingleProgram from '../SingleProgram/SingleProgram';
import './Programs.css';
import Zoom from 'react-reveal/Zoom';

const Programs = () => {
    const [programs, setPrograms] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/arunabhnewar/fake-data-program/main/programs.json')
            .then(res => res.json())
            .then(data => setPrograms(data));
    }, [])
    return (
        <div className="my-5 pt-5">
            <Zoom left cascade>
                <h5 className="text-center text-white">Programs</h5>
                <h1 className="text-center text-warning">Our Programs</h1>
            </Zoom>

            <div className="programs-container py-5">
                {
                    programs.map(singleProgram => <SingleProgram key={singleProgram.id} singleProgram={singleProgram}></SingleProgram>)
                }
            </div>
        </div>
    );
};

export default Programs;