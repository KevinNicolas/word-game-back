import express from 'express'
import { routes } from './routes'

export const app = async () => {
  // Configure express
  const app = express()
  app.use(express.json())

  app.set('port', process.env.PORT || 3000)
  app.use(routes)

  app.listen(app.get('port'), () => console.log(`Server listen on port ${app.get('port')}`))
}
