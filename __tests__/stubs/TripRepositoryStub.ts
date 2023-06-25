import { TripDTO, TripGellAllRequestDTO } from '@/core/dtos/trip'
import { TripModel } from '@/core/models'
import { ITripRepository } from '@/core/repositories'

import { tripMock, tripsMock } from '../mocks/modules'

class TripRepositoryStub implements ITripRepository {
  async create(
    data: TripDTO,
  ): Promise<TripModel> {
    return tripMock
  }

  async findAll(
    data: TripGellAllRequestDTO
  ): Promise<TripModel[]> {
    return tripsMock
  }
}

export const tripRepositoryStub =
  new TripRepositoryStub()
