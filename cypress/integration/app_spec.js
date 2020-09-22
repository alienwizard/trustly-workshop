/* eslint-disable no-undef */
describe('My First Test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  it('Needs to contain cake', () => {
    cy.contains('cake')
  })
  it('should be able to add a favorite cake', () => {
    cy.get('button').click({ multiple: true })

    const favorites = cy.get('[data-testid="favorite"]')
    console.log(favorites)
    favorites.should('be.visible')

    //expect(favorites).to.be.visible
  })
  it('should be able to remove favorite cake', () => {
    cy.get('button').click({ multiple: true })
    cy.get('button').click({ multiple: true })
    cy.get('[data-testid="favorite"]').should('not.exist')
  })
})
