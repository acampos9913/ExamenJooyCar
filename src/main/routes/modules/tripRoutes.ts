import { Router } from 'express'

import { adaptRoute } from '@/infra/adapters/http/express/adaptRoute'

import {
  TripModuleAction,
  TripModuleFactory,
} from '@/main/factories/modules'

const tripModuleFactory = new TripModuleFactory()

export const tripRoutes = Router()

tripRoutes.post(
  '/trips/v1',
  adaptRoute(
    tripModuleFactory.makeController(
      TripModuleAction.CREATE,
    ),
  ),
)

tripRoutes.get(
  '/trips/v1',
  adaptRoute(
    tripModuleFactory.makeController(
      TripModuleAction.GET_ALL,
    ),
  ),
)
