import { expect, it, describe } from 'vitest'

import { UseCaseStub } from '@/__tests__/stubs'
import { useCaseSuccessMock } from '@/__tests__/mocks'
import { tripsMock } from '@/__tests__/mocks/modules'

import { TripModel } from '@/core/models'

import { TripGetAllController } from '@/presentation/controllers/modules/trip'

import { requestMockFactory, responseMockFactory } from './mocks'

const makeSut = () => {
  const tripGetAllUseCaseStub = new UseCaseStub<
    null,
    TripModel[]
  >()

  const sut = new TripGetAllController(
    tripGetAllUseCaseStub,
  )

  return {
    sut,
    tripGetAllUseCaseStub,
  }
}

describe('TripGetAllController', () => {
  it('Debe devolver el código de estado 200 si no es un error', async () => {
    const { sut, tripGetAllUseCaseStub } = makeSut()

    const useCaseStub = useCaseSuccessMock(
      tripGetAllUseCaseStub,
      tripsMock,
    )

    const request = requestMockFactory['valid']

    const response = await sut.handle(request)
    expect(useCaseStub).toHaveBeenCalledWith(request.query)

    expect(useCaseStub).toHaveBeenCalled()

    expect(response.statusCode).toBe(200)
    expect(response.body).toStrictEqual(responseMockFactory)
  })
})
