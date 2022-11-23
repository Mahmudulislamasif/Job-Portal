const Blog = require('../models/Blogs');
exports.getBlogServices=async()=>{
    const blogs=await Blog.find({})
    return blogs
}
exports.createBlogServices=async(data)=>{
    const blog=await Blog.create(data)
    return blog
}

