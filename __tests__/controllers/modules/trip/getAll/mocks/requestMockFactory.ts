type RequestMockType = 'missing-id' | 'invalid-id' | 'valid'

interface IRequest {
  query: {
    start_gte?: string,
    start_lte?: string,
    distance_gte?: string,
    limit?: string,
    offset?: string
  }
}

export const requestMockFactory: Record<RequestMockType, IRequest> = {
  'missing-id': {
    query: {},
  },
  'invalid-id': {
    query: {
      start_gte: 'invalid_id',
      start_lte: 'invalid_id',
      distance_gte: 'invalid_id',
      limit: 'invalid_id',
      offset: 'invalid_id'
    },
  },
  valid: {
    query: {
      start_gte: '1642500462000',
      start_lte: '1642500462000',
      distance_gte: '0',
      limit: '1',
      offset: '0'
    },
  },
}
