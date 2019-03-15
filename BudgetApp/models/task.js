module.exports = function(sequelize, DataTypes) {
  var Task = sequelize.define("Task", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },

    kidId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    value: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
  return Task;
};
