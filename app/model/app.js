'use strict'

module.exports = function (sequelize) {
  const {STRING, BOOLEAN} = sequelize.Sequelize
  return sequelize.define('app', {
    // 名称
    name: {
      type: STRING(128),
      allowNull: false,
      unique: true
    },
    // 评价开关
    enableComment: {
      type: BOOLEAN,
      defaultValue: false
    }
  }, {
    tableName: 'app'
  })
}
