Module.exports = (sequelize, DataTypes) => {
  Const User = sequelize.define(‘User’, {
    User_id: {
      Type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    Username: DataTypes.STRING,
    Email: DataTypes.STRING,
    Password: DataTypes.STRING,
    Created_at: DataTypes.DATE,
    Updated_at: DataTypes.DATE
  }, {
    Timestamps: false
  });

  User.associate = function(models) {
    User.hasMany(models.Expense, { foreignKey: ‘user_id’ });
    User.hasMany(models.Category, { foreignKey: ‘user_id’ });
    User.hasMany(models.PaymentMethod, { foreignKey: ‘user_id’ });
    User.hasMany(models.Budget, { foreignKey: ‘user_id’ });
  };

  Return User;
};
