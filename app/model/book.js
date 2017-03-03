'use strict'

module.exports = function (sequelize) {
  const Sequelize = sequelize.Sequelize
  return sequelize.define('book', {
    // 名称
    name: {
      type: Sequelize.STRING(128)
    },
    // 作者
    author: {
      type: Sequelize.STRING(30)
    },
    // 简介
    brief: {
      type: Sequelize.STRING(2048)
    }
  }, {
    classMethods: {
      associate (model) {
        let {book, bookshelf, category, bookBookshelf, bookCategory} = model
        book.belongsToMany(bookshelf, {through: bookBookshelf})
        book.belongsToMany(category, {through: bookCategory})
      }
    }
  })
}
