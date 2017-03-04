'use strict'

module.exports = app => {
  console.log(app.env)
  app.beforeStart(function * () {
    console.log('同步数据库')
  })
  app.sequelize.sync({force: true})
}
