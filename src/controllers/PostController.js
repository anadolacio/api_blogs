const PostService = require('../services/PostService');

const getAllPosts = async (req, res) => {
    try { 
        const allPosts = await PostService.getAllPosts();
        console.log(allPosts);
        return res.status(200).json(allPosts);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Error' });
}
};

const getPostById = async (req, res) => {
    try { 
        const post = await PostService.getPostById();
        if (!post || post === null) return res.status(404).json('Post does not exist');

        return res.status(200).json(post);
    } catch (error) {
        return res.status(500).json({ message: 'Error' });
}
};

module.exports = {
    getAllPosts,
    getPostById,
};
