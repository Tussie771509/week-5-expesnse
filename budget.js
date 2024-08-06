Module.exports = (sequelize, DataTypes) => {
    Const Budget = sequelize.define(‘Budget’, {
      Budget_id: {
        Type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      User_id: DataTypes.INTEGER,
      Category_id: DataTypes.INTEGER,
      Amount: DataTypes.DECIMAL,
      Start_date: DataTypes.DATE,
      End_date: DataTypes.DATE,
      Created_at: DataTypes.DATE,
      Updated_at: DataTypes.DATE
    }, {
      Timestamps: false
    });
  
    Budget.associate = function(models) {
      Budget.belongsTo(models.User, { foreignKey: ‘user_id’ });
      Budget.belongsTo(models.Category, { foreignKey: ‘category_id’ });
    };
  
    Return Budget;
  };
  