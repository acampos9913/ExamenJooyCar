import swaggerAutogen from 'swagger-autogen'

const outputFile = '../../docs/swagger-output.json'
const endpointsFiles = ['../routes/modules/*Routes.ts']

swaggerAutogen({ openapi: '3.0.0' })(
  outputFile,
  endpointsFiles
).then(async () => {
  await import('../../infra/server/index')
})
