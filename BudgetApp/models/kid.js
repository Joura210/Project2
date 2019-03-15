module.exports = function(sequelize, DataTypes) {
  var Kid = sequelize.define("Kid", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },

    parentID: {
      type: DataTypes.INTERGER,
      allowNull: false
    }
  });
  return Kid;
};
