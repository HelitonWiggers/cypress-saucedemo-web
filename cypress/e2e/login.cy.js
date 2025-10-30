import { LoginPage } from '../support/pages/loginPage'

describe('Login - SauceDemo', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Deve fazer login com credenciais válidas @smoke', () => {
    cy.login('standard_user', 'secret_sauce')

    cy.url().should('include', '/inventory.html')
    cy.get('.title').should('contain', 'Products')
  })

  it('Deve exibir erro ao tentar login com senha incorreta', () => {
    cy.login('standard_user', 'senha_errada')

    cy.get(LoginPage.error).should('be.visible')
      .and('contain', 'Username and password do not match')
  })

  it('Deve exibir erro ao deixar os campos em branco', () => {
    cy.login()

    cy.get(LoginPage.error).should('be.visible')
      .and('contain', 'Username is required')
  })

  it('Deve exibir erro ao deixar o usuário em branco', () => {
    cy.login(null, 'secret_sauce')

    cy.get(LoginPage.error).should('be.visible')
      .and('contain', 'Username is required')
  })

  it('Deve exibir erro ao deixar a senha em branco', () => {
    cy.login('standard_user')

    cy.get(LoginPage.error).should('be.visible')
      .and('contain', 'Password is required')
  })

  it('Deve exibir erro ao tentar login com usuário bloqueado', () => {
    cy.login('locked_out_user', 'secret_sauce')

    cy.get(LoginPage.error).should('be.visible')
      .and('contain', 'Sorry, this user has been locked out.')
  })
})
