Module.exports = (sequelize, DataTypes) => {
    Const Category = sequelize.define(‘Category’, {
      Category_id: {
        Type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      User_id: DataTypes.INTEGER,
      Category_name: DataTypes.STRING,
      Created_at: DataTypes.DATE,
      Updated_at: DataTypes.DATE
    }, {
      Timestamps: false
    });
  
    Category.associate = function(models) {
      Category.belongsTo(models.User, { foreignKey: ‘user_id’ });
      Category.hasMany(models.Expense, { foreignKey: ‘category_id’ });
      Category.hasMany(models.Budget, { foreignKey: ‘category_id’ });
    };
  
    Return Category;
  };
  