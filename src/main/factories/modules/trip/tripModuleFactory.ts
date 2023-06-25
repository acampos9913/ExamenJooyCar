import {
  TripCreateController,
  TripGetAllController,
} from '@/presentation/controllers/modules/trip'

import {
  TripCreateUseCase,
  TripGetAllUseCase,
} from '@/useCases/modules/trip'

import { TripModuleAction } from './actions'

import { geoCodeApiRepository, tripRepository } from './container'
import { GeoCodeApiGetAddressUseCase } from '@/useCases/modules/geoDataApi'

export class TripModuleFactory {
  makeController(action: TripModuleAction) {
    switch (action) {
      case TripModuleAction.CREATE:
        const tripCreateUseCase =
          new TripCreateUseCase(
            tripRepository,
          )

        const geoCodeApiCase =
          new GeoCodeApiGetAddressUseCase(
            geoCodeApiRepository,
          )

        return new TripCreateController(
          tripCreateUseCase,
          geoCodeApiCase
        )

      case TripModuleAction.GET_ALL:
        const tripGetAllUseCase =
          new TripGetAllUseCase(tripRepository)

        return new TripGetAllController(
          tripGetAllUseCase,
        )
    }
  }
}
