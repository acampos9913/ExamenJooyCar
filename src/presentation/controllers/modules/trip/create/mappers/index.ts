import {
  TripCreateResponseDTO,
  TripDTO,
} from '@/core/dtos/trip'
import { TripModel } from '@/core/models'

import { IMapper } from '@/presentation/contracts'

class TripCreateMapper
  implements IMapper<TripModel, TripDTO>
{
  toDTO(model: TripModel): TripCreateResponseDTO {
    return {
      id: model.id,
      start: model.start,
      end: model.end,
      distance: model.distance,
      duration: model.duration,
      overspeedsCount: model.overspeedsCount,
      boundingBox: model.boundingBox
    }
  }
}

export const tripCreateMapper = new TripCreateMapper()
