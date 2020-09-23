import React from 'react'
import { render } from '@testing-library/react'
import Cake from './Cake'
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
test('should render a cake name', () => {
  const { getByText } = render(<Cake name="Test cake" />, {
    wrapper: createTestProvider(),
  })

  expect(getByText('Test cake')).toBeInTheDocument()
})

test('should be able to add a favorite cake', () => {
  const dispatchSpy = jest.fn()

  const { getByText } = render(<Cake name="Test cake" id="testId" />, {
    wrapper: createTestProvider(dispatchSpy),
  })

  const favoriteButton = getByText('Favorite')
  favoriteButton.click()

  expect(dispatchSpy).toHaveBeenCalledWith({
    type: 'add_favorite',
    payload: { id: 'testId', name: 'Test cake' },
  })
})
