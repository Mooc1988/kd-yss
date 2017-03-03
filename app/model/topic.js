'use strict'

module.exports = function (sequelize) {
  const Sequelize = sequelize.Sequelize
  return sequelize.define('topic', {
    // 名称
    name: {
      type: Sequelize.STRING(128)
    },
    // 开启
    enable: {
      type: Sequelize.BOOLEAN
    },
    // 排序
    order: {
      type: Sequelize.INTEGER
    }
  }, {
    classMethods: {
      associate ({category, topic, categoryTopic}) {
        topic.belongsToMany(category, {through: categoryTopic})
      }
    }
  })
}
