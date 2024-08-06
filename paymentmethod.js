Module.exports = (sequelize, DataTypes) => {
    Const PaymentMethod = sequelize.define(‘PaymentMethod’, {
      Payment_method_id: {
        Type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      User_id: DataTypes.INTEGER,
      Payment_method_name: DataTypes.STRING,
      Created_at: DataTypes.DATE,
      Updated_at: DataTypes.DATE
    }, {
      Timestamps: false
    });
  
    PaymentMethod.associate = function(models) {
      PaymentMethod.belongsTo(models.User, { foreignKey: ‘user_id’ });
    };
  
    Return PaymentMethod;
  };
  