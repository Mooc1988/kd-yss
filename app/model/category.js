'use strict';

module.exports = function (sequelize) {
  const Sequelize = sequelize.Sequelize
  return sequelize.define('category', {
    // 名称
    name: {
      type: Sequelize.STRING(128),
    },
    // 开启
    enable: {
      type: Sequelize.BOOLEAN,
    },
    // 排序
    order: {
      type: Sequelize.INTEGER,
    }
  }, {
    classMethods: {
      associate (model) {
        const {category, topic, book, bookCategory, categoryTopic} = model
        category.belongsToMany(topic, {through: categoryTopic})
        category.belongsToMany(book, {through: bookCategory})
      }
    }
  })
};
