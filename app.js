module.exports = app => {
  app.beforeStart(function *() {
      console.log('同步数据库')
  })
  app.sequelize.sync({force:true})

}
