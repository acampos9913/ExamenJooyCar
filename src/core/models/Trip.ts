export interface TripModel {
  id: string
  start: {
    time:	number,
    lat:	number,
    lon:	number,
    address:	string
  },
  end: {
    time:	number,
    lat:	number,
    lon:	number,
    address:	string
  },
  distance:	number,
  duration:	number,
  overspeedsCount:	number,
  boundingBox: [
    {
      lat:	number,
      lon:	number
    }
  ]
}
