import useAuth from '../../../Hooks/useAuth';
import SingleProgram from '../SingleProgram/SingleProgram';
import './Programs.css';

const Programs = () => {
    const { programs } = useAuth();
    return (
        <div className="my-5 pt-5">
            <h5 className="text-center text-white">Programs</h5>
            <h1 className="text-center text-warning">Our Programs</h1>
            <div className="programs-container py-5">
                {
                    programs.map(singleProgram => <SingleProgram key={singleProgram.id} singleProgram={singleProgram}></SingleProgram>)
                }
            </div>
        </div>
    );
};

export default Programs;