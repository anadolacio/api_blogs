const PostService = require('../services/PostService');

const getAllPosts = async (req, res) => {
    try { 
        const allPosts = await PostService.getAllPosts();
        // console.log(allPosts);
        return res.status(200).json(allPosts);
    } catch (error) {
        // console.log(error);
        return res.status(500).json({ message: 'Error' });
}
};

const getPostById = async (req, res) => {
    try { 
        const { id } = req.params;
        const post = await PostService.getPostById(id);

        if (!post) return res.status(404).json({ message: 'Post does not exist' });

        return res.status(200).json(post);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Error' });
}
};

module.exports = {
    getAllPosts,
    getPostById,
};
