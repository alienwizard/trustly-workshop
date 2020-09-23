/* eslint-disable no-undef */
describe('My first test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Needs to contain cake', () => {
    cy.contains('cake')
  })

  it('Should be able to add a favorite cake', () => {
    cy.get('button').click({ multiple: true })

    const favorites = cy.get('[data-testid="favorite"]')
    favorites.should('be.visible')
  })

  it('Should be able to remove favorite cake', () => {
    cy.get('button').click({ multiple: true })
    cy.get('button').click({ multiple: true })

    const favorites = cy.get('[data-testid="favorite"]')
    favorites.should('not.exist')
  })
})
