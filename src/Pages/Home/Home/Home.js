import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Information from '../Information/Information';
import Packages from '../Packages/Packages';
import Programs from '../Programs/Programs';
import Services from '../Services/Services';
import Stories from '../Stories/Stories';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <Banner />
            <Information />
            <About />
            <Services />
            <Programs />
            <Stories />
            <Packages />
        </div>
    );
};

export default Home;