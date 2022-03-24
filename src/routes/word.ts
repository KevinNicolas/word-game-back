import { Router } from 'express'
import { getRandomWord } from '../controllers/word'
import { cors } from '../middlewares/cors'

const routes = Router()

routes.get('/word', cors, getRandomWord)

export const wordRoutes = routes
