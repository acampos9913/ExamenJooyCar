import { TripDTO } from '@/core/dtos/trip'
import { TripModel } from '@/core/models'

import {
  ITripRepository
} from '@/core/repositories'

import {
  IUseCase,
  IUseCaseResponse,
} from '@/useCases/contracts/shared'

import { error, success } from '@/useCases/helpers'

export type TripCreateUseCaseData = TripDTO

export class TripCreateUseCase
  implements
    IUseCase<TripDTO, TripModel>
{
  constructor(
    private readonly tripRepository: ITripRepository
  ) {}

  async execute(TipData : TripCreateUseCaseData): Promise<
    IUseCaseResponse<TripModel | null>
  > {
    const trip = await this.tripRepository.create(TipData);

    return success(trip);
  }
}
