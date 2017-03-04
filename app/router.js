'use strict'

module.exports = app => {
  app.get('/', 'home.index')

  // // 获取书籍列表
  // app.get('/api/books', 'books.list')
  // // 获取指定书籍
  // app.get('/api/books/:bookId', 'books.findById')
  // // 创建书籍
  // app.post('/api/books', 'books.create')
  // // 修改书籍
  // app.put('/api/books/:bookId', 'books.modifyById')
  // // 删除书籍
  // app.delete('/api/books/:bookId', 'books.deleteById')
  //
  // // 获取分类列表
  // app.get('/api/categories', 'categories.list')
  // // 获取指定分类
  // app.get('/api/categories/:categoryId', 'categories.findById')
  // // 创建分类
  // app.post('/api/categories', 'categories.create')
  // // 修改分类
  // app.put('/api/categories/:categoryId', 'categories.modifyById')
  // // 删除分类
  // app.delete('/api/categories/:categoryId', 'categories.deleteById')
  //
  // // 获取书架列表
  // app.get('/api/bookshelves', 'bookshelves.list')
  // // 获取指定书架
  // app.get('/api/bookshelves/:bookshelfId', 'bookshelves.findById')
  // // 创建书架
  // app.post('/api/bookshelves', 'bookshelves.create')
  // // 修改书架
  // app.put('/api/bookshelves/:bookshelfId', 'bookshelves.modifyById')
  // // 删除书架
  // app.delete('/api/bookshelves/:bookshelfId', 'bookshelves.deleteById')
}
