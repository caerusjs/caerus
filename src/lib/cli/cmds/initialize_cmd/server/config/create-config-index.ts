export const createConfigIndex = () => {
  return (`// Core
import { Express } from 'express'
import helmet from 'helmet'

// Config
import serveStaticAssets from 'config/assets'
import applyRoutes from 'config/routes'
import configureCORs from 'config/cors'

const environment = process.env.NODE_ENV

export const configureApp = (app: Express) => {
  if (environment === 'production') {
    // Enforce SSL
    app.use(helmet())
    app.use(serveStaticAssets)
  }
  // Configure
  app.use(configureCORs)

  app.use('/', applyRoutes)
}
`)
}