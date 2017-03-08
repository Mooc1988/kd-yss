/**
 * Created by frank on 2017/3/8.
 */

module.exports = app => {
  class CategoryService extends app.Service {
    * find () {
      const Category = this.ctx.model.category
      return yield Category.findAll({order: [['order', 'DESC']]})
    }
  }
  return CategoryService
}