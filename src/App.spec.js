import React from 'react'
const { render } = require('@testing-library/react')
const { default: App, CakeContext } = require('./App')

test('should render cakes', async () => {
  const { findAllByText } = render(<App />, {
    wrapper: ({ children }) => (
      <CakeContext.Provider>{children}</CakeContext.Provider>
    ),
  })
  const cakeApp = await findAllByText('Test cake')
  expect(cakeApp[0]).toBeInTheDocument()
})

test('should be able to add cake to favorite display', async () => {
  const { findAllByText, getAllByTestId } = render(<App />, {
    wrapper: ({ children }) => (
      <CakeContext.Provider>{children}</CakeContext.Provider>
    ),
  })
  const [favoriteButton] = await findAllByText('Favorite')
  expect(favoriteButton).toBeInTheDocument()
  favoriteButton.click()
  const favorites = getAllByTestId('favorite')

  expect(favorites).toMatchSnapshot()
})

test('should be able to remove cake to favorite display', async () => {
  const { findAllByText, getAllByTestId } = render(<App />, {
    wrapper: ({ children }) => (
      <CakeContext.Provider>{children}</CakeContext.Provider>
    ),
  })
  const [favoriteButton] = await findAllByText('Favorite')
  expect(favoriteButton).toBeInTheDocument()
  favoriteButton.click()

  const [favorite] = getAllByTestId('favorite')
  expect(favorite).toBeInTheDocument()

  favoriteButton.click()

  expect(favorite).not.toBeInTheDocument()
})
