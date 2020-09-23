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

test('should get cakes and display them', () => {
  const { getAllByTestId } = render(<Cakes />, {
    wrapper: createTestProvider(),
  })
  expect(getAllByTestId('cake').length).toEqual(1)
})
