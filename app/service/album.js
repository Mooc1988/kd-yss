/**
 * Created by frank on 2017/3/8.
 */
const _ = require('lodash')
module.exports = app => {
  class AlbumService extends app.Service {
    *findAndCount (condition) {
      let {album} = this.ctx.model
      let cond = _.assign({offset: 0, limit: 20, order: ['order', 'DESC']}, condition)
      return album.findAndCountAll(cond)
    }
  }
  return AlbumService
}
