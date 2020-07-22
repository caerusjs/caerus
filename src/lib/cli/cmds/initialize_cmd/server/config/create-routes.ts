export const createRoutes = () => {
  return (`// Core
import bodyParser from 'body-parser'
import { join } from 'path'

// Types
import { Router } from 'express'

const routes = Router()
const jsonParser = bodyParser.json()

routes.get('*', (_, res) => {
  res.sendFile(join(__dirname, '../../../client/build', 'index.html'))
})

export default routes`)
}