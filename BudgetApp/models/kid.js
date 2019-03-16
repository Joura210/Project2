module.exports = function(sequelize, DataTypes) {
  var Kid = sequelize.define("Kid", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },

    parentID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    rewardName: {
      type: DataTypes.STRING,
      allowNull: false
    },

    rewardValue: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
  return Kid;
};
