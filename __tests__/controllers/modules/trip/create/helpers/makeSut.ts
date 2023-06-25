import { UseCaseStub } from '@/__tests__/stubs'
import { ReadingCreateRequestDTO } from '@/core/dtos/reading'

import { TripCreateRequestDTO, TripDTO } from '@/core/dtos/trip'
import { TripModel } from '@/core/models'
import { GeoCodeApiModel } from '@/core/models/GeoCodeApi'

import { TripCreateController } from '@/presentation/controllers/modules/trip'

export const makeSut = () => {
  const tripCreateUseCaseStub = new UseCaseStub<
    TripCreateRequestDTO,
    TripModel
  >()

  const geoCodeApiUseCaseStub = new UseCaseStub<
    ReadingCreateRequestDTO,
    GeoCodeApiModel
  >()

  const sut = new TripCreateController(
    tripCreateUseCaseStub,
    geoCodeApiUseCaseStub
  )

  return {
    sut,
    tripCreateUseCaseStub,
  }
}
