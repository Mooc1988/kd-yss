'use strict'

module.exports = function (sequelize) {
  const Sequelize = sequelize.Sequelize
  return sequelize.define('bookshelf', {
    // 名称
    name: {
      type: Sequelize.STRING(128)
    }
  }, {
    classMethods: {
      associate (model) {
        let {book, bookshelf, bookBookShelf} = model
        // bookshelf.belongsToMany(book, {through: bookBookShelf})
      }
    }
  })
}
