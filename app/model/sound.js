'use strict'
// 声音模型
module.exports = function (sequelize) {
  const {STRING, INTEGER} = sequelize.Sequelize
  return sequelize.define('sound', {
    // 名称
    name: {
      type: STRING(128),
      allowNull: false,
      unique: true
    },
    url: {
      type: STRING(512),
      allowNull: false,
      unique: true
    },
    // 阅读量
    viewCount: {
      type: INTEGER.UNSIGNED,
      defaultValue: 0
    },
    // 下载量
    downloadCount: {
      type: INTEGER.UNSIGNED,
      defaultValue: 0
    }
  }, {
    classMethods: {
      associate (model) {
        let {sound, album} = model
        sound.belongsTo(album)
      }
    }
  })
}
