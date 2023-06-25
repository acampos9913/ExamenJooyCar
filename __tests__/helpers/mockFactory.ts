import { IUseCase } from '@/useCases/contracts/shared'

import {
  errorMock,
  useCaseErrorMock,
  useCaseSuccessMock,
} from '../mocks'

export const mockFactory = () => {
  return {
    errorMock: (stub: unknown, methodName: never) =>
      errorMock(stub, methodName),
    useCaseErrorMock: (
      stub: IUseCase<unknown, unknown>,
      error: string,
    ) => useCaseErrorMock(stub, error),
    useCaseSuccessMock: (
      stub: IUseCase<unknown, unknown>,
      data: unknown,
    ) => useCaseSuccessMock(stub, data),
  }
}
