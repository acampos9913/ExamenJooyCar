import { UseCaseStub } from '@/__tests__/stubs'
import { TripGellAllRequestDTO } from '@/core/dtos/trip'

import { TripModel } from '@/core/models'
import { TripGetAllController } from '@/presentation/controllers/modules/trip'


export const makeSut = () => {
  const TripGetAllUseCaseStub = new UseCaseStub<
    TripGellAllRequestDTO,
    TripModel[]
  >()

  const sut = new TripGetAllController(
    TripGetAllUseCaseStub,
  )

  return {
    sut,
    TripGetAllUseCaseStub,
  }
}
