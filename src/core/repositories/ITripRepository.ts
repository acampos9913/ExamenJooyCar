import { TripModel } from '@/core/models'

import {
  TripDTO, TripGellAllRequestDTO
} from '@/core/dtos/trip'

export interface ITripRepository {
  create(
    data: TripDTO,
  ): Promise<TripModel>
  findAll: (
    data: TripGellAllRequestDTO
  ) => Promise<TripModel[]>
}
