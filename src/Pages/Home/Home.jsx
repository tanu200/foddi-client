import React from 'react';
import Banner from './Banner';
import Categories from './Categories';
import SpacialDishes from './SpacialDishes';
import Testimonial from './Testimonial';
import OurServices from './OurServices';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <SpacialDishes></SpacialDishes>
            <Testimonial></Testimonial>
            <OurServices></OurServices>
        </div>
    );
};

export default Home;