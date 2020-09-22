import React from 'react'
import { render } from '@testing-library/react'
import { CakeContext } from '../App'
const { default: Cakes } = require('./Cakes')

describe('Cakes', () => {
  it('should get cakes from server and display them', async () => {
    const { findAllByText } = render(<Cakes />, {
      wrapper: ({ children }) => (
        <CakeContext.Provider value={{ favorites: [], dispatch: jest.fn() }}>
          {children}
        </CakeContext.Provider>
      ),
    })
    const cakes = await findAllByText('Test cake')
    expect(cakes.length).toEqual(1)
  })
})
