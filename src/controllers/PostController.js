const PostService = require('../services/PostService');

const createBlogPost = async (req, res) => {
    try {
        const { title, content, categoryId } = req.body;
       
        const postBlogCreated = await PostService.createBlogPost(title, content, categoryId);
        
        // const tokenGenerate = createToken(email);

        return res.status(201).json(postBlogCreated);
    } catch (error) {
        return res.status(500).json({ message: 'Error' });
    }
};

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

const deletePost = async (req, res) => {
    try { 
        const { id } = req.params;
        const postToBeDeleted = await PostService.deletePost(id);

        if (!postToBeDeleted) return res.status(404).json({ message: 'Post does not exist' });

        return res.status(204).end();
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Error' });
}
};

module.exports = {
    getAllPosts,
    getPostById,
    createBlogPost,
    deletePost,
};
