const CategoryService = require('../models');

const createCategory = async (name) => { 
    const category = await CategoryService.create({ name });
    return category;
};

const getAllCategories = async () => { 
    const categories = await CategoryService.findAll();
    return categories;
};

module.exports = { 
    createCategory,
    getAllCategories,
};