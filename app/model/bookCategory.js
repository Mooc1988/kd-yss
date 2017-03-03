'use strict'

module.exports = function (sequelize) {
  const Sequelize = sequelize.Sequelize
  return sequelize.define('bookCategory', {
    // 排序
    order: {
      type: Sequelize.INTEGER.UNSIGNED
    }
  })
}
