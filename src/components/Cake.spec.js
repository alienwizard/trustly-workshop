import React from 'react'
import Cake from './Cake'
import { render } from '@testing-library/react'
import { CakeContext } from '../App'

describe('Cake', () => {
  it('should display the title of a cake', () => {
    const { getByText } = render(<Cake name="Test cake" description="" />, {
      wrapper: ({ children }) => (
        <CakeContext.Provider value={{ favorites: [], dispatch: jest.fn() }}>
          {children}
        </CakeContext.Provider>
      ),
    })

    expect(getByText('Test cake')).toBeInTheDocument()
  })

  it('should be able to add cake to favorite', () => {
    const dispatchSpy = jest.fn()
    const { getByText } = render(
      <Cake name="Test cake" description="" calories={10} id="testId" />,
      {
        wrapper: ({ children }) => (
          <CakeContext.Provider
            value={{ favorites: [], dispatch: dispatchSpy }}
          >
            {children}
          </CakeContext.Provider>
        ),
      }
    )
    const button = getByText('Favorite')
    expect(button).toBeInTheDocument()

    button.click()

    expect(dispatchSpy).toHaveBeenCalledWith({
      type: 'add_favorite',
      payload: {
        id: 'testId',
        name: 'Test cake',
      },
    })
  })
})
