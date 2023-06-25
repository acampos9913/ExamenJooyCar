import { TripModel } from '@/core/models'

export type TripCreateResponseDTO = Omit<
  TripModel,
  ''
>
