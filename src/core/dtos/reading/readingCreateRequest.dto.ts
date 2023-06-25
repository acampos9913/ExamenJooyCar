export interface ReadingCreateRequestDTO {
  time: number,

  location: {
    lat:	number,
    lon:	number,
  }
  speed:	number
  speedLimit:	number
}
