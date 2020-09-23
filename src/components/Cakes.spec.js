import React from 'react'
import { render } from '@testing-library/react'
import Cakes from './Cakes.js'
import { CakeContext } from '../App'

function createTestProvider(dispatchSpy) {
  return ({ children }) => {
    return (
      <CakeContext.Provider value={{ favorites: [], dispatch: dispatchSpy }}>
        {children}
      </CakeContext.Provider>
    )
  }
}

test('should get cakes and display them', async () => {
  const { findAllByTestId } = render(<Cakes />, {
    wrapper: createTestProvider(),
  })
  const testCakes = await findAllByTestId('cake')
  expect(testCakes.length).toEqual(1)
})
