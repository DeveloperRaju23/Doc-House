import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import TimeDoc from '../TimeTableDoc/TimeDoc';
import Reviews from '../Reviews/Reviews';
import Contact from '../Contact/Contact';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <TimeDoc></TimeDoc>
            <Reviews></Reviews>
            <Contact></Contact>
        </div>
    );
};

export default Home;