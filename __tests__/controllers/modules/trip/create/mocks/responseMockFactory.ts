import { TripCreateResponseDTO, TripGetAllResponseDTO } from "@/core/dtos/trip";

export const responseMockFactory: TripCreateResponseDTO =
{
  "id": "",
  "start": {
      "time": 1642500462000,
      "lat": -33.580158,
      "lon": -70.567227,
      "address": "1223, Avenida El Peñón, Villa Los Prados, Puente Alto, Provincia de Cordillera, Región Metropolitana de Santiago, 8220093, Chile"
  },
  "end": {
      "time": 1642500498000,
      "lat": -33.580053,
      "lon": -70.568502,
      "address": "1130, Avenida El Peñón, Villa Los Prados, Puente Alto, Provincia de Cordillera, Región Metropolitana de Santiago, 8220093, Chile"
  },
  "distance": 0.27394958481752085,
  "duration": 36000,
  "overspeedsCount": 1,
  "boundingBox": [
      {
          "lat": 0,
          "lon": 0,
      }
  ]
}
