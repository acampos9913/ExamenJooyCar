import { Router } from 'express'

import {
  tripRoutes,
} from './modules'

export const routes = Router()

routes.use(tripRoutes)
