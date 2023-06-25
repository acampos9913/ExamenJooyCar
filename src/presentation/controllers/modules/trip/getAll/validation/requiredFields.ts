import { TripGellAllRequestDTO } from '@/core/dtos/trip'
import { z } from 'zod'
export class TripValidatorAdapter{
  isValidRequestTripGetAll(value: TripGellAllRequestDTO): boolean {
    const schema = z.object({
      start_gte: z.coerce.number(),
      start_lte: z.coerce.number(),
      distance_gte: z.coerce.number(),
      limit: z.coerce.number(),
      offset: z.coerce.number()
    }).partial();

    const { success } = schema.safeParse(value);

    return success
  }
}