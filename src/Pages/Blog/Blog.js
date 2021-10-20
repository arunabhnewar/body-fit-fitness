import React from 'react';
import './Blog.css';
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';
import blog1 from '../../images/blog/blog-1.png';
import blog2 from '../../images/blog/blog-2.png';
import blog3 from '../../images/blog/blog-3.png';
import blog4 from '../../images/blog/blog-4.png';
import blog5 from '../../images/blog/blog-5.png';
import blog6 from '../../images/blog/blog-6.png';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons';

const Blog = () => {
    return (
        <div id="blog" className="container-fluid">
            <Zoom left cascade>
                <h5 className="text-center text-white pt-5">Blog</h5>
                <h1 className="text-center text-warning pt-2">Fitness Blog</h1>
            </Zoom>

            <div className="row mt-5">

                <Bounce left cascade>
                    <div className="col-sm-12 col-md-4 mx-auto">
                        <div className="card mx-auto mb-5" style={{ width: "18rem" }}>
                            <img src={blog1} class="card-img-top" alt="" />
                            <div className="card-body blog-card ">
                                <span className="text-muted">Oct 13, 2021 Admin</span> <FontAwesomeIcon className="text-muted" icon={faCommentAlt} /> <span className="text-muted">573</span>
                                <h5 className="card-title text-warning pt-2">Best Core Exercises</h5>
                                <p className="card-text text-muted">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Button href="#" className="btn btn-warning">Watch Video</Button>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-4 mx-auto">
                        <div className="card mb-5 mx-auto" style={{ width: "18rem" }}>
                            <img src={blog2} class="card-img-top" alt="" />
                            <div className="card-body blog-card ">
                                <span className="text-muted">Oct 8, 2021 Admin</span> <FontAwesomeIcon className="text-muted" icon={faCommentAlt} /> <span className="text-muted">832</span>
                                <h5 className="card-title text-warning pt-2">Breaking Muscle</h5>
                                <p className="card-text text-muted">The longtime trainer understands that a successful fitness regimen boils down to finding what works for you.</p>
                                <Button href="#" className="btn btn-warning">Watch Video</Button>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-4 mx-auto">
                        <div className="card mx-auto mb-5" style={{ width: "18rem" }}>
                            <img src={blog3} class="card-img-top" alt="" />
                            <div className="card-body blog-card ">
                                <span className="text-muted">Oct 13, 2021 Admin</span> <FontAwesomeIcon className="text-muted" icon={faCommentAlt} /> <span className="text-muted">10</span>
                                <h5 className="card-title text-warning pt-2">Nerd Fitness</h5>
                                <p className="card-text text-muted">Nerd Fitness is a comprehensive resource that’s motivating and inspiring, and really change your life.</p>
                                <Button href="#" className="btn btn-warning">Watch Video</Button>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-4 mx-auto">
                        <div className="card mb-5 mx-auto" style={{ width: "18rem" }}>
                            <img src={blog4} class="card-img-top" alt="" />
                            <div className="card-body blog-card ">
                                <span className="text-muted">Sept 24, 2021 Admin</span> <FontAwesomeIcon className="text-muted" icon={faCommentAlt} /> <span className="text-muted">800</span>
                                <h5 className="card-title text-warning pt-2">Fit Bottomed Girl</h5>
                                <p className="card-text text-muted">Today, more than ever, there is a renewed focus and awareness on health and fitness.</p>
                                <Button href="#" className="btn btn-warning">Watch Video</Button>
                            </div>
                        </div>
                    </div>


                    <div className="col-sm-12 col-md-4 mx-auto">
                        <div className="card mb-5 mx-auto" style={{ width: "18rem" }}>
                            <img src={blog5} class="card-img-top" alt="" />
                            <div className="card-body blog-card ">
                                <span className="text-muted">Oct 13, 2021 Admin</span> <FontAwesomeIcon className="text-muted" icon={faCommentAlt} /> <span className="text-muted">10</span>
                                <h5 className="card-title text-warning pt-2">Eat Diet Food</h5>
                                <p className="card-text text-muted">Many working women, may struggle with finding time to exercise, seeing results that to stick with your food.</p>
                                <Button href="#" className="btn btn-warning">Watch Video</Button>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-4 mx-auto">
                        <div className="card mb-5 mx-auto" style={{ width: "18rem" }}>
                            <img src={blog6} class="card-img-top" alt="" />
                            <div className="card-body blog-card ">
                                <span className="text-muted">Sept 18, 2021 Admin</span> <FontAwesomeIcon className="text-muted" icon={faCommentAlt} /> <span className="text-muted">1017</span>
                                <h5 className="card-title text-warning pt-2">Born Fitness</h5>
                                <p className="card-text text-muted">Finding the discipline to not only start training but to also stick with it is often the hard part.</p>
                                <Button href="#" className="btn btn-warning">Watch Video</Button>
                            </div>
                        </div>
                    </div>

                </Bounce>

            </div>
        </div>
    );
};

export default Blog;