export const createServer = () => {
  return (`import dotenv from 'dotenv'
dotenv.config()

// Core
import express from 'express'
import { ApolloServer } from 'apollo-server-express'

// Config
import { serverConfig } from 'config/apollo'
import { configureApp } from 'config'
import * as TypeORM from 'typeorm'

async function bootStrap() {
  const app = express()
  configureApp(app)

  try {
    const schema = await serverConfig()
    const server = new ApolloServer({ schema })
    const PORT = process.env.PORT ?? 4000
    // Inject express into apollo server
    server.applyMiddleware({ app })

    // Serve content
    app.listen(PORT, async () => {
      const conn = await TypeORM.createConnection(databaseConfig)
      if (process.env.NODE_ENV !== 'test') await conn.runMigrations()
      console.log(\`🚀 Server ready at http://localhost:\${PORT}\${server.graphqlPath}\`)
    })
  } catch (error) {
    console.error(error)
  }
}

bootStrap()
`)
}