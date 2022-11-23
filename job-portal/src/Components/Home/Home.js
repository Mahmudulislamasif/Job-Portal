import React from 'react';
import GetBlogs from '../Blogs/GetBlogs';
import Banner from './Banner';
import BussinessSummary from './BussinessSummary';
import Contact from './Contact';
import FilterJobs from './FilterJobs';
import Reviews from './Reviews';
import Subscribe from './Subscribe';

const Home = () => {
    return (
        <div>
            <Banner/>
            <FilterJobs/>
            <BussinessSummary/>
            <GetBlogs/>
            <Subscribe/>
            <Reviews/>
            <Contact/>
        </div>
    );
};

export default Home;