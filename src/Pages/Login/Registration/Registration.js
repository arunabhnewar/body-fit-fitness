import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import register from '../../../images/register.png';


const Registration = () => {
    const { allContext } = useAuth();
    const { newRegister, getName, getEmail, getPassword } = allContext;


    return (
        <div className="container my-5 pb-3">
            <div className="row ">
                <div className="col-md-6 col-sm-12">
                    <div className="img">
                        <img className="img-fluid w-75" src={register} alt="" />
                    </div>
                </div>

                <div className="col-sm-12 col-md-6">
                    <h2 className="text-success text-center">Sign Up</h2>

                    <p className="text-center mb-5">
                        <NavLink className="text-decoration-none text-success" to="/login">
                            Do you have an Account? Please Sign In!!
                        </NavLink>
                    </p>


                    <form onSubmit={newRegister} className="text-center">

                        <FontAwesomeIcon icon={faUser} /> <input onBlur={getName} className="input-field border-bottom border-0 w-50" type="text" name="name" placeholder="Name" required />
                        <br /> <br />
                        <FontAwesomeIcon icon={faEnvelope} /> <input onBlur={getEmail} className="input-field border-bottom border-0 w-50" type="email" name="email" placeholder="Email" required />
                        <br /> <br />
                        <FontAwesomeIcon icon={faLock} /> <input onBlur={getPassword} className="input-field border-bottom border-0 w-50" type="password" name="password" placeholder="Password" required />
                        <br /> <br />
                        <input
                            className="mt-5 w-50 btn btn-success m-auto"
                            type="submit"
                            value="Sign Up" />

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registration;
