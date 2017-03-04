'use strict'
// 专辑模型
module.exports = function (sequelize) {
  const {STRING, BOOLEAN, INTEGER, ARRAY} = sequelize.Sequelize
  return sequelize.define('album', {
    // 名称
    name: {
      type: STRING(128),
      allowNull: false,
      unique: true
    },
    // 开启
    enable: {
      type: BOOLEAN,
      defaultValue: true
    },
    // 标签
    tags: {
      type: ARRAY(STRING(128))
    },
    // 用户查看次数
    viewCount: {
      type: INTEGER.UNSIGNED,
      defaultValue: 1
    },
    // 排序
    order: {
      type: INTEGER.UNSIGNED,
      defaultValue: 1
    }
  }, {
    classMethods: {
      associate (model) {
        const {album, category, sound} = model
        album.belongsTo(category)
        album.hasMany(sound)
      }
    }
  })
}
