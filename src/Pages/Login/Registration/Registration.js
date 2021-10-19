import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import register from '../../../images/register.png';


const Registration = () => {
    const { handleRegistration, handleEmailChange, handlePasswordChange } = useAuth();
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
                            Have you an Account? Please Sign In!
                        </NavLink>
                    </p>

                    <div onSubmit={handleRegistration} className="text-center">

                        <input onBlur={handleEmailChange} className="input-field border-bottom border-0 w-50 " type="email" name="email" placeholder="Email" required />
                        <br /> <br />
                        <input onBlur={handlePasswordChange} className="input-field border-bottom border-0 w-50" type="password" name="password" placeholder="Password" required />
                        <br /> <br />
                        <input
                            className="mt-5 w-50 btn btn-success m-auto"
                            type="submit"
                            value="Sign Up" />

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Registration;