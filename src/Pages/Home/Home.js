import React from 'react';
import HomeItems from './HomeItems/HomeItems';
import Slider from './Slider/Slider'
import Process from './Process/Process'
import Benefit from './Benefit/Benefit'
const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <HomeItems></HomeItems>
            <Process></Process>
            <Benefit></Benefit>
           
        </div>
    );
};

export default Home;