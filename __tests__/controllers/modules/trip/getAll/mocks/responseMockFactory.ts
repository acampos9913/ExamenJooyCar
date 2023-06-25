import { TripGetAllResponseDTO } from "@/core/dtos/trip";

export const responseMockFactory: TripGetAllResponseDTO[] = [
  {
    "id": "a",
    "start": {
        "time": 1642500462000,
        "lat": -33.580158,
        "lon": -70.567227,
        "address": "a"
    },
    "end": {
        "time": 1642500498000,
        "lat": -33.580053,
        "lon": -70.568502,
        "address": "a"
    },
    "distance": 0.27394958481752085,
    "duration": 36000,
    "overspeedsCount": 1,
    "boundingBox": [
        {
            "lat": 0,
            "lon": 0
        }
    ]
  }
]
