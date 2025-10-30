import { InventoryPage } from '../support/pages/inventoryPage'
import { CartPage } from '../support/pages/cartPage'
import { CheckoutPage } from '../support/pages/checkoutPage'

describe('Checkout - SauceDemo', () => {
  beforeEach(() => {
    cy.login('standard_user', 'secret_sauce')
    cy.url().should('include', '/inventory.html')
  })

  it('Fluxo feliz: Adicionar item, checkout e finalizar @smoke', () => {
    InventoryPage.addToCartByName('Sauce Labs Backpack')
    cy.get(InventoryPage.cartLink).click()
    cy.get(CartPage.checkout).click()

    CheckoutPage.fillYourInfo({ first: 'Heliton', last: 'Wiggers', zip: '85000-000' })
    cy.get(CheckoutPage.continue).click()

    cy.url().should('include', '/checkout-step-two.html')
    cy.get(CheckoutPage.summaryTotal).should('contain', 'Total')
    cy.get(CheckoutPage.finish).click()

    cy.url().should('include', '/checkout-complete.html')
    cy.get(CheckoutPage.completeHeader).should('contain', 'Thank you for your order')
  })

  it('Validações: Campos obrigatórios não preenchidos', () => {
    InventoryPage.addToCartByName('Sauce Labs Bolt T-Shirt')
    cy.get(InventoryPage.cartLink).click()
    cy.get(CartPage.checkout).click()

    // tenta continuar sem preencher
    cy.get(CheckoutPage.continue).click()
    cy.get(CheckoutPage.error).should('contain', 'First Name is required')

    // preenche apenas firstName
    CheckoutPage.fillYourInfo({ first: 'Heliton' })
    cy.get(CheckoutPage.continue).click()
    cy.get(CheckoutPage.error).should('contain', 'Last Name is required')

    // preenche first + last, falta zip
    CheckoutPage.fillYourInfo({ first: 'Heliton', last: 'Wiggers' })
    cy.get(CheckoutPage.continue).click()
    cy.get(CheckoutPage.error).should('contain', 'Postal Code is required')
  })
})
