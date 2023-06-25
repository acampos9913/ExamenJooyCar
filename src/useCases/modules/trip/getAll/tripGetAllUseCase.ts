import { TripGellAllRequestDTO } from '@/core/dtos/trip'
import { TripModel } from '@/core/models'
import { ITripRepository } from '@/core/repositories'

import {
  IUseCase,
  IUseCaseResponse,
} from '@/useCases/contracts/shared'

import { success } from '@/useCases/helpers'

export type TripGetAllUseCaseData = TripGellAllRequestDTO

export class TripGetAllUseCase
  implements
  IUseCase<TripGellAllRequestDTO, TripModel[]>
{
  constructor(
    private readonly tripRepository: ITripRepository,
  ) {}

  async execute(TipData : TripGetAllUseCaseData): Promise<
    IUseCaseResponse<TripModel[] | null>
  > {
    const trips = await this.tripRepository.findAll(TipData);

    return success(trips)
  }
}
