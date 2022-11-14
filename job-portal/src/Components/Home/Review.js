import React from 'react';
import { ImQuotesLeft } from 'react-icons/im';
import { ImQuotesRight } from 'react-icons/im';
import { BsMoonStarsFill } from 'react-icons/bs';
const Review = ({testimonial}) => {
    const {image,description}=testimonial;
    return (
        <div class="card w-96  hover:border-solid hover:border-2 hover:border-indigo-600  bg-[#f7f7f7] shadow-lg container mx-auto mb-16">
            <BsMoonStarsFill className="text-3xl m-4 text-primary"/>
            <figure><img src={image} alt="Shoes" className="mt-5" /></figure>
            <div class="card-body">
                <div className="flex justify-between">
                <ImQuotesLeft className="text-2xl"/>
                <ImQuotesRight className="text-2xl"/>
                </div>
                <p className="text-justify text-sm">{description}</p>
            </div>
            </div>
    );
};

export default Review;