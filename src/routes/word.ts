import { Router } from 'express'
import { getRandomWord, getWordCategories } from '../controllers/word'
import { cors } from '../middlewares/cors'

const routes = Router()

routes.get('/', cors, getRandomWord)

routes.get('/categories', cors, getWordCategories)

export const wordRoutes = Router().use('/word', routes)
