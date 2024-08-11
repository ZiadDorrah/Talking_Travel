import React from 'react';
import Hero from '../../components/homePage/Hero';
import Featured from '../../components/homePage/Featured';
import Adventures from './../../components/homePage/Adventures';
import Community from './../../components/homePage/Community';

const Home = () => {
    return (
        <>
            <Hero />
            <Featured />
            <Adventures />
            <Community />
        </>
    );
};

export default Home;
