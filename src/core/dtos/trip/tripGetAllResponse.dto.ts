import { TripModel } from '@/core/models'

export type TripGetAllResponseDTO = Omit<
  TripModel,
  ''
>
