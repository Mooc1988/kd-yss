'use strict'

module.exports = app => {
  app.get('/', 'home.index')
  app.get('/api/categories', 'categories.list')
  app.get('/api/categories/:categoryId/albums', 'albums.findByCategory')
  app.get('/api/albums/:albumId/sounds', 'sounds.findByCategory')

  // // 获取书籍列表
  // app.get('/api/books', 'books.list')
}
