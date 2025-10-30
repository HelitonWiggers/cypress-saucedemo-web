import { MenuPage } from '../support/pages/menuPage'
import { LoginPage } from '../support/pages/loginPage'
import { InventoryPage } from '../support/pages/inventoryPage'

describe('Menu lateral - SauceDemo', () => {
  beforeEach(() => {
    cy.login('standard_user', 'secret_sauce')
    cy.url().should('include', '/inventory.html')
  })

  it('Deve fazer logout pelo menu', () => {
    cy.get(MenuPage.burgerBtn).click()
    cy.get(MenuPage.logoutLink).click()

    // volta pro login
    cy.url().should('not.include', '/inventory.html')
    cy.get(LoginPage.username).should('be.visible')
  })

  it('Reset App State limpa o carrinho', () => {
    // adiciona algo
    InventoryPage.addToCartByName('Sauce Labs Backpack')
    cy.get(InventoryPage.cartBadge).should('contain', '1')

    // reset
    cy.get(MenuPage.burgerBtn).click()
    cy.get(MenuPage.resetAppState).click()

    // badge some
    cy.get(InventoryPage.cartBadge).should('not.exist')
  })
})
