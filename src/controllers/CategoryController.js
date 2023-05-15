const CategoryService = require('../services/CategoryService');

const createCategory = async (req, res) => {
    try {
        const { name } = req.body;

        if (!name) return res.status(400).json({ message: '"name" is required' });
       
        const category = await CategoryService.createCategory(name);
        return res.status(201).json(category);
    } catch (error) {
        return res.status(500).json({ message: 'Error - category not created' });
    }
};

const getAllCategories = async (_req, res) => {
    try { 
        const allCategories = await CategoryService.getAllCategories();
        return res.status(200).json(allCategories);
    } catch (error) {
        return res.status(500).json({ message: 'Error' });
}
};

module.exports = {
    createCategory,
    getAllCategories,
};