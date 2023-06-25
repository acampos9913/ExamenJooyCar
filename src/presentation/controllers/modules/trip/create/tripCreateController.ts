import { TripCreateRequestDTO, TripDTO } from '@/core/dtos/trip'
import { TripModel } from '@/core/models'

import { IController, IHttpResponse } from '@/presentation/contracts'

import {
  badRequest,
  created,
  serverError,
} from '@/presentation/helpers'

import { MissingParamError } from '@/presentation/errors'

import { IUseCase } from '@/useCases/contracts/shared'

import { TripCreateUseCaseData } from '@/useCases/modules/trip'

import { tripCreateMapper } from './mappers'
import { generateDistance } from '@/presentation/helpers/generateDistance'
import { GeoCodeApiModel } from '@/core/models/GeoCodeApi'
import { ReadingCreateUseCaseData } from '@/useCases/modules/geoDataApi'
import { TripValidatorAdapter } from './validation'
import { INVALID_INPUTS_ERROR_MESSAGE } from '@/core/validations'
import { generateNanoId } from '@/presentation/helpers/generateNanoId'

export interface ITripCreateController
  extends TripCreateRequestDTO {}

export class TripCreateController implements IController {
  constructor(
    private readonly useCase: IUseCase<
      TripCreateUseCaseData,
      TripModel
    >,
    private readonly geoCodeApiCase: IUseCase<
      ReadingCreateUseCaseData,
      GeoCodeApiModel
    >,
  ) {}

  async handle(request: unknown): Promise<IHttpResponse> {
    const ItripData =
      request as ITripCreateController

    const validationError = TripValidatorAdapter.prototype.isValidRequestTripCreate(ItripData);


    if (!validationError) {
      return badRequest(new Error(INVALID_INPUTS_ERROR_MESSAGE));
    }

    try {

      const MinAdress = ItripData.readings.reduce((x, y) => x.time < y.time ? x : y);
      const MaxAdress = ItripData.readings.reduce((x, y) => x.time > y.time ? x : y);
      const OrderAdressTime = ItripData.readings.sort((x, y) => y.time - x.time);
      const TotalTime = OrderAdressTime.map(x => x.time)
      .map((x, y, elem) => (x - (elem[y + 1] ? elem[y + 1] : x)))
      .reduce((x, y) => x + y);

      let TotalDistance: any = OrderAdressTime.map(x => x.location)
      .map((x: any, y: any, elem: any) => (
        generateDistance(x.lat, x.lon, elem[y + 1]?elem[y + 1].lat: x.lat, elem[y + 1]?elem[y + 1].lon: x.lon)
      ))
      .reduce((x: any, y: any) => x + y);

      let Count = 0;
      
      for(let i=0; i < OrderAdressTime.length; i++){
        if(
          (OrderAdressTime[i].speed >= OrderAdressTime[i].speedLimit) &&
          (OrderAdressTime.length == i + 1))
        {
          Count++;
        }
        else if(
          (OrderAdressTime[i].speed >= OrderAdressTime[i].speedLimit) &&
          (OrderAdressTime[i + 1].speed < OrderAdressTime[i + 1].speedLimit)
        ){
          Count++;
        }
      }
      
      const addressGeoCodeStart = await this.geoCodeApiCase.execute(MinAdress);
      const addressGeoCodeEnd = await this.geoCodeApiCase.execute(MaxAdress);

      const TripControlerDto: TripDTO = {
        id: generateNanoId(),
        start: {
          time:	MinAdress.time,
          lat:	MinAdress.location.lat,
          lon:	MinAdress.location.lon,
          address: addressGeoCodeStart.data? addressGeoCodeStart.data.display_name: ""
        },
        end: {
          time:	MaxAdress.time,
          lat:	MaxAdress.location.lat,
          lon:	MaxAdress.location.lon,
          address:	addressGeoCodeEnd.data? addressGeoCodeEnd.data.display_name: ""
        },
        distance:	TotalDistance,
        duration:	TotalTime,
        overspeedsCount:	Count,
        boundingBox: [
          {
            lat:	0,
            lon:	0
          }
        ]
      }

      const { data, error } = await this.useCase.execute(TripControlerDto);

      if (error) {
        return badRequest(new Error(error))
      }

      const dataMapper = tripCreateMapper.toDTO(data!)

      return created(dataMapper);
    } catch (error) {
      return serverError()
    }
  }
}