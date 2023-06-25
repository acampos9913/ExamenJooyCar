import { expect, it, describe } from 'vitest'

import {
  useCaseSuccessMock,
} from '@/__tests__/mocks'

import { tripMock } from '@/__tests__/mocks/modules'

import { makeSut } from './helpers'

import { requestMockFactory, responseMockFactory } from './mocks'

describe('TripCreateController', () => {
  it('Debe devolver el código de estado 201 si se proporcionan datos válidos', async () => {
    const { sut, tripCreateUseCaseStub } = makeSut()

    useCaseSuccessMock(
      tripCreateUseCaseStub,
      tripMock,
    )

    const response = await sut.handle(requestMockFactory['valid'])
    
    if(response.body && response.body.id){
      response.body.id = ""
    }

    expect(response.statusCode).toBe(201)
    expect(response.body).toStrictEqual(responseMockFactory)
  })
})
