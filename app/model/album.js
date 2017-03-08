'use strict'
// 专辑模型
module.exports = function (sequelize) {
  const {STRING, BOOLEAN, INTEGER, ARRAY, DATEONLY} = sequelize.Sequelize
  return sequelize.define('album', {
    id: {
      primaryKey: true,
      type: INTEGER
    },
    // 名称
    title: {
      type: STRING(128),
      allowNull: false
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
    // 最后更新时间
    lastUpdate: {
      type: DATEONLY
    },
    // 封面大图
    smallImage: {
      type: STRING,
      allowNull: false
    },
    // 封面小图
    bigImage: {
      type: STRING,
      allowNull: false
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
    },
    tableName: 'album',
    timestamps: false
  })
}
