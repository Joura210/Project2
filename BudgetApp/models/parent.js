module.exports = function(sequelize, DataTypes) {
  var Parent = sequelize.define("Parent", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },

    userName: {
      type: DataTypes.STRING,
      allowNull: false
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false
    },

    pin: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
  return Parent;
};
