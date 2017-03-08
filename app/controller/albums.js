/**
 * Created by frank on 2017/3/8.
 */
const _ = require('lodash')

module.exports = app => {
  class AlbumController extends app.Controller {
    *findByCategory () {
      const {ctx, service} = this
      const {categoryId} = ctx.params
      const condition = _.assign({where: {categoryId}}, ctx.query)
      ctx.body = yield service.album.findAndCount(condition)
    }
  }
  return AlbumController
}
