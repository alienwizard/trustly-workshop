import { rest } from 'msw'
import { setupServer } from 'msw/node'

const cakes = [{ id: 1, name: 'Test cake', description: 'test', calories: 100 }]

const handlers = [
  rest.get('/api/cakes', async (req, res, ctx) => {
    return res(ctx.json(cakes))
  }),
]

const server = setupServer(...handlers)
export { server, rest }
