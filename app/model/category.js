'use strict'
// 分类模型
module.exports = function (sequelize) {
  const {STRING, BOOLEAN, INTEGER} = sequelize.Sequelize
  return sequelize.define('category', {
    id: {
      primaryKey: true,
      type: STRING(128)
    },
    // 专题名称
    title: {
      type: STRING(128),
      allowNull: false,
      unique: true
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
    },
    tableName: 'category',
    timestamps: false
  })
}
