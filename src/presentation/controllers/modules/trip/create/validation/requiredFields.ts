import { TripCreateRequestDTO } from '@/core/dtos/trip'
import { z } from 'zod'
export class TripValidatorAdapter{
  isValidRequestTripCreate(value: TripCreateRequestDTO): boolean {
    const schema = z.object({
      readings: z.array(
        z.object({
          time: z.number(),
          location:z.object({
            lat:	z.number(),
            lon:	z.number(),
          }),
          speed:	z.number(),
          speedLimit:	z.number()
        })
      ).min(5)
    }).partial();

    const { success } = schema.safeParse(value);

    return success
  }
}