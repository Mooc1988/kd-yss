/**
 * Created by frank on 2017/3/8.
 */

module.exports = app => {
  class CategoryController extends app.Controller {
    *list () {
      const {ctx, service} = this
      ctx.body = yield service.category.find()
    }
  }
  return CategoryController
}