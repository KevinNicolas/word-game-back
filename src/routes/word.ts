import { Router } from 'express'
import { getRandomWord } from '../controllers/word'

const routes = Router()

routes.get('/word', getRandomWord)

export const wordRoutes = routes
