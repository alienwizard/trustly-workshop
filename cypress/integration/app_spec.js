/* eslint-disable no-undef */
describe('My First Test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  it('Needs to contain cake', () => {
    cy.contains('cake')
  })
  it('should be able to add a favorite cake', () => {
    cy.get('').click()
  })
})
