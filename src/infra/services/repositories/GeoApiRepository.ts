import { GEOAPI_URL } from '@/config'
import { IGeoCodeApiRepository } from '@/core/repositories'

import { FetchAdapter } from '@/infra/adapters/fetch'
import { GeoCodeApiModel } from '@/core/models/GeoCodeApi'

export class GeoCodeApiRepository
  implements IGeoCodeApiRepository
{
  async findAddress(
    lat: number,
    lon: number,
  ): Promise<GeoCodeApiModel> {
    const GeoModel: GeoCodeApiModel = await FetchAdapter.prototype.Request(
      GEOAPI_URL + "/reverse?lat=" + lat + "&lon=" + lon + "",
      {}
    )
    return GeoModel;
  }
}
