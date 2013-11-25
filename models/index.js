var Sequelize = require('sequelize')
var config = require(__dirname + '/../config/database')
var sequelize = new Sequelize(
    config.database,
    config.user,
    config.password,
    {
      host: config.host,
      port: config.port
    }
  );

global.db = {
    Sequelize: Sequelize,
    sequelize: sequelize,
    Message:      sequelize.import(__dirname + '/message')
}

module.exports = global.db;
