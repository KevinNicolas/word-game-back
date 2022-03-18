import { Router } from 'express'
import { wordRoutes } from './word'

const router = Router()

router.use(wordRoutes)

export const routes = router
