'use strict'

class PostController {
  index ({ view }) {
    const pageTitle = 'List of posts'
    const user = {
      name: 'wanghao'
    }
    const entities = [
      { id: 1, title: 'Leom', content: '这是柠檬！' },
      { id: 2, title: 'Apple', content: '这是苹果！' },
      { id: 3, title: 'Banana', content: '这是香蕉！' }
    ]
    return view.render('posts.index', { pageTitle, user , entities})
  }
}

module.exports = PostController
