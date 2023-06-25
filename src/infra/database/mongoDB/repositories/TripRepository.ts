import { TripModel } from '@/core/models'
import { ITripRepository } from '@/core/repositories'
import {
  TripDTO, TripGellAllRequestDTO
} from '@/core/dtos/trip'

import { Trip } from '../models'

export class TripRepository
  implements ITripRepository
{
  async create(
    data: TripDTO
  ): Promise<TripModel> {
    const trip = new Trip(data)

    await trip.save()

    //trip.id = trip._id

    return trip
  }

  async findAll(
    data: TripGellAllRequestDTO
  ): Promise<TripModel[]> {
    const { start_gte, start_lte, distance_gte, limit, offset } = data;

    const Trips: TripModel[] = await Trip.find(
      {
      "start.time": { $gte: start_gte, $lte: start_lte},
      "distance": { $gte: distance_gte}
      },
      {
        _id: false,
        "boundingBox._id": false
      }
    )
    .skip(offset)
    .limit(limit).lean();

    return Trips
  }
}
