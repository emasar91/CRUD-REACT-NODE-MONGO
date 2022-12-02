const Koa = require('koa')
const Router = require('koa-router')
const cors = require('@koa/cors')
const morgan = require('koa-morgan')
const bodyParser = require('koa-body')
const serve = require('koa-static')
const mount = require('koa-mount')
const path = require('path')
const fs = require('fs')

const errorHandler = require('./src/errors/errorHandler')
const statusRouter = require('./src/diagnostics/statusRouter')

/* API Routers */
const apiRouters = require('./src/public/routers')
const { stripIndent } = require('common-tags')

// You will have 3 Koa Apps (client, server, client + server)

/**
 * Koa app (client + server)
 */
const app = new Koa()

/**
 * Koa client (React App)
 */
const client = new Koa()
const router = new Router()

function index(ctx) {
  ctx.body = fs.readFileSync(
    path.resolve(path.join('client/build', 'index.html')), // You should specify where will be the client app
    'utf8'
  )
}

router.get('/*', index)
client.use(serve(path.resolve('client/build'))) // You should specify where you want to serve your client app
client.use(router.routes())

/**
 * Koa server
 */
const server = new Koa()
const config = require('./src/init/config')()
/**
 * Services
 */
server.use(bodyParser())
server.use(errorHandler)
server.use(morgan('dev'))
server.use(cors())

server.use(apiRouters.routes())
server.use(statusRouter.routes())
server.use(statusRouter.allowedMethods())

app.use(mount('/api', server)) // You will access the server app from here
app.use(mount('/', client)) // You will access the client app from here

if (!module.parent) {
  app.listen(config.port)
  console.log('\n==============================')
  console.log(stripIndent`
      App  : ${config.appName}
      Port : ${config.port}
      Env  : ${config.environment}
    `)
  console.log('==============================\n')
}
