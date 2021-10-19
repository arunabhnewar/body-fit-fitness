import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import login from '../../../images/login-2.png';


const Login = () => {
    const { user, signInUsingGoogle, handleLogin, error, handleEmailChange, handlePasswordChange, handleResetPassword } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';
    console.log(user);

    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url)
            })
    }

    return (
        <div className="container my-5 pb-3">
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <div className="img">
                        <img className="img-fluid w-75" src={login} alt="" />
                    </div>
                </div>

                <div className="col-sm-12 col-md-6">
                    <h2 className="text-success text-center">Sign In</h2>

                    <p className="text-center mb-5">
                        <NavLink className="text-decoration-none text-success" to="/registration">
                            Are you New? Please Sign Up!
                        </NavLink>
                    </p>

                    <div onSubmit={handleLogin} className="text-center">
                        <p className="text-danger">{error}</p>
                        <input className="input-field border-bottom border-0 w-50" type="text" name="first name" placeholder="First name" />
                        <br /> <br />
                        <input className="input-field border-bottom border-0 w-50" type="text" name="last name" placeholder="Last name" />
                        <br /> <br />
                        <input className="input-field border-bottom border-0 w-50" type="phone" name="phone" placeholder="Phone" />
                        <br /> <br />
                        <input onBlur={handleEmailChange} className="input-field border-bottom border-0 w-50" type="email" name="email" placeholder="Email" required />
                        <br /> <br />
                        <input onBlur={handlePasswordChange} className="input-field border-bottom border-0 w-50" type="password" name="password" placeholder="Password" required />
                        <br /> <br />
                        <input
                            className="mt-5 w-50 btn btn-success m-auto"
                            type="submit"
                            value="Login" />
                        <br /> <br />

                        <button onClick={handleGoogleSignIn} type="submit" className="btn btn-success me-2"> <FontAwesomeIcon icon={faGoogle} /> Google Sign In</button>

                        <button onClick={handleResetPassword} type="submit" className="btn btn-warning"> <FontAwesomeIcon icon={faKey} /> Reset Password</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;