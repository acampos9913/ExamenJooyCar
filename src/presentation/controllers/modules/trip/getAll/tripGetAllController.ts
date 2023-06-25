import { TripModel } from '@/core/models'

import { IController, IHttpResponse } from '@/presentation/contracts'

import { badRequest, ok, serverError } from '@/presentation/helpers'

import { IUseCase } from '@/useCases/contracts/shared'
import { TripGetAllUseCaseData } from '@/useCases/modules/trip'

import { tripGetAllMapper } from './mappers'
import { TripGellAllRequestDTO } from '@/core/dtos/trip'
import { TripValidatorAdapter } from './validation'
import { INVALID_INPUTS_ERROR_MESSAGE } from '@/core/validations'

export interface TripGetAllController
  extends TripGellAllRequestDTO {
    query: any
  }

export class TripGetAllController implements IController {
  constructor(
    private readonly useCase: IUseCase<
    TripGetAllUseCaseData,
    TripModel[]
    >,
  ) {}

  async handle(request: unknown): Promise<IHttpResponse> {
    try {
      const ItripData =
      request as TripGetAllController

      const tripGellAllRequestDTO: TripGellAllRequestDTO = ItripData.query;

      const validationError = TripValidatorAdapter.prototype.isValidRequestTripGetAll(tripGellAllRequestDTO);

      if (!validationError) {
        return badRequest(new Error(INVALID_INPUTS_ERROR_MESSAGE));
      }

      const { data } = await this.useCase.execute(tripGellAllRequestDTO)

      const dataMapper = tripGetAllMapper.toDTO(data!)

      return ok(dataMapper)
    } catch (error) {
      return serverError()
    }
  }
}
