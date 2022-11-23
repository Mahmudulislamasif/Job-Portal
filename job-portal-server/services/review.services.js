const Review = require('../models/Reviews');
exports.getReviewServices=async()=>{
    const blogs=await Review.find({})
    return blogs
}
exports.createReviewServices=async(data)=>{
    const blog=await Review.create(data)
    return blog
}

