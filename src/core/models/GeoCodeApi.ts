export interface GeoCodeApiModel {
  place_id: number,
  licence: string,
  powered_by: string,
  osm_type: string,
  osm_id: number,
  lat: number,
  lon: number,
  display_name: string,
  address: {
    house_number: string,
    road: string,
    neighbourhood: string,
    city: string,
    county: string,
    state: string,
    postcode: string,
    country: string,
    country_code: string
  },
  boundingbox: []
}