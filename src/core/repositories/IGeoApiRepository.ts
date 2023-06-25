import { GeoCodeApiModel } from "../models/GeoCodeApi";

export interface IGeoCodeApiRepository {
  findAddress: (
    lat: number,
    lon: number
  ) => Promise<GeoCodeApiModel>
}
