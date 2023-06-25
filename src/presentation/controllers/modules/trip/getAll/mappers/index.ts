import { TripGetAllResponseDTO } from '@/core/dtos/trip'
import { TripModel } from '@/core/models'

import { IMapper } from '@/presentation/contracts'

class TripGetAllMapper
  implements
    IMapper<TripModel, TripGetAllResponseDTO>
{
  toDTO(data: TripModel[]): TripGetAllResponseDTO[] {
    return data.map((item) => ({
      id: item.id,
      start: item.start,
      end: item.end,
      distance: item.distance,
      duration: item.duration,
      overspeedsCount: item.overspeedsCount,
      boundingBox: item.boundingBox
    }))
  }
}

export const tripGetAllMapper = new TripGetAllMapper()
