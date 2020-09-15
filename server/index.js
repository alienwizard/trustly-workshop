const express = require('express')

const app = express()

const cakes = [
  {
    id: 1,
    name: 'Prinsesstårta',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque hendrerit fringilla egestas. Morbi non condimentum nulla, non pulvinar tortor. Vivamus a pulvinar ligula, id ultrices massa. Cras imperdiet felis ac faucibus aliquam. Suspendisse non nisl sed libero venenatis viverra. Curabitur id elit quis tellus iaculis blandit. Aenean aliquam dolor eu ullamcorper ultricies. Suspendisse pellentesque mauris non venenatis aliquam. Donec facilisis tristique dolor, et varius urna.',
    calories: 200,
  },
  {
    id: 2,
    name: 'Cheese cake',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque hendrerit fringilla egestas. Morbi non condimentum nulla, non pulvinar tortor. Vivamus a pulvinar ligula, id ultrices massa. Cras imperdiet felis ac faucibus aliquam. Suspendisse non nisl sed libero venenatis viverra. Curabitur id elit quis tellus iaculis blandit. Aenean aliquam dolor eu ullamcorper ultricies. Suspendisse pellentesque mauris non venenatis aliquam. Donec facilisis tristique dolor, et varius urna.',
    calories: 100,
  },
  {
    id: 3,
    name: 'Apple cake',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque hendrerit fringilla egestas. Morbi non condimentum nulla, non pulvinar tortor. Vivamus a pulvinar ligula, id ultrices massa. Cras imperdiet felis ac faucibus aliquam. Suspendisse non nisl sed libero venenatis viverra. Curabitur id elit quis tellus iaculis blandit. Aenean aliquam dolor eu ullamcorper ultricies. Suspendisse pellentesque mauris non venenatis aliquam. Donec facilisis tristique dolor, et varius urna.',
    calories: 100,
  },
  {
    id: 4,
    name: 'Schwarzwaldtårta',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque hendrerit fringilla egestas. Morbi non condimentum nulla, non pulvinar tortor. Vivamus a pulvinar ligula, id ultrices massa. Cras imperdiet felis ac faucibus aliquam. Suspendisse non nisl sed libero venenatis viverra. Curabitur id elit quis tellus iaculis blandit. Aenean aliquam dolor eu ullamcorper ultricies. Suspendisse pellentesque mauris non venenatis aliquam. Donec facilisis tristique dolor, et varius urna.',
    calories: 100,
  },
  {
    id: 5,
    name: 'Chocolate cake',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque hendrerit fringilla egestas. Morbi non condimentum nulla, non pulvinar tortor. Vivamus a pulvinar ligula, id ultrices massa. Cras imperdiet felis ac faucibus aliquam. Suspendisse non nisl sed libero venenatis viverra. Curabitur id elit quis tellus iaculis blandit. Aenean aliquam dolor eu ullamcorper ultricies. Suspendisse pellentesque mauris non venenatis aliquam. Donec facilisis tristique dolor, et varius urna.',
    calories: 300,
  },
]

app.get('/api/cakes', (req, res) => {
  res.send(cakes)
})

app.get('/', (req, res) => res.send('hej'))

app.listen(9000, () => {
  console.log('App is listening on port 9000')
})
