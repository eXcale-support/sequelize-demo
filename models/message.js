module.exports = function(sequelize, DataTypes) {
  return sequelize.define("Message", {
        author: DataTypes.STRING,
        content: DataTypes.STRING
      });
}
