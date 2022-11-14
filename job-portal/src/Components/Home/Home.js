import React from 'react';
import Banner from './Banner';
import BussinessSummary from './BussinessSummary';
import FilterJobs from './FilterJobs';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner/>
            <FilterJobs/>
            <BussinessSummary/>
            <Reviews/>
        </div>
    );
};

export default Home;