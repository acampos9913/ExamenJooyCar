import {
  TripRepository,
} from '@/infra/database/mongoDB/repositories'
import { GeoCodeApiRepository } from '@/infra/services/repositories'

export enum Repositories {
  TRIP,
  GEOCODEAPI
}

export class RepositoriesFactory {
  static make(repository: Repositories) {
    switch (repository) {
      case Repositories.TRIP:
          return new TripRepository()
      case Repositories.GEOCODEAPI:
          return new GeoCodeApiRepository()
    }
  }
}
