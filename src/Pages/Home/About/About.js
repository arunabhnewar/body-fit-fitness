import React from 'react';
import about from '../../../images/about.jpg';

const About = () => {
    return (
        <div className="container-fluid my-5 p-0">
            <div className="row mx-auto">
                <div className="col-md-6 col-sm-12 my-5 pt-5">
                    <div>
                        <img className="img-fluid w-100 " src={about} alt="" />
                    </div>
                </div>

                <div className="col-md-6 col-sm-12 my-5 pt-5 pb-5">
                    <div className="text-center">
                        <h2 className="text-white fw-bolder pt-5">WELCOME TO <span className="text-warning">BODY FIT</span></h2>
                        <p className="text-muted mt-3 text-center ">There are no judgments here – No too much or not enough. No glares of disapproval. <br /> Here we keep open minds. We are nurturers. We seek only to encourage, empower and  <br /> entertain. What we are is a diverse community; what we have is a culture of fun; what  <br /> there is, is room for everyone: all kinds of people with all kinds of goals who’ve chosen to  <br /> come reach them with us.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;