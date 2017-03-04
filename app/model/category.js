'use strict'
// 分类模型
module.exports = function (sequelize) {
  const {STRING, BOOLEAN, INTEGER} = sequelize.Sequelize
  return sequelize.define('category', {
    // 专题名称
    name: {
      type: STRING(128),
      allowNull: false,
      unique: true
    },
    // 编号
    code: {
      type: STRING(128),
      allowNull: false
    },
    // 开启
    enable: {
      type: BOOLEAN,
      defaultValue: true
    },
    // 排序
    order: {
      type: INTEGER.UNSIGNED,
      defaultValue: 1
    }
  }, {
    classMethods: {
      associate ({category, album}) {
        category.hasMany(album)
      }
    }
  })
}
