const { BlogPost, Category, User } = require('../models');

const createBlogPost = async (title, content, categoryId) => { 
    const blogPost = await BlogPost.create({ title, content, categoryId });
    return blogPost;
};

const getAllPosts = async () => { 
    const allPosts = await BlogPost.findAll({
    include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, 
            as: 'categories', 
        },
    ],
});
// console.log(allPosts);
return allPosts;
};

const getPostById = async (id) => { 
    await BlogPost.findOne({
    where: { id },
    include: [
        { model: User, as: 'user' },
        { model: Category, as: 'categories' },
    ],
});
};

module.exports = {
    createBlogPost,
    getAllPosts,
    getPostById,
};