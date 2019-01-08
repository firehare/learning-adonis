'use strict'

class PostController {
  index() {
    return `List of posts.`
  }
  show({
    params
  }) {
    return `You're watching post ${ params.id }.`
  }
  store() {
    return `Post has been create.`
  }
  update({
    params
  }) {
    return `Post ${params.id} has been updated.`
  }
  destroy({
    params
  }) {
    return `Post ${params.id} has been removed.`
  }
  create() {
    return `create post.`
  }
  edit({
    params
  }) {
    return `Editing post ${params.id}.`
  }
}

module.exports = PostController
