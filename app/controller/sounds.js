/**
 * Created by frank on 2017/3/8.
 */
const _ = require('lodash')

module.exports = app => {
  class SoundController extends app.Controller {
    *findByCategory () {
      const {ctx, service} = this
      const {albumId} = ctx.params
      const condition = _.assign({where: {albumId}}, ctx.query)
      ctx.body = yield service.sound.findAndCount(condition)
    }
  }
  return SoundController
}
