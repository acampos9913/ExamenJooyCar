import { ReadingCreateRequestDTO } from '@/core/dtos/reading'
import { GeoCodeApiModel } from '@/core/models/GeoCodeApi'
import { IGeoCodeApiRepository } from '@/core/repositories'

import {
  IUseCase,
  IUseCaseResponse,
} from '@/useCases/contracts/shared'

import { success } from '@/useCases/helpers'

export type ReadingCreateUseCaseData =
ReadingCreateRequestDTO

export class GeoCodeApiGetAddressUseCase
  implements
  IUseCase<ReadingCreateRequestDTO, GeoCodeApiModel>
{
  constructor(
    private readonly geoCodeApiRepository: IGeoCodeApiRepository,
  ) {}

  async execute(ReadingData : ReadingCreateUseCaseData): Promise<
    IUseCaseResponse<GeoCodeApiModel>
  > {
    const address = await this.geoCodeApiRepository.findAddress(ReadingData.location.lat, ReadingData.location.lon);

    return success(address)
  }
}
