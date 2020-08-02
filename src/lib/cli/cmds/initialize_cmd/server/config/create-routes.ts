export const createRoutes = () => {
  return (`// Core
import { join } from 'path'

// Types
import { Router } from 'express'

const routes = Router()

routes.get('*', (_, res) => {
  res.sendFile(join(__dirname, '../../../client/build', 'index.html'))
})

export default routes`)
}