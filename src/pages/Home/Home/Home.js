import React from 'react';
import Banner from '../Banner/Banner';
import Branch from '../Branch/Branch';
import Packages from '../Packages/Packages';
import Representative from '../Representative/Representative';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Packages></Packages>
            <Branch></Branch>
            <Representative></Representative>
        </div>
    );
};

export default Home;