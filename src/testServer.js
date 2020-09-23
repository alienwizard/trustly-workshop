import { rest } from 'msw'
import { setupServer } from 'msw/node'

const cakes = [
  {
    id: 1,
    name: 'Test cake',
    description: 'best cake',
    calories: 100,
  },
]

const handlers = [
  rest.get('/api/cakes', (req, res, ctx) => {
    res(ctx.json(cakes))
  }),
]

const server = setupServer(...handlers)
export { server, rest }
