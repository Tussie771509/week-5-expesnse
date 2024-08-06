Module.exports = (sequelize, DataTypes) => {
    Const Expense = sequelize.define(‘Expense’, {
      Expense_id: {
        Type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      User_id: DataTypes.INTEGER,
      Category_id: DataTypes.INTEGER,
      Amount: DataTypes.DECIMAL,
      Date: DataTypes.DATE,
      Description: DataTypes.STRING,
      Created_at: DataTypes.DATE,
      Updated_at: DataTypes.DATE
    }, {
      Timestamps: false
    });
  
    Expense.associate = function(models) {
      Expense.belongsTo(models.User, { foreignKey: ‘user_id’ });
      Expense.belongsTo(models.Category, { foreignKey: ‘category_id’ });
    };
  
    Return Expense;
  };
  