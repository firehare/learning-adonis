'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

const delay = (data,time) =>{
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data)
    }, time)
  })
}
// Route.get('/posts',  ({ request }) =>   request.get())
// Route.get('/posts', ({ request }) => request.headers())
// Route.get('/posts', ({ request }) => request.header('user-agent'))
// Route.get('/posts', ({ request , response }) => {
//   // response.header( 'Content-Type', 'text/plain' )
//   response.type('text/plain')
//   // return '<h1>List of Posts.</h1>'
//   response.cookie('theme', 'dark')
//   response.clearCookie('theme')
//   // return request.cookies()
//   return request.cookie('theme', 'light')
// })
// Route.get('/posts', ({ response }) => {
//   response.send('List of Post.')
// })
Route.get('/list-of-posts', ({ response }) => {
  // response.redirect('/posts', true, 301)
  response.route('list-of-posts')
})

Route.get('/list-of-food-posts', ({ response }) => {
  // response.redirect('/posts', true, 301)
  response.route('list-of-posts', { category: 'food' })
})

Route.get('/posts/:category?', async ({ params }) => {
  const data = await delay(
    `List of ${ params.category || 'default' } Post.`,
    3000
  )
  // response.send('List of Post.')
  return data
}).as('list-of-posts')
// Route.post('/posts', ({ request }) => request.post())
// Route.post('/posts', ({ request }) => request.all())
// Route.post('/posts', ({ request }) => request.only(["title", "content","redirect"]))
// Route.post('/posts', ({ request }) => request.except(["title", "content"]))
// Route.post('/posts', ({ request }) => request.input("status", "draft"))
// Route.post('/posts', ({ request }) => request.collect(["title", "content"]))