/**
 * Created by frank on 2017/3/8.
 */
const _ = require('lodash')
module.exports = app => {
  class SoundService extends app.Service {
    *findAndCount (condition) {
      let {ctx} = this
      let cond = _.assign({offset: 0, limit: 20, order: ['id']}, condition)
      return ctx.model.sound.findAndCountAll(cond)
    }
  }
  return SoundService
}
