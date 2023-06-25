import {
  IGeoCodeApiRepository,
  ITripRepository
} from '@/core/repositories'

import { ContainerFactory } from '@/main/factories/container'

import { Repositories } from '@/main/factories/shared'

export const tripRepository =
  ContainerFactory.createRepository(
    Repositories.TRIP,
  ) as ITripRepository

  export const geoCodeApiRepository =
  ContainerFactory.createRepository(
    Repositories.GEOCODEAPI,
  ) as IGeoCodeApiRepository
