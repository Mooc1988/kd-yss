'use strict';

module.exports = appInfo => {
  const config = {};

  // should change to your own
  config.keys = appInfo.name + '123456';
  config.sequelize = {
    port: '5432',
    host: 'localhost',
    username: 'frank',
    password: '',
    database: 'kd-book',
    dialect: 'postgres', // support: mysql, mariadb, postgres, mssql
  }
  return config;
}
