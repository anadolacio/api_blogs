const PostCategorySchema = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define('PostCategory', {
        postId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        categoryId: { type: DataTypes.INTEGER },
    }, {
        timestamps: false,
        tableName: 'posts_categories',
        underscored : true,
    })   
    
    PostCategory.associate = (models) => {
        models.BlogPost.belongsToMany(
            models.Category, { 
                foreignKey: 'post_id',
                otherKey: 'category_id',
                through: PostCategory,
                as: 'category'});
            models.Category.belongsToMany(
                    models.BlogPost, { 
                        foreignKey: 'category_id',
                        otherKey: 'post_id',
                        through: PostCategory,
                        as: 'blogPost'});
    }
    return PostCategory;
};

module.exports = PostCategorySchema;