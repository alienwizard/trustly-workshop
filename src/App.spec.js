import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

test('should be able to add a cake to the favorite display', async () => {
  const { findAllByTestId } = render(<App />)

  const [favoriteButton] = await findAllByTestId('favoriteButton')

  favoriteButton.click()

  const favorites = await findAllByTestId('favorite')

  expect(favorites.length).toBeTruthy()
})
