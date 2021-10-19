import React from 'react';
import './Banner.css';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/rsz_2banner-1.png';
import banner2 from '../../../images/banner/rsz_1banner-2.png';
import banner3 from '../../../images/banner/rsz_1banner-3.png';

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block banner-img img-fluid"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1 className="text-warning">Training Hard</h1>
                        <h5 className="text-warning">Be somebody, nobody thought you could be</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block banner-img"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h1 className="text-white">Challenge Yourself</h1>
                        <h5>The only place where success comes before work is in the dictionary</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block banner-img"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1 className="text-warning">Make Yourself a Priority</h1>
                        <h5 className="text-warning">You have to think it before you can do it. The mind is what makes it all possible</h5>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;